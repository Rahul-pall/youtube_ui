import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
`;
const Wrapper = styled.div`
  margin-top: 50px;
  width: 27.5rem;
  height: 14.5rem;
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

const Btn = styled.button`
  padding: 5px 15px;
  ${"" /* width:fit-content; */}
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  gap: 5px;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Live = ({ setLive }) => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState();
  const submitLive = () => {
    navigate(`/room/${roomId}`,setLive(false));
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Close onClick={() => setLive(false)}>X</Close>
          <Title>Live video </Title>
          <Input
            type="text"
            placeholder="Enter room Id"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          ></Input>
          <Btn onClick={submitLive}>Submit</Btn>
        </Wrapper>
      </Container>
    </>
  );
};

export default Live;
