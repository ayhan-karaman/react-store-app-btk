import {Grid, TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

const PaymentForm = () => {
   const { register, formState: {
    errors
  } } = useFormContext()
  return (
     <Grid container spacing={3}>
      <Grid size={{ xs:12, md:6 }}>
        <TextField
          {...register("cardname", {
            required: 'Kart üzerindeki isim bilgisini giriniz'
          })}
          helperText={errors.cardname?.message}
          error={!!errors.cardname}
          size='small'
          label="Enter Card Name"
          fullWidth
          autoFocus
          sx={{ mb: 2 }}

        />
      </Grid>
      <Grid size={{ xs:12, md:6 }}>
        <TextField
          {...register("cardnumber", {
            required: 'Kart numarasını giriniz'
          })}
          helperText={errors.cardnumber?.message}
          error={!!errors.cardnumber}
          size='small'
          label="Enter Card Number"
          fullWidth
          sx={{ mb: 2 }}
        />
      </Grid>
      <Grid size={{ xs:12, md:6 }}>
        <TextField
          {...register("expirydate", {
            required: 'Kartın son kullanma tarihini giriniz'
          })}
          helperText={errors.expirydate?.message}
          error={!!errors.expirydate}
          size='small'
          label="__/__"
          fullWidth
          sx={{ mb: 2 }}

        />
      </Grid>
      <Grid size={{ xs:12, md: 6 }}>
        <TextField
          {...register("cvv", {
            required: 'Güvenlik kodunu girmelisiniz'
          })}
          helperText={errors.cvv?.message}
          error={!!errors.cvv}
          size='small'
          label="Enter CVV"
          fullWidth
          sx={{ mb: 2 }}

        />
      </Grid>
    </Grid>
  )
}

export default PaymentForm
