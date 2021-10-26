import { formatSafeHttpError } from '../helpers'
import { updateProperty } from '../services/properties'
import { Response } from '../types'
import { createMiddyHandler } from '../helpers'

// Update property handler
export const updatePropertyHandler = async (event): Promise<Response> => {
  try {
    const { packet, propertyId } = await updateProperty(event)
    const message = packet.affectedRows
      ? `Property with id: ${propertyId} updated succesfully!`
      : `Property with id: ${propertyId} doesn't exist!`
    return {
      statusCode: 200,
      body: JSON.stringify(message),
    }
  } catch (error) {
    console.log(error)
    return formatSafeHttpError(error)
  }
}

export const handler = createMiddyHandler(updatePropertyHandler)
