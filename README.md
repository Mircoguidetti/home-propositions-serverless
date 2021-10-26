# Home Proposition Serverless

This is a serverless application providing a REST API for properties.

### Problem to solve?

- Create RESTful API to display,create,edit and delete properties.

## Run the project

### Install

    npm install

### Run migrations

    src/database/migrations/properties.sql

### Run the app

    npm start

### Run the tests

    npm run test

### REST API

The REST API is described below.

### Get list of Properties

### Request

`GET /{stage}/properties`

    curl -i -H 'Accept: application/json' http://localhost:3000/local/properties

### Response Example

    [{
        "id": 3,
        "name": "Pitt Flat\n\n",
        "address": "Pitt Street, London, W8\n\n",
        "price": 320000,
        "description": "This was one of Spink's flagship schemes within Central London and the resulting family home is flooded with natural light and boasts exceptional living, incredible outside space, generous off street parking, staff accommodation and full leisure facilities."
    }]

### Request

`POST /{stage}/properties`

    curl -i -H 'Accept: application/json' http://localhost:3000/local/properties

### Response Example

    Property with id: 1 created succesfully!

### Request

`PUT /{stage}/properties`

    curl -i -H 'Accept: application/json' http://localhost:3000/local/properties/1

### Response Example

    Property with id: 1 updated succesfully!

### Request

`DELETE /{stage}/properties`

    curl -i -H 'Accept: application/json' http://localhost:3000/local/properties/1

### Response Example

    Property with id: 1 deleted succesfully!
