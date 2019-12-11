import React, { Component } from "react";
import { getAnItem } from "../../Utils";
import Moment from "react-moment";

class Post extends Component {
    state = {
        postData: {}
    };

    async componentDidMount() {
        const idFromParent = this.props.id;
        const response = await getAnItem(idFromParent);
        const postData = response.data;
        this.setState({ postData });
    }

    render() {
        const { postData } = this.state;
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
    }
}

export default Post;
