import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MyTube from "../img/logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import  {logout}  from "../Redux/userSlice";
import Upload from "./Upload";

const Container = styled.div`
  position:sticky;
  top:0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
  width:100%;
  z-index:999;

  @media (max-width: 768px) {
  position:sticky;
  top:0px;
  left:0px;
  }

  @media (max-width: 1024px) {
  position:sticky;
  top:0px;
  left:0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;

  @media (max-width: 450px) {
  display:flex;
  justify-content:space-between;
  padding:0px 15px;
  }

  @media (max-width: 768px) {
  display:flex;
  justify-content:space-between;
  padding-right:30px;

  }

  @media (min-width:769px) and (max-width: 1024px) {
    display:flex;
  justify-content:space-between;
  padding-right:30px;

  }
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;

  @media (max-width: 450px) {
   display:none;
  }

  @media (max-width: 768px) {
  position:relative;
  margin:none;
  }

  @media (max-width: 1024px) {
  position:relative;
  margin:none;
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User=styled.div`
 display:flex;
 align-items:center;
 gap:10px;
 font-weight:500;
 color:${({theme})=>theme.text};
`

const Avatar=styled.div`
width:32px;
height:32px;
border-radius:50%;
background-color:#999;
`
const MenuIcons=styled.div`
color: ${({ theme }) => theme.text};

@media (max-width: 450px) {
  display:block;
  }

@media(min-width:450px) and (max-width: 768px) {
  display:none;
  }

@media(min-width:769px){
  display:none;
  }
`

const Img = styled.img`
  height: 25px;
`
const Navbar = () => {

  const [open,setOpen]=useState(false)
  const dispatch=useDispatch();
  const {currentUser} = useSelector((state)=>state.user);

  const handleLogout=()=>{
    dispatch(logout())
  }

  // const [opened, closed]=useState(false)
  // const hamberger=()=>{
  //    if(opened===false){
  //       closed(true)
  //    }
  //    else{
  //     closed(false)
  //    }
  // }
  return (
    <>

    <Container >
      <Wrapper>
      <MenuIcons>
      <Img src={MyTube} />
      {/* <MyTube/> */}
      </MenuIcons>
       
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
        <div>
        {currentUser ? (
          <User>
            <VideoCallIcon onClick={()=>setOpen(true)}/>
            <LogoutIcon style={{cursor:'pointer'}} onClick={handleLogout}/>
            <Avatar src={currentUser.img}/>
            {currentUser.name}
          </User>
        ):
          <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>}
        </div>
      </Wrapper>
    </Container>
      {open && <Upload setOpen={setOpen}/> }
      {/* {opened===true?<Menu/>:""} */}
    </>
  );
};

export default Navbar;
