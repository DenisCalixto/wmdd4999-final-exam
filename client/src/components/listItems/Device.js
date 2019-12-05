import React from 'react'
import Currency from 'react-currency-formatter'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import DisplayCard from '../cards/DisplayCard'
import UpdateDevice from '../forms/UpdateDevice'
import RemoveDevice from '../buttons/RemoveDevice'

const Device = (props) => {
  const { editMode, id, year, brand, model, price, characterId, onButtonClick, onInputChange } = props
  const fullName = `${year} ${brand} ${model}`

  const renderDevice = () => (
      editMode ?
        <UpdateDevice
          id={id}
          year={year}
          brand={brand}
          model={model}
          price={price}
          characterId={characterId}
          onButtonClick={onButtonClick}
          onInputChange={onInputChange}
        />
        :
        <ListItem>
          <ListItemText
            primary={fullName}
            secondary={<Currency quantity={price} currency='CAD' />}
          />
          <Button
            onClick={onButtonClick}
            variant='contained'
            style={{ margin: '5px' }}
          >
            Edit
          </Button>
          <RemoveDevice
            id={id}
            year={year}
            brand={brand}
            model={model}
            price={price}
            characterId={characterId}
          />
        </ListItem>
  )

  return (
    <DisplayCard>
      {renderDevice()}
    </DisplayCard>
  )
}

export default Device