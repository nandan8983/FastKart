import { useState } from 'react';

import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';

import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '85%'
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const ActionItem = ({ product }) => {
    const loadScript = (src) =>{
        return new Promise((resolve) =>{
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () =>{
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const navigate = useNavigate();
    const { id } = product;
    
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    
    const buyNow = async (product) => {
        let orderId = "OD" + Date.now();

        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
        if(!res){
            alert("Razorpay SDK failed to load, are you online");
            return;
        }
        console.log(product);
        let paymentRes = {
            order_id: orderId,
            amount: (product.price.cost + 40)*100,
            currency: "INR",
            payment_capture: 1,
        };
        let result = await axios.post("http://localhost:8000/create", paymentRes);
        if(!result.data.data){
            alert("Server error, Are you Online!!");
            return;
        }
        else{
            let options = {
                key: "rzp_test_FbLM4DLQmMXbeO",
                currency: result.data.data.currency,
                amount: result.data.data.amount,
                order_id: result.data.data.id,
                name: "All In One Store",
                description: "Thank you for shopping with us",
                image: "https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-png-download-0.png",
                handler: async (response) => {
                    const result = await axios.post("http://localhost:8000/card-detail", response.razorpay_order_id);
                    console.log(result);
                },
                prefill: {
                    email: "sunny@gmail.com",
                    contact: "9999999999",
                },
                notes: {
                    address: "All In One Store",
                },
                theme: {
                    color: "#3399cc",
                },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        
     }
    }
    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    return (
        <LeftContainer>
            <Image src={product.detailUrl} alt={product.id}/><br />
            <StyledButton onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
            <StyledButton onClick={() => buyNow(product)} style={{marginRight: 10,background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;