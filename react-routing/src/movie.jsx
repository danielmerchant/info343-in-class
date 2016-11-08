import React from "react";

const IMG_BASE_URL = "http://image.tmdb.org/t/p/"
const IMG_SIZE = "w185/"
export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={IMG_BASE_URL + IMG_SIZE + this.props.movie.poster_path} />
                <h2>{this.props.movie.title}</h2>
                <p>{this.props.movie.overview}</p>
            </div>
        );
    }
}