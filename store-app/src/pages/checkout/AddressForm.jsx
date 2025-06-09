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
          {...register("firstname", {
            required: 'Adınızı girmelisiniz'
          })}
          helperText={errors.firstname?.message}
          error={!!errors.firstname}
          size='small'
          label="Enter First Name"
          fullWidth
          autoFocus
          sx={{ mb: 2 }}

        />
      </Grid>
      <Grid size={{ xs:12, md:6 }}>
        <TextField
          {...register("lastname", {
            required: 'Soyadınızı girmelisiniz'
          })}
          helperText={errors.lastname?.message}
          error={!!errors.lastname}
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

          {...register("address", {
            required: 'Teslimat adresinizi girmelisiniz'
          })}
          helperText={errors.address?.message}
          error={!!errors.address}
          size='small'
          label="Enter Address"
          fullWidth
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />
      </Grid>
    </Grid>
  )
}

export default AddressForm
