import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled } from '@mui/material';
import Search from './Search';
import CusButton from './CusButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from '@mui/icons-material';


const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;

// const SubHeading = styled(Typography)`
//     font-size: 10px;
//     font-style: italic;
// `

// const PlusImage = styled('img')({
//     width: 10,
//     height: 10,
//     marginLeft: 4
// })

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));



const Header = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CusButton />
                </listItem>
            </List>
        </Box>
    );


    // const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    // const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    return (
        <StyledHeader>
            <Toolbar style={{minHeight: '56px'}}>
            <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
            <Component to='/'>
                    {/* <img src={logoURL} style={{ width: 75 }} alt='a' />  */}
                    
                     {/* <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box> */}
                    <Typography style={{ fontSize: 18, fontWeight: 'bold', fontStyle: 'italic' }}>FastKart</Typography>
                </Component>
                <Search></Search>
                <CustomButtonWrapper>
                    <CusButton/>
                </CustomButtonWrapper>
            </Toolbar>

        </StyledHeader>
    )
}


export default Header;