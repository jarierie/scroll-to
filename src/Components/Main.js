import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: ${(props) => props.color};
`;

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-transform: uppercase;
  background-color: purple;
  border: none;
  border-radius: 5px;
  color: white;
`;

const Main = () => {
  const ref = useRef(null);

  //methods

  const scrollTo = () => {
    window.scrollTo({
      left: 0,
      top: ref.current.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log(ref);
  });

  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        color={"#0d0d0d"}
      >
        <StyledButton onClick={scrollTo}>scroll to bottom</StyledButton>
      </Container>
      <Container color={"tomato"}></Container>
      <Container ref={ref} color={"blue"}></Container>
    </>
  );
};

export default Main;
