import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_DEVICES } from '../../queries'

import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'

import DeviceContainer from '../containers/DeviceContainer'

const Devices = (props) => {
  const { loading, error, data } = useQuery(GET_DEVICES)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  // console.log(data)

  return (
    <ul>
      {
        data.devices.map(({ id, year, brand, model, price, characterId }) => (          
          (props.characterId === characterId) ?
          <Container key={id}>
            <List>
              <DeviceContainer
                key={id}
                id={id}
                year={year}
                brand={brand}
                model={model}
                price={price}
                characterId={characterId}
              />
            </List>
          </Container>
          :
          <span></span>
        ))
      }
    </ul>
  )
}

export default Devices
