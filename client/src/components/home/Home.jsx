import { useEffect } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import { Box, styled } from '@mui/material';
import { getProducts } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Slide from '../home/Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
const Component = styled(Box)`
    padding: 10px 10px;
    background : #f2f2f2
`


const Home = () =>{
    const getProduct = useSelector(state => state.getProducts);
    
    const {products} = getProduct;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    return (
        <>
            <NavBar/>
            <Component>
                <Banner/>
                <MidSlide products={products} />
                <MidSection/>
                 <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                /> 
            </Component>
        </>

    )
}

export default Home;