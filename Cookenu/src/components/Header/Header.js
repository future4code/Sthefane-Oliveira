import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { GoToRecipeList, GoToLogin } from '../../routes/Coordinator';
import {useHistory} from "react-router-dom"
import { useState } from 'react';

const  Header =({rightButtonText, setRightButtonText}) => {
  const token = localStorage.getItem("token")
  const history = useHistory()

  const logout = ()=>{
    localStorage.removeItem("token")
  }
  const rightButtonAction = () =>{
    if (token){
      logout()
      setRightButtonText("Login")
      GoToLogin(history)
    } else{
      GoToLogin(history)
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Button  onClick={()=> GoToRecipeList(history)} color="inherit">cookenu</Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
export default Header
