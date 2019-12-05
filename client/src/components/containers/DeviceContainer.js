import React, { Component } from 'react'
import Device from '../listItems/Device'

class DeviceContainer extends Component {
  state = {
    id: this.props.id || '',
    year: this.props.year || '',
    brand: this.props.brand || '',
    model: this.props.model || '',
    price: this.props.price || '',
    characterId: this.props.characterId || '',
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
    const { editMode, id, year, brand, model, price, characterId } = this.state
    return (
      <Device 
        editMode={editMode}
        id={id}
        year={year}
        brand={brand}
        model={model}
        price={price}
        characterId={characterId}
        onButtonClick={this.handleButtonClick}
        onInputChange={this.handleInputChange}
      />
    )
  }
}

export default DeviceContainer
