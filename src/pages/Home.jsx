import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height:100vh;
`;

const Home = ({type}) => {

 const [videos , setVideos]=useState([]);

  useEffect(()=>{
     const fetchVideo=async ()=>{
      const res = await axios.get(`/api/video/${type}`)
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
