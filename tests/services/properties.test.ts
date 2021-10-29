import * as propertiesService from '../../src/services/properties'
import { properties, propertyBody, pathParameters, packet } from '../mock-data'

jest.mock('../../src/repositories/properties', () => {
  return {
    getProperties: () => properties,
    createProperty: () => packet,
    updateProperty: () => ({ packet, propertyId: 1 }),
    deleteProperty: () => ({ packet, propertyId: 1 }),
  }
})

describe('properties-service', () => {
  describe('.getProperties()', () => {
    test('Should return an array', async () => {
      const properties = await propertiesService.getProperties()
      expect(Array.isArray(properties)).toBe(true)
    })
    test('return the correct value', async () => {
      const properties = await propertiesService.getProperties()
      expect(properties[0].name).toEqual(properties[0].name)
    })
  })
  describe('.createProperty()', () => {
    test('create property should return a number', async () => {
      const insertId = await propertiesService.createProperty({ body: propertyBody })
      expect(typeof insertId).toBe('number')
    })
  })
  describe('.updateProperty()', () => {
    test('update property to return the correct values', async () => {
      const { packet, propertyId } = await propertiesService.updateProperty({ body: propertyBody, pathParameters })
      expect(packet).toEqual(packet)
      expect(propertyId).toEqual(1)
    })
  })
  describe('.deleteProperty()', () => {
    test('delete property to return the correct values', async () => {
      const { packet, propertyId } = await propertiesService.deleteProperty({ pathParameters })
      expect(packet).toEqual(packet)
      expect(propertyId).toEqual(1)
    })
  })
})
