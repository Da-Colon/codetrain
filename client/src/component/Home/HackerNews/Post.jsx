import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import Axios from "axios";
import styled from 'styled-components'

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
    <PostWrapper>
      <p>
         <a href={postData.url}>{postData.title}</a> 
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
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  margin-bottom: 20px;
`


export default Post;
