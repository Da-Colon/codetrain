import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import Axios from "axios";
import {Box} from 'bloomer';

const Post = props => {
  const [postData, setPostData] = useState({});

  const getAnItem = async id => {
    const response = await Axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );
    const postData = response.data;
    setPostData(postData);
  };

  useEffect(() => {
    getAnItem(props.id);
  }, []);

  const dateToFormat = postData.time;

  return (
    <Box style={{margin: "1rem"}}>
      <p>
         <a href={postData.url} target="_blank" rel="noopener noreferrer">{postData.title}</a> 
      </p>
      <p>
        Posted {" "}
        <Moment fromNow unix>
          {dateToFormat}
        </Moment>
      </p>
      <p>
        {postData.score} points on HackerNews by {postData.by}
      </p>
    </Box>
  );
};

export default Post;
