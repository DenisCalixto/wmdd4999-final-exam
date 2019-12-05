import React, { Component } from 'react'

import AddDevice from '../forms/AddDevice'
const uuidv4 = require('uuid/v4')

class AddDeviceContainer extends Component {
  state = {
    id: uuidv4(),
    year: '',
    brand: '',
    model: '',
    price: '',
    characterId: ''
  }

  handleInputChange = (key, value) => {
    this.setState({ [key]: value })
  }

  handleChange = event => {
    this.setState({
      characterId: event.target.value
    })
  };

  render() {
    const { id, year, brand, model, price, characterId } = this.state
    return (
      <AddDevice
        id = {id}
        year = {year}
        brand = {brand}
        model = {model}
        price = {price}
        characterId = {characterId}
        onInputChange={this.handleInputChange}
      />
    )
  }
}

export default AddDeviceContainer