import { BadRequest } from 'http-json-errors'
import { formatSafeHttpError } from '../src/helpers'

describe('helpers', () => {
  describe('.formatSafeHttpError()', () => {
    test('returns 400 response for known errors', () => {
      try {
        const knownError = new BadRequest('some-known-error')
        throw knownError
      } catch (knownError) {
        const safeError = formatSafeHttpError(knownError)
        expect(safeError.statusCode).toBe(400)
        expect(safeError).toHaveProperty('body')
        const parsedBody = JSON.parse(safeError.body)
        expect(parsedBody).toEqual({
          isHttpError: true,
          statusCode: 400,
          title: 'Bad Request',
          message: 'some-known-error',
          type: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400',
          body: { error_text: 'some-known-error' },
        })
      }
    })

    test('returns 500 response for unknown errors', () => {
      try {
        const unknownError = new Error('some-unknown-error')
        throw unknownError
      } catch (unknownError) {
        const safeError = formatSafeHttpError(unknownError)
        expect(safeError.statusCode).toBe(500)
        expect(safeError).toHaveProperty('body')
        const parsedBody = JSON.parse(safeError.body)
        expect(parsedBody).toEqual({
          isHttpError: true,
          statusCode: 500,
          title: 'Internal Server Error',
          message: "The server has encountered a situation it doesn't know how to handle.",
          type: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500',
        })
      }
    })
  })
})
