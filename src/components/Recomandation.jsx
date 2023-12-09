import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import styled from "styled-components";
const Container = styled.div`
  flex: 2;
`;
const Recomandation = ({tags}) => {
              const [videos,setVideos]=useState([]);
              useEffect(()=>{
                            const fetchVideo=async()=>{
                                          const res=await axios.get(`https://youtube-bac.onrender.com/api/video/tags?tags=${tags}`)
                                          setVideos(res.data)
                            }
                            fetchVideo();
              },[tags])
  return (
    <>
      <Container>
              {videos.map(video=>{
                      return <Card key={video._id} video={video}/>
              })}
      </Container>
    </>
  )
}

export default Recomandation
