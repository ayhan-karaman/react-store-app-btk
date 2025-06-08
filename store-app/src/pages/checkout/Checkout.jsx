import { Box, Button, Grid, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material'
import Info from './Info'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import Review from './Review'
import { useState } from 'react'
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";

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
   const handlePrevious = () => {
        setActiveStep(activeStep -1)
   }
   const handleNext = () => {
       setActiveStep(activeStep + 1)
   }
   return (
      <Paper>
         <Grid container spacing={3}>
            <Grid size={4} sx={{ p: 3, borderRight: '1px solid', borderColor: 'diveder' }} >
               <Info />
            </Grid>
            <Grid size={8} padding={3} >
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
                     ? (<Typography variant='h5' textAlign={'center'} color='primary' >Siparişinizi Aldık</Typography>)
                     : (
                        <>
                           {getStepContent(activeStep)}
                           <Box sx={[
                              { display: 'flex', mt:4, alignItems:'flex-end' },
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
                                 onClick={handleNext}
                                 startIcon={<ChevronRightRounded />}
                                 variant="contained"
                                 color="primary"
                                 
                              >
                                 İleri
                              </Button>
                           </Box>
                        </>
                     )
               }
            </Grid>
         </Grid>
      </Paper>
   )
}

export default CheckoutPage
