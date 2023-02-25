import { newsApi } from "../NewsApi";
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default class News extends React.Component {

    state = {
        newses: []
    };

    componentDidMount() {
        this.fetchNewses();
    };

    fetchNewses = async () => {
        const newses = await newsApi.get();
        this.setState({ newses });
    };

    render() {
        return (
            <div>
                <br></br>
                <h1 className="center-stuff heading">Video Game News</h1>
                <br></br>
                    {
                        this.state.newses.map((news, i) => (
                            <div key={i}>
                                <Card className="newses"
                                 news={news}>
                                <Link className="bg-dark text-white" to={news.link}><h6>{news.title}</h6></Link> 
                                <Link to={news.link}> <img className="images" src={news.image} alt="news depiction"></img></Link>
                                </Card>
                                <br></br>
                            </div>
                        ))
                    }
            </div>
        )
    }

}