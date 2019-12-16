import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import Axios from "axios";

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
    <div>
      <p>
        {postData.title} (<a href={postData.url}>Link</a> )
      </p>
      <p>
        <Moment fromNow unix>
          {dateToFormat}
        </Moment>
      </p>
      <p>
        {postData.score} points by {postData.by}
      </p>
    </div>
  );
};

export default Post;
