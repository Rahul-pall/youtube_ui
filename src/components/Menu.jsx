import React, { useState } from "react";
import styled from "styled-components";
import LamaTube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import Live from './Live'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;


  @media (max-width: 450px) {
   position:absolute;
   background:transparent;
  z-index:999;
  display:flex;
  width:100%;
  z-index:999;
  }

  @media (min-width:451px) and (max-width: 768px) {
  position:sticky;
  top:0px;
  left:0px;
  height:100vh;
  width:fit-content;
  }
  @media (min-width:769px) and (max-width: 1024px) {
  position:sticky;
  top:0px;
  left:0px;
  height:100vh;
  width:fit-content;
  }
`;
const Wrapper = styled.div`
  padding: 18px 26px;
  height:100vh;
  position:relative;
  bottom:0px;
  overflow-x:hidden;
  overflow:auto;
  background-color: ${({ theme }) => theme.bgLighter};

  @media (max-width: 450px) {
    position:fixed;
    bottom:0px;
    display:flex;
    height:60px;
    bottom:0px;
    z-index:9999;
    overflow:hidden;
   background-color: ${({ theme }) => theme.bgLighter};
   width:100%;
   gap:30px;
  }

  @media (min-width:451px) and (max-width: 768px) {
  gap:30px;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.text};

  @media (max-width: 450px) {
   display:none;
  }
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }

  @media (max-width: 450px) {
   display:flex;
   flex-direction:column;
  }

  @media (min-width:451px) and (max-width: 768px) {
  display:flex;
  ${'' /* flex-direction:column; */}
  }
`;
const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
  @media (max-width: 450px) {
   display:none;
  }

  @media (min-width:451px) and (max-width: 768px) {
  
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};

  @media(max-width: 450px) {
  display:none;
 
  }
`;

const Login = styled.div`
 @media (max-width: 450px) {
   display:none;
  }

  @media (min-width:451px) and (max-width: 768px) {
  display:block;
  padding-bottom:15px;
  display:flex;
  flex-direction:column;
  }
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 450px) {
  display:none;
  
  }
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;

  @media (max-width: 450px) {
   display:none;
  }

`;
const Div=styled.div`
width:fit-content;
`

const Menu = ({ darkMode, setDarkMode }) => {
  const {currentUser} = useSelector((state)=>state.user);

  const [live,setLive]=useState(false)

  const [show,notShow]=useState("none")
  return (
    <>
    <Container>
      <Wrapper>
      <Div>
      <Link to="/" style={{           textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={LamaTube} />
            YouTube
          </Logo>
        </Link>
      </Div>

        <Div>
        <Link className="link" to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>
          <HomeIcon/>
          Home
        </Item>
        </Link>
        </Div>
        

        <Div>
        <Link className="link" to="trends" style={{textDecoration:"none",color:"inherit"}}>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        </Link>
        </Div>

        
        <Div>
        <Link className="link" to="subscriptions" style={{textDecoration:"none",color:"inherit"}}>
        <Items>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Items>
        </Link>
        </Div>
        
        {/* <Hr /> */}
        {/* <Item style={{color:"gray"}}>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item style={{color:"gray"}}>
          <HistoryOutlinedIcon />
          History
        </Item> */}
        <Hr />

        <Div>
        {
          !currentUser &&
        <>
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="signin" style={{textDecoration:"none"}}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        </Login>
        {/* <Hr /> */}
        </>}
        </Div>

        
        <Title>BEST OF YOUTUBE</Title>
        {/* <Item style={{color:"gray"}}>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item style={{color:"gray"}}>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item style={{color:"gray"}}>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item style={{color:"gray"}}>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item style={{color:"gray"}}>
          <ArticleOutlinedIcon />
          News
        </Item> */}

        <Div>
        <Item onClick={()=>setLive(true)}>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        </Div>

        
        <Hr />
        {/* <Item style={{color:"gray"}}>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item style={{color:"gray"}}>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item style={{color:"gray"}}>
          <HelpOutlineOutlinedIcon />
          Help
        </Item> */}
        <Div>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
        </Div>
        
      </Wrapper>
    </Container>
    {live && <Live setLive={setLive}/>}
    </>
  );
};

export default Menu;
