/* eslint-disable no-unused-vars */
import { Button, ButtonGroup, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { decrement, increment, incrementByValue} from './counterSlice'
const Counter = () => {
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();


    return (
        <>
            <Typography> {value} </Typography>
            <ButtonGroup>
                <Button onClick={() => dispatch(increment())} >Increment</Button>
                <Button onClick={() => dispatch(decrement())}>Decrement</Button>
                <Button onClick={() => dispatch(incrementByValue(5))}>Increment By Value</Button>
            </ButtonGroup>
        </>
    )
}

export default Counter