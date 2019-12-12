import React from "react";

const Story = props => {
  const story = props.data;
  return (
    <div>
      <h3>{story.title}</h3>
      <p>{story.description}</p>
      <p>By: {story.author}</p>
      <p>
        <a href={story.url}>Click for More Information</a>
      </p>
    </div>
  );
};

export default Story;
