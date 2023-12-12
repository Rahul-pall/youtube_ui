import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height:100vh;
  ${'' /* border:2px solid red; */}
  width:100%;
  gap:20px;

  @media (min-width:769px) and (max-width: 1024px) {
   width:120%;
   position:relative;
   right:50px;
  }
`;

const Home = ({type}) => {

 const [videos , setVideos]=useState([]);

  useEffect(()=>{
     const fetchVideo=async ()=>{
      const res = await axios.get(`/video/${type}`)
      setVideos(res.data)
    }
    fetchVideo()
 },[type])
  return (
    <Container>
      {videos.map(video=>(
      <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
