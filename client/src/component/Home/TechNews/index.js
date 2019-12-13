import React, { Component } from "react";
import { getTopTechStories } from "../../../Utils/NewsApi";
import Story from "./Story";

class Index extends Component {
    state = {
        topStories: []
    };

    async componentDidMount() {
        const response = await getTopTechStories();
        const topStories = response.data.articles;
        this.setState({ topStories });
    }

    render() {
        const { topStories } = this.state

        return (
            <div>
                <h1>Tech News Data</h1>
                <ul>
                    {topStories.map(story => {
                        // intentionally ignoring the unique key prop for now
                        return (
                            <li>
                                <Story data={story} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Index;
