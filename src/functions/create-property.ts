import { formatSafeHttpError } from '../helpers'
import { createProperty } from '../services/properties'
import { Response } from '../types'
import { createMiddyHandler } from '../helpers'

// Create property handler
export const createPropertyHandler = async (event): Promise<Response> => {
  try {
    const propertyId = await createProperty(event)
    return {
      statusCode: 200,
      body: JSON.stringify(`Property with id: ${propertyId} created succesfully!`),
    }
  } catch (error) {
    console.log(error)
    return formatSafeHttpError(error)
  }
}

export const handler = createMiddyHandler(createPropertyHandler)
