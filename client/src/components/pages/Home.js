import React from 'react'

import '../../App'
import Container from '@material-ui/core/Container'

import AddCharacterContainer from '../containers/AddCharacterContainer'
import AddDeviceContainer from '../containers/AddDeviceContainer'

import Characters from '../lists/Characters'
import Title from '../layout/Title'

const Home = () => {
  return (
    <Container className='App'>
      <Title />
      <AddCharacterContainer />
      <AddDeviceContainer />
      <Characters />
    </Container>
  )
}

export default Home
