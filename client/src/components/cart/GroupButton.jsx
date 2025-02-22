import React, { useEffect, useState } from "react";
import { ButtonGroup, Button, styled } from "@mui/material";
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;



const GroupedButton = ({id}) => {
    const dispatch = useDispatch();
    const [ counter, setCounter ] = useState(1);
    let quantity = counter;
    
    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
        quantity = counter;
        dispatch(addToCart(id, quantity));
   
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );

    };
    


    return (
        <Component>
            <StyledButton onClick={() => handleDecrement()} disabled={counter === 1}>-</StyledButton>
            <Button disabled>{quantity}</Button>
            <StyledButton onClick={() => handleIncrement()}>+</StyledButton>
        </Component>
    );
}

export default GroupedButton;


