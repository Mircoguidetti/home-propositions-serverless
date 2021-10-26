import { InternalServerError } from 'http-json-errors'
import { cors, doNotWaitForEmptyEventLoop, httpErrorHandler, jsonBodyParser } from 'middy/middlewares'
import middy from 'middy'
import { propOr } from 'ramda'

// Format safe http errror
export const formatSafeHttpError = (error: any): { readonly statusCode; readonly body } => {
  const statusCode = propOr(500, 'statusCode', error)
  const safeError = statusCode >= 500 ? new InternalServerError() : error
  return {
    statusCode,
    body: JSON.stringify(safeError),
  }
}

// Create handler
export const createMiddyHandler = (handler) => {
  const middyHandler = middy(handler)
    .use(doNotWaitForEmptyEventLoop())
    .use(httpErrorHandler())
    .use(cors())
    .use(jsonBodyParser())
  return middyHandler
}
