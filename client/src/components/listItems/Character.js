import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import UpdateCharacter from '../forms/UpdateCharacter'
import RemoveCharacter from '../buttons/RemoveCharacter'
import DisplayCard from '../cards/DisplayCard'
import Devices from '../lists/Devices'

const useStyles = makeStyles({
  label: {
    textDecoration: 'none'
  }
})

const Character = (props) => {
  const { editMode, id, firstName, lastName, onButtonClick, onInputChange } = props
  const fullName = `${firstName} ${lastName}`
  
  const classes = useStyles()

  return (
    <DisplayCard>
      <Fragment>
        {
          editMode ?
            <UpdateCharacter
              id={id}
              firstName={firstName}
              lastName={lastName}
              editMode={editMode}
              onButtonClick={onButtonClick}
              onInputChange={onInputChange}
            />
            :
            <ListItem>
              <ListItemText
                primary={fullName}
              />
              <Button
                onClick={onButtonClick}
                variant='contained'
                style={{ margin: '5px' }}
              >
                Edit
              </Button>
              <RemoveCharacter 
                id={id}
                firstName={firstName}
                lastName={lastName}
              />
            </ListItem>          
        }
        <Devices characterId={id} />
        <CardActions>
          <Button size='small' color='primary' variant='outlined'>
            <Link to={{
              pathname: `/characters/${id}`
            }}
            >
              Learn More
            </Link>
          </Button>
        </CardActions>
      </Fragment>
    </DisplayCard>
  )
}

export default Character
