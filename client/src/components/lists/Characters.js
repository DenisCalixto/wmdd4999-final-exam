import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_CHARACTERS } from '../../queries'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'

import CharacterContainer from '../containers/CharacterContainer'

const Characters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  // console.log(data)
  return (
    <ul>
      {data.characters.map(({ id, firstName, lastName }) => (
        <Container key={id}>
          <List>
            <CharacterContainer
              key={id}
              id={id}
              firstName={firstName}
              lastName={lastName}
            />
          </List>
        </Container>
      ))}
    </ul>
  )
}

export default Characters
