import React from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'

import Button from '@material-ui/core/Button'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'

import { GET_CHARACTERS, UPDATE_DEVICE } from '../../queries'

const UpdateDevice = (props) => {
  const { id, year, brand, model, price, characterId, onButtonClick, onInputChange } = props
  const [updateDevice] = useMutation(UPDATE_DEVICE)

  const { loading, error, data } = useQuery(GET_CHARACTERS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        updateDevice({
          variables: {
            id, year, brand, model, price, characterId
          }
        })
        onButtonClick()
      }}
    >
      <TextField
        label='Year'
        defaultValue={year}
        placeholder='i.e. 2019'
        onChange={e => onInputChange('year', e.target.value)}
        type='number'
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='brand'
        defaultValue={brand}
        placeholder='i.e. Apple'
        onChange={e => onInputChange('brand', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='Model'
        defaultValue={model}
        placeholder='i.e. iPhone'
        onChange={e => onInputChange('model', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='Price'
        defaultValue={price}
        placeholder='i.e. 5000'
        onChange={e => onInputChange('price', e.target.value)}
        type='number'
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <Select
        native
        defaultValue='1'
        value={characterId}
        onChange={e => onInputChange('characterId', e.target.value)}
        input={
          <OutlinedInput name='character' id="outlined-age-native-simple" />
        }
        style={{ display: 'flex', margin: '10px' }}
      >
        {data.characters.map(({ id, firstName, lastName }) => (
          <option value={id}>{firstName} {lastName}</option>
        ))}
      </Select>
      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ margin: '10px' }}
      >
        Update Device
      </Button>
      <Button
        onClick={onButtonClick}
        variant='contained'
        color='secondary'
        style={{ margin: '10px' }}
      >
        Cancel
      </Button>
    </form>
  )
}

export default UpdateDevice