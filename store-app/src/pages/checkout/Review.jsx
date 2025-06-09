import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const Review = () => {
  const { getValues } = useFormContext();
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant='h5'>Teslimat Bilgileri</Typography>
        <Divider sx={{mb:3}} />
       <Typography gutterBottom>
          {getValues("firstname")} {getValues("lastname")}
        </Typography>
        <Typography gutterBottom>{getValues("phone")}</Typography>
        <Typography gutterBottom>
          {getValues("address")} / {getValues("city")}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography  variant='h5'>Kart Bilgileri</Typography>
        <Divider sx={{mb:3}} />
         <Typography gutterBottom>{getValues("cardname")}</Typography>
        <Typography gutterBottom>{getValues("cardnumber")}</Typography>
        <Typography gutterBottom>{getValues("expirydate")}</Typography>
      </Grid>
    </Grid>
  )
}

export default Review
