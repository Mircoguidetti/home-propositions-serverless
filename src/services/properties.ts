import * as propertiesRepository from '../repositories/properties'
import { Packet } from '../types'

// Get all properties service
export const getProperties = async () => {
  const properties = await propertiesRepository.getProperties()
  return properties
}

// Create property service
export const createProperty = async ({ body }): Promise<number> => {
  const { insertId } = await propertiesRepository.createProperty({ ...body })
  return insertId
}

// Update property service
export const updateProperty = async ({ body, pathParameters }): Promise<{ packet: Packet; propertyId: number }> => {
  const propertyId = parseInt(pathParameters.propertyId)
  const packet = await propertiesRepository.updateProperty(propertyId, { ...body })
  return { packet, propertyId }
}

// Delete property service
export const deleteProperty = async ({ pathParameters }): Promise<{ packet: Packet; propertyId: number }> => {
  const propertyId = parseInt(pathParameters.propertyId)
  const packet = await propertiesRepository.deleteProperty(propertyId)
  return { packet, propertyId }
}
