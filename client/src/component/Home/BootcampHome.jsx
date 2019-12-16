import React from "react";
import HackerNews from "./HackerNews";
import TechNews from "./TechNews";
import { Container } from "bloomer";
import styled from "styled-components";

const BootcampHome = () => (
  <>
    <Container>
      <Wrapper>
        <HackerNews />
        <TechNews />
      </Wrapper>
    </Container>
  </>
);

const Wrapper = styled.div`
  display: flex;
`;


export default BootcampHome;
