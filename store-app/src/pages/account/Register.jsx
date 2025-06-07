/* eslint-disable no-unused-vars */
import { Avatar, Box, Button, CircularProgress, Container, Paper, TextField, Typography } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registerUser } from './accountSlice'
import { useSelector } from 'react-redux'

const RegisterPage = () => {

  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.account)

  const { register, handleSubmit,
    formState: {
      errors, isValid
    }
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  const handleForm = (data) => {
      dispatch(registerUser(data))
  }


  return (
    <Container maxWidth="xs" >
      <Paper sx={{ padding: 2 }} elevation={3}>
        <Avatar sx={{ mb: 2, mx: 'auto', color: 'primary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography sx={{ textAlign: 'center', mb: 2 }} variant='h5' component={'h1'}>
          Register
        </Typography>
        <Box onSubmit={handleSubmit(handleForm)} component={'form'}>
          <TextField
            {...register('username', {
              required: 'Kullanıcı adınızı girmelisiniz.',
              minLength: {
                value: 3,
                message: 'Kullanıcı adı minimum 3 karakter olmalıdır.'
              }
            })}
            size='small'
            label="Enter username"
            fullWidth
            error={!!errors.username}
            helperText={errors.username?.message}
            autoFocus
            sx={{ mb: 2 }}>

          </TextField>
          <TextField
            {...register('email', {
              required: 'E-posta adresinizi girmelisiniz.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Geçersiz e-posta adresi",
              }
            })}
            size='small'
            label="Enter email"
            fullWidth
            autoFocus
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ mb: 2 }}>

          </TextField>
          <TextField
            {...register('password', {
              required: 'Parolanızı girmelisiniz.',
              minLength: {
                value: 6,
                message: 'Prolanız minimum 6 karakter olmalıdır.'
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                message: "Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter (@$!%*?&) içermelidir.",
              }
            })}
            size='small'
            label="Enter password"
            type='password'
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{ mb: 2 }}>

          </TextField>

          <Button type='submit' variant='contained' fullWidth sx={{ mt: 2 }} color='primary'>
            { status === 'pending'? <CircularProgress size='25px' color='inherit' /> : 'Register'}
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default RegisterPage