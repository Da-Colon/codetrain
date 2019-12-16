import React from "react";
import styled from "styled-components";

const Story = props => {
  const story = props.data;

  return (
    <StoryWrapper>
      <a href={story.url}>
        <p>{story.title}</p>
      </a>
      <p>{story.description}</p>
    </StoryWrapper>
  );
};

const StoryWrapper = styled.div`
  margin-bottom: 20px;
`;

export default Story;
