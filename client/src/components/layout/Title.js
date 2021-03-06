import React from 'react'

const getStyles = () => ({
  title: {
    fontSize: 50,
    padding: '15px',
    border: '5px black solid',
    marginBottom: '50px'
  }
})

const Title = () => {
  const styles = getStyles()

  return <h1 style={styles.title}>Disney Characters and Device with GraphQL</h1>
}

export default Title
