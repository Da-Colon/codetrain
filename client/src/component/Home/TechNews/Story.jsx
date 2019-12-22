import React from "react";
import {Box} from 'bloomer';

const Story = props => {
  const story = props.data;

  return (
    <Box style={{margin: "1rem"}}>
      <a href={story.url} target="_blank" rel="noopener noreferrer">
        <p>{story.title}</p>
      </a>
      <p>{story.description}</p>
    </Box>
  );
};

export default Story;
