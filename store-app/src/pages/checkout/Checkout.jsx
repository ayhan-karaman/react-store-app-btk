import { Box, Button, CircularProgress, Grid, Paper, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material'
import Info from './Info'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import Review from './Review'
import { useState } from 'react'
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import requests from "../../api/apiClient"
import { clearCart } from '../cart/cartSlice'


const steps = [
   "Teslimat Bilgileri", "Ödeme Bilgileri", "Sipariş Özeti"
]

const getStepContent = (step) => {
   switch (step) {
      case 0:
         return <AddressForm />
      case 1:
         return <PaymentForm />
      case 2:
         return <Review />

   }
}



const CheckoutPage = () => {
   const [activeStep, setActiveStep] = useState(0)
   const methods = useForm();
   const [loading, setLoading] = useState(false)
   const [orderId, setOrderId] = useState(0);
   const dispatch = useDispatch();


   const handlePrevious = () => {
      setActiveStep(activeStep - 1)
   }
   const handleNext = async (data) => {
      if (activeStep === 2) {
         setLoading(true);
         try {
            const result = await requests.orders.createOrder(data)
            setOrderId(result.orderId)
            setActiveStep(activeStep + 1)
            dispatch(clearCart())
         } catch (error) {
            console.log(error)
         }
         finally {
            setLoading(false)
         }
      }
      else
         setActiveStep(activeStep + 1)
   }
   return (
      <FormProvider {...methods}>
         <Paper>
            <Grid container spacing={3}>
               {activeStep !== steps.length && (
                  <Grid size={4} sx={{ p: 3, borderRight: '1px solid', borderColor: 'diveder' }} >
                     <Info />
                  </Grid>
               )}
               <Grid size={activeStep !== steps.length ? 8 : 12} padding={3} >
                  <Stepper activeStep={activeStep} sx={{ height: 40, mb: 4 }}>
                     {
                        steps.map((label, index) => (
                           <Step key={index} color='primary' >
                              <StepLabel>{label}</StepLabel>
                           </Step>
                        ))
                     }
                  </Stepper>

                  {
                     activeStep === steps.length
                        ? (
                           <Stack>
                              <Typography variant='h5' textAlign={'center'} color='primary' >Siparişinizi Aldık</Typography>
                              <Typography variant='body1' gutterBottom>
                                 Siparişiniz numaranız: <strong> {orderId} </strong>. Siparişiniz onaylandıktan sonra size bir mail göndereceğiz.
                              </Typography>

                              <Button sx={{ alignSelf: 'start' }} variant='contained' color='primary'>
                                 Siparişleri Listele
                              </Button>
                           </Stack>
                        )
                        : (
                           <form onSubmit={methods.handleSubmit(handleNext)}>

                              {getStepContent(activeStep)}
                              <Box sx={[
                                 { display: 'flex', mt: 4, alignItems: 'flex-end' },
                                 activeStep === 0 ? { justifyContent: 'flex-end' } : { justifyContent: 'space-between' }
                              ]}>
                                 {
                                    activeStep !== 0 && <Button
                                       onClick={handlePrevious}
                                       startIcon={<ChevronLeftRounded />}
                                       variant="contained"
                                       color="primary"
                                    >
                                       Geri
                                    </Button>
                                 }
                                 <Button
                                    type='submit'
                                    startIcon={<ChevronRightRounded />}
                                    variant="contained"
                                    color="primary"

                                 >
                                    {
                                       loading ? (
                                          <CircularProgress />
                                       ) :
                                          activeStep === 2 ? ('Siparişi tamamla') : ('İleri')
                                    }
                                 </Button>
                              </Box>
                           </form>
                        )
                  }
               </Grid>
            </Grid>
         </Paper>
      </FormProvider>
   )
}

export default CheckoutPage
