import React from "react";
import HackerNews from "./HackerNews";
import TechNews from "./TechNews";
import { Container } from "bloomer";
import styled from "styled-components";

const BootcampHome = () => (
  <>
    <Wrapper>
      <HackerNews />
      <TechNews />
    </Wrapper>
  </>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default BootcampHome;
