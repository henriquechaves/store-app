import React from 'react'

import { Button } from 'semantic-ui-react'

const EditButton = ({float, textButton, color, onClickFunction, product, validationFunction, getProducts, fetchProducts, token}) => {
  return (
    <Button
      circular
      color={color}
      floated={float}
      onClick={() => onClickFunction(product, getProducts, fetchProducts, token)}>
      {textButton}
    </Button>
  )
}

export default EditButton
