import React, { Component } from 'react'
import Character from '../listItems/Character'

class CharacterContainer extends Component {
  state = {
    id: this.props.id || '',
    firstName: this.props.firstName || '',
    lastName: this.props.lastName || '',
    editMode: false
  }

  handleButtonClick = () => {
    const  { editMode } = this.state
    this.setState({
      editMode: !editMode
    })
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  render() {
    const { editMode, id, firstName, lastName } = this.state
    return (
      <Character
        editMode={editMode}
        id={id}
        firstName={firstName}
        lastName={lastName}
        onButtonClick={this.handleButtonClick}
        onInputChange={this.handleInputChange}
      />
    )
  }
}

export default CharacterContainer