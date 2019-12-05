import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Currency from 'react-currency-formatter'

import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import Container from '@material-ui/core/Container'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'


import DisplayCard from '../cards/DisplayCard'
import '../../App'

const useStyles = makeStyles({
  label: {
    textDecoration: 'none'
  }
})

const Show = () => {
  const classes = useStyles()

  return (
    <Container className='App'>
      <DisplayCard>
        <Fragment>
          <ListItem>
            <ListItemText
              primary='John Smith'
            />
          </ListItem>
          <ul>
            <DisplayCard>
              <ListItem>
                <ListItemText
                  primary='2019 Apple iPhone'
                  secondary={<Currency quantity='5000' currency='CAD' />}
                />
              </ListItem>
            </DisplayCard>
          </ul>
        </Fragment>
        <CardActions>
          <Button size='small' color='primary' variant='outlined'>
            <Link to={{
              pathname: '/'
            }}
            >
              Go Back Home
            </Link>
          </Button>
        </CardActions>
      </DisplayCard>
    </Container>
  )
}

export default Show
