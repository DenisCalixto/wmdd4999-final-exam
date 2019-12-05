import { gql } from 'apollo-boost'

export const GET_CHARACTERS = gql`
  {
    characters {
      id
      firstName
      lastName
    }
  }
`

export const ADD_CHARACTER = gql`
  mutation AddCharacter($id: String!, $firstName: String!, $lastName: String!) {
    addCharacter(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const UPDATE_CHARACTER = gql`
  mutation UpdateCharacter($id: String!, $firstName: String!, $lastName: String!) {
    updateCharacter(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const REMOVE_CHARACTER = gql`
  mutation RemoveCharacter($id: String!) {
    removeCharacter(id: $id) {
      id
      firstName
      lastName
    }
  }
`

export const GET_DEVICES = gql`
  {
    devices {
      id
      year
      brand
      model
      price
      characterId
    }
  }
`

export const ADD_DEVICE = gql`
  mutation AddDevice($id: String!, $year: String!, $brand: String!, $model: String!, $price: String!, $characterId: String!) {
    addDevice(id: $id, year: $year, brand: $brand, model: $model, price: $price, characterId: $characterId) {
      id
      year
      brand
      model
      price
      characterId
    }
  }
`

export const UPDATE_DEVICE = gql`
  mutation UpdateDevice($id: String!, $year: String!, $brand: String!, $model: String!, $price: String!, $characterId: String!) {
    updateDevice(id: $id, year: $year, brand: $brand, model: $model, price: $price, characterId: $characterId) {
      id
      year
      brand
      model
      price
      characterId
    }
  }
`

export const REMOVE_DEVICE = gql`
  mutation RemoveDevice($id: String!) {
    removeDevice(id: $id) {
      id
      year
      brand
      model
      price
      characterId
    }
  }
`