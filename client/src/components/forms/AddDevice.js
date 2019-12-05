import React from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'

import Button from '@material-ui/core/Button'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'

import { ADD_DEVICE, GET_DEVICES, GET_CHARACTERS } from '../../queries'

const AddDevice = ({ id, year, brand, model, price, characterId, onInputChange }) => {
  const [addDevice] = useMutation(
    ADD_DEVICE,
    {
      update(cache, { data: { addDevice } }) {
        // console.log(cache)
        // console.log(cache.readQuery)
        // console.log(GET_DEVICES)
        const { devices } = cache.readQuery({ query: GET_DEVICES })
        cache.writeQuery({
          query: GET_DEVICES,
          data: { devices: devices.concat([addDevice])}
        })
      }
    }
  )

  const { loading, error, data } = useQuery(GET_CHARACTERS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <form onSubmit={e => {
      e.preventDefault()
      addDevice({
        variables: {
          id, year, brand, model, price, characterId
        },
        optimisticResponse: {
          __typename: 'Mutation',
          addDevice: {
            __typename: 'Device',
            id, 
            year, 
            brand, 
            model, 
            price, 
            characterId
          }
        }
      })
    }}>
     <TextField
        label='Year'
        defaultValue='2019'
        value={year}
        placeholder='i.e. 2019'
        onChange={e => onInputChange('year', e.target.value)}
        type='number'
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='Brand'
        defaultValue='Apple'
        value={brand}
        placeholder='i.e. Apple'
        onChange={e => onInputChange('brand', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='Model'
        defaultValue='iPhone'
        value={model}
        placeholder='i.e. iPhone'
        onChange={e => onInputChange('model', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='Price'
        defaultValue='1500'
        value={price}
        placeholder='i.e. 1500'
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
          <OutlinedInput name='device' id="outlined-age-native-simple" />
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
        style={{ marginTop: '20px', alignItems: 'center', marginLeft: '10px' }}
      >
        Add Device
      </Button>
    </form>
  )
}

export default AddDevice