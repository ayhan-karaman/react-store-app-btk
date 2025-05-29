import { Alert, AlertTitle, Box, Button, List, ListItem, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import requests from '../../api/apiClient'

const ErrorPage = () => {
  const [validationErrors, setValidationErrors] = useState({})
  const getValidationErrors = () => {
    requests.errors.get403Error().catch(error => {
      setValidationErrors(error)
    })
  }

  return (
    <Box>
      {
        validationErrors && validationErrors.errors &&
        (
          <Alert sx={{mb:2}} severity='error'>
            <AlertTitle>{validationErrors.message} </AlertTitle>
            <List>
              {
                validationErrors.errors.map((error, index) => (
                  <ListItem key={index}>
                    <ListItemText > {error} </ListItemText>
                  </ListItem>
                ))
              }
            </List>
          </Alert>
        )
      }


      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        color="error"
        onClick={() => requests.errors.get400Error()}
      >
        Bad Request
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        color="error"
        onClick={() => requests.errors.get401Error()}
      >
        Unauthorized
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        color="error"
        onClick={getValidationErrors}
      >
        Validation Error
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        color="error"
        onClick={() => requests.errors.get404Error()}
      >
        Not Found
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        color="error"
        onClick={() => requests.errors.get500Error()}
      >
        Server Error
      </Button>
    </Box>
  )
}

export default ErrorPage