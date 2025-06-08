import { Grid, TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

const AddressForm = () => {
  const { register, formState: {
    errors
  } } = useFormContext()

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs:12, md:6 }}>
        <TextField
          {...register("firstName", {
            required: 'Adınızı girmelisiniz'
          })}
          helperText={errors.firstName?.message}
          error={!!errors.firstName}
          size='small'
          label="Enter First Name"
          fullWidth
          autoFocus
          sx={{ mb: 2 }}

        />
      </Grid>
      <Grid size={{ xs:12, md:6 }}>
        <TextField
          {...register("lastName", {
            required: 'Soyadınızı girmelisiniz'
          })}
          helperText={errors.lastName?.message}
          error={!!errors.lastName}
          size='small'
          label="Enter Last Name"
          fullWidth
          sx={{ mb: 2 }}
        />
      </Grid>
      <Grid size={{ xs:12, md:6 }}>
        <TextField
          {...register("phone", {
            required: 'Telefon numaranızı girmelisiniz'
          })}
          helperText={errors.phone?.message}
          error={!!errors.phone}
          size='small'
          label="Enter Phone"
          fullWidth
          sx={{ mb: 2 }}

        />
      </Grid>
      <Grid size={{ xs:12, md: 6 }}>
        <TextField
          {...register("city", {
            required: 'Şehir bilgisini girmelisiniz'
          })}
          helperText={errors.city?.message}
          error={!!errors.city}
          size='small'
          label="Enter City"
          fullWidth
          sx={{ mb: 2 }}

        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField

          {...register("addressline", {
            required: 'Teslimat adresinizi girmelisiniz'
          })}
          helperText={errors.addressline?.message}
          error={!!errors.addressline}
          size='small'
          label="Enter Address"
          fullWidth
          sx={{ mb: 2 }}
        />
      </Grid>
    </Grid>
  )
}

export default AddressForm
