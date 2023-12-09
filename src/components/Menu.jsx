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
  height:100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
  height:100vh;
  position:sticky;
  bottom:0px;
  overflow-x:hidden;
  overflow:auto;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.text};
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
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
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
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  const {currentUser} = useSelector((state)=>state.user);

  const [live,setLive]=useState(false)
  return (
    <>
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={LamaTube} />
            YouTube
          </Logo>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Item id="change_color">
          <HomeIcon />
          Home
        </Item>
        </Link>
        <Link to="trends" style={{textDecoration:"none",color:"inherit"}}>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        </Link>

        <Link to="subscriptions" style={{textDecoration:"none",color:"inherit"}}>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        </Link>
        <Hr />
        <Item style={{color:"gray"}}>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item style={{color:"gray"}}>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
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
        <Hr />
        </>}
        <Title>BEST OF YOUTUBE</Title>
        <Item style={{color:"gray"}}>
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
        </Item>
        <Item onClick={()=>setLive(true)}>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item style={{color:"gray"}}>
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
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
        <Item >
          
        </Item>
      </Wrapper>
    </Container>
    {live && <Live setLive={setLive}/>}
    </>
  );
};

export default Menu;
