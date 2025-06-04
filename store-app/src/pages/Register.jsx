import { Avatar, Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'

const RegisterPage = () => {
  return (
    <Container maxWidth="xs" >
      <Paper sx={{ padding: 2 }} elevation={3}>
        <Avatar sx={{ mb: 2, mx: 'auto', color: 'primary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography sx={{ textAlign: 'center', mb: 2 }} variant='h5' component={'h1'}>
          Register
        </Typography>
        <Box component={'form'}>
          <TextField
            name='username'
            size='small'
            label="Enter username"
            type='email'
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}>

          </TextField>
          <TextField
            name='email'
            size='small'
            label="Enter email"
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}>

          </TextField>
          <TextField
            name='password'
            size='small'
            label="Enter password"
            type='password'
            fullWidth
            required
            sx={{ mb: 2 }}>

          </TextField>

          <Button type='submit' variant='contained' fullWidth sx={{ mt: 2 }} color='primary'>
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default RegisterPage