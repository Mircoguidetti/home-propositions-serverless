import { formatSafeHttpError } from '../helpers'
import { getProperties } from '../services/properties'
import { Response } from '../types'
import { createMiddyHandler } from '../helpers'

// Get all properties handler
export const getPropertiesHandler = async (): Promise<Response> => {
  try {
    const properties = await getProperties()
    return {
      statusCode: 200,
      body: JSON.stringify(properties),
    }
  } catch (error) {
    console.log(error)
    return formatSafeHttpError(error)
  }
}

export const handler = createMiddyHandler(getPropertiesHandler)
