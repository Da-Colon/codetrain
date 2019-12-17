import React from "react";
import {Box} from 'bloomer';

const Story = props => {
  const story = props.data;

  return (
    <Box>
      <a href={story.url} target="_blank">
        <p>{story.title}</p>
      </a>
      <p>{story.description}</p>
    </Box>
  );
};

export default Story;
