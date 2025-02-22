import { Typography, Menu, MenuItem } from "@mui/material"
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import styled from "@emotion/styled";
const Component = styled(Menu)`
    margin-top: 5px;
`;
const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;

const Profile= ({account,setAccount}) =>{
    const handleClick = (event) => {
        setOpen(event.currentTarget);
      };
    const handleClose = () => {
        setOpen(false);
      };
    const logoutUser = () =>{
        setAccount("");
    }
    const [open,setOpen] = useState(false);
    return<>
   
        <Typography onClick={handleClick} style={{marginTop: 8 , cursor:'pointer'}}>
            {account}

        </Typography>
    
    <Component
        
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={()=>{handleClose(); logoutUser();}}>
            <PowerSettingsNewIcon color="primary" fontSize="small"></PowerSettingsNewIcon>
            <Logout>Logout</Logout></MenuItem>
      </Component>


    </>
}
export default Profile;