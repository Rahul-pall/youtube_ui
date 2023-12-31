import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios'
import "react-redux"
import { useDispatch } from "react-redux";
import { loginFailur, loginStart, loginSuccess } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";
// import {auth,provider} from "../firebase";
// import {signInWithPopup} from "firebase/auth"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};

  @media (min-width:451px) and (max-width: 768px) {
  position:relative;
  bottom:130px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {

  const [name , setName]=useState("")
  const [email , setEmail]=useState("")
  const [password , setPassword]=useState("")

  const dispatch =useDispatch();
  const navigate=useNavigate();

const handleLogin=async(e)=>{
   e.preventDefault();
   dispatch(loginStart())
   try{
  const res= await axios.post("/auth/signin",{name,password,email});
   const login=  dispatch(loginSuccess(res.data))
   if(login){
     alert('successfully login')
    navigate("/trends");
   }
   
   }
   catch(err){
    dispatch(loginFailur());
    console.log("error found brother");
    alert('please enter correct username and password')
   }
}
const submit= async(e)=>{
  e.preventDefault();
  try{
    if(name && email && password ){
      var response=await axios.post(`/auth/signup`,{name,email,password})
      alert("you have registered successfully")
    }
   console.log(response.data)
   if(response.data){
    navigate('/login')
   }
   
  //  alert("data send")
  }
  catch(err){
    console.log("someething went wrong went send registration data frontend to backend",err)
    alert("Your email already registered")
  }
}
// const googlesignin= async()=>{
//   signInWithPopup(auth,provider)
//   .then((result)=>{
//     await axios.post("/auth/google",{
//       name:result.user.displayName,
//       email:result.user.email,
//       img:result.user.photoURL,
//     }).then(res=>{
//       dispatch(loginSuccess(res.data))
//     })
//     console.log(result)
//   })
//   .catch(err=>{
//     dispatch(loginFailur(err))
//   })
// }
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue YouTube </SubTitle>
        <Input placeholder="username" onChange={(e)=>setName(e.target.value)} />
        <Input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} required/>
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>
        {/* <Button onClick={googlesignin}>Sign in with google</Button> */}
        {/* <Title>or</Title> */}
        <Input placeholder="username" onChange={(e)=>setName(e.target.value)} required/>
        <Input placeholder="email" onChange={(e)=>setEmail(e.target.value)} required/>
        <Input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} required/>
        <Button onClick={submit}>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
  }
export default SignIn;
