import React from 'react'

import { Button } from 'semantic-ui-react'

const GenericButton = ({float, textButton, color, onClickFunction, token, id, action, get, fetch}) => {
  return (
    <Button
      circular
      color={color}
      floated={float}
      onClick={() => onClickFunction(token, id, action, get, fetch)}>
      {textButton}
    </Button>
  )
}

export default GenericButton
