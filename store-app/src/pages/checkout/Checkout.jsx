import { Grid, Paper } from '@mui/material'
import Info from './Info'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import Review from './Review'
const CheckoutPage = () => {
  return (
    <Paper>
       <Grid container spacing={3}>
          <Grid size={4} sx={{ p:3, borderRight:'1px solid', borderColor:'diveder'}} >
              <Info />
          </Grid>
          <Grid size={8} padding={3} >
             <AddressForm />
             <PaymentForm />
             <Review />
          </Grid>
       </Grid>
    </Paper>
  )
}

export default CheckoutPage
