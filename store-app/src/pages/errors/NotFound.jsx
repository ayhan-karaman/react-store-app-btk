import { Alert, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant='h4' gutterBottom>
               Not Found Error
            </Typography>
            <Alert severity='error'>
                Aradığınız Kaynak bulunamadı.
            </Alert>
            <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
            > Anasayfa </Button>
        </Paper>
    )
}

export default NotFoundPage