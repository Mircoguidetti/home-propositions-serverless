import { formatSafeHttpError } from '../helpers'
import { deleteProperty } from '../services/properties'
import { Response } from '../types'
import { createMiddyHandler } from '../helpers'

// Delete property handler
export const deletePropertyHandler = async (event): Promise<Response> => {
  try {
    const { packet, propertyId } = await deleteProperty(event)
    const message = packet.affectedRows
      ? `Property with id: ${propertyId} deleted succesfully!`
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

export const handler = createMiddyHandler(deletePropertyHandler)
