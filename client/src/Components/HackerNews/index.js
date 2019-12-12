import React, { Component } from "react";
import Post from "./Post";
import { getTopStoriesIds } from "../../Utils/HackerNewsApi";

class Index extends Component {
  state = {
    topIds: []
  };

  async componentDidMount() {
    const response = await getTopStoriesIds();
    const allIds = response.data;
    const topIds = allIds.slice(0, 25);
    this.setState({ topIds });
  }

  render() {
    const { topIds } = this.state;

    return (
      <div>
        <h1>HackerNews Data</h1>
        <ul>
          {topIds.map(id => {
            return (
              <li key={id}>
                <Post id={id} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Index;
