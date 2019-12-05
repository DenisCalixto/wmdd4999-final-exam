import React, { Component } from 'react'

import AddCharacter from '../forms/AddCharacter'
const uuidv4 = require('uuid/v4')

class AddCharacterContainer extends Component {
  state = {
    id: uuidv4(),
    firstName: '',
    lastName: ''
  }

  handleInputChange = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    const { id, firstName, lastName } = this.state
    return (
      <AddCharacter 
        id={id}
        firstName={firstName}
        lastName={lastName}
        onInputChange={this.handleInputChange}
      />
    )
  }
}

export default AddCharacterContainer