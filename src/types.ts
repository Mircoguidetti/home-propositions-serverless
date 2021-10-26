export interface Response {
  statusCode: number
  body: string
}

export interface Property {
  id: number
  name: string
  address: string
  price: number
  description: string
}

export interface Packet {
  fieldCount: number
  affectedRows: number
  insertId: number
  serverStatus: number
  warningCount: number
  message: string
  protocol41: boolean
  changedRows: number
}
