import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import filter from 'lodash/filter'

import { GET_CHARACTERS, REMOVE_CHARACTER } from '../../queries'

import Button from '@material-ui/core/Button'

const RemoveCharacter = ({ id, firstName, lastName}) => {
  const [removeCharacter] = useMutation(
    REMOVE_CHARACTER,
    {
      update(cache, { data: { removeCharacter } }) {
        const { characters } = cache.readQuery({
          query: GET_CHARACTERS
        })
        cache.writeQuery({
          query: GET_CHARACTERS,
          data: { characters: filter(characters, c => { return c.id !== removeCharacter.id })}
        })
      }
    }
  )

  return (
    <Button onClick={e => {
      e.preventDefault()
      removeCharacter({
        variables: {
          id
        },
        optimisticResponse: {
          __typename: 'Mutation',
          removeCharacter: {
            __typename: 'Character',
            id,
            firstName,
            lastName
          }
        }
      })
    }}
      variant='contained'
      color='secondary'
      style={{ margin: '10px' }}
    >
      Delete
    </Button>
  )
}

export default RemoveCharacter