import { connection } from '../database/connection'
import { Property, Packet } from '../types'

// Get all properties
export const getProperties = async (): Promise<Property[]> => {
  const query = `SELECT * FROM properties ORDER BY tbl_timestamp DESC;`
  return connection.query(query, [])
}

// Create property
export const createProperty = async ({ name, address, price, description }): Promise<Packet> => {
  const query = `INSERT INTO properties (name,address,price,description) VALUES (?,?,?,?);`
  return connection.query(query, [name, address, price, description])
}

// Update property
export const updateProperty = async (propertyId, { name, address, price, description }): Promise<Packet> => {
  const query = `
  UPDATE properties 
  SET 
      name = ?,
      address = ?,
      price = ?,
      description = ?
  WHERE
      id = ?;
          `
  return connection.query(query, [name, address, price, description, propertyId])
}

// Delete property
export const deleteProperty = async (propertyId): Promise<Packet> => {
  const query = ` DELETE FROM properties WHERE id = ?;`
  return connection.query(query, [propertyId])
}
