import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import app from "../firebase.js"
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Container = styled.div`
  height: 100%;
  width: 90%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.71);
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 50px;

  @media (max-width: 450px) {
    z-index:9999;
    width:100%;
    height:100%;
    position:fixed;
    padding-top:100px;
}
`;
const Wrapper = styled.div`
  width: 37.5rem;
  height: 37.5rem;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  border-radius: 5px;
  gap: 20px;
`;
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;
const Desc = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;

  gap: 5px;
`;
const Lable = styled.label`
  font-size: 14px;
`;
const Upload = ({ setOpen }) => {
  const [img, setImg] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [imgper, setImgperc] = useState(0);
  const [videoper, setVideoperc] = useState(0);
  const [inputs, setInputs] = useState({});
  const [tags, settags] = useState([]);

const navigate=useNavigate();

  const handleChange=(e)=>{
   setInputs(prev=>{
        return {...prev,[e.target.name]:e.target.value}      
   })
  }

  const handletags = (e) => {
    settags(e.target.value.split(','));
  };

  const uploadFile = (file, urlType) => {
              const storage = getStorage(app);
              const fileName = new Date().getTime() + file.name;
              const storageRef = ref(storage, fileName);
              const uploadTask = uploadBytesResumable(storageRef, file);
            
              uploadTask.on(
                "state_changed",
                (snapshot) => {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  urlType === "imgUrl" ? setImgperc(progress) : setVideoperc(Math.round(progress));
                  switch (snapshot.state) {
                    case "paused":
                      console.log("Upload is paused");
                      break;
                    case "running":
                      console.log("Upload is running");
                      break;
                    default:
                      break;
                  }
                },
                (error) => {
                  console.error("Error uploading file:", error);
                },
                () => {
                  getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                    setInputs((prev) => {
                      return { ...prev, [urlType]: downloadUrl };
                    });
                  });
                }
              );
            };
            

  useEffect(() => {
   video && uploadFile(video,"videoUrl");
  }, [video]);

  useEffect(() => {
   img && uploadFile(img,"imgUrl");
  }, [img]);

  const handleUpload = async (e) => {
              e.preventDefault();
              try {
                const res = await axios.post(`/video`, { ...inputs, tags });
                console.log(res)
                setOpen(false);
                if (res.status === 200) {
                  navigate(`/video/${res.data._id}`);
                  console.log("navigate successfully")
                } else {
                  console.error('Failed to upload video. Server returned:', res.status, res.statusText);
                }
              } catch (error) {
                console.error('Error during video upload:', error.message);
              }
            };
            
  return (
    <>
      <Container>
        <Wrapper>
          <Close onClick={() => setOpen(false)}>X</Close>
          <Title>Upload a new video </Title>
          <Lable>Video:</Lable>
          {videoper > 0 ? "Uploading:"+ videoper + "%": <Input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />}

          <Input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          ></Input>
          <Desc
            type="texr"
            placeholder="Description"
            name="desc"
            rows={8}
            onChange={handleChange}
          ></Desc>
          <Input
            type="texr"
            placeholder="sperate the tags with commas,"
            onChange={handletags}
          ></Input>
          <Lable>Image:</Lable>
          {imgper > 0 ?("Uploading:"+ imgper + "%" ): <Input type="file" accept="image/*" onChange={(e) => setImg(e.target.files[0])} />}

          <Button onClick={handleUpload}>Upload</Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Upload;
