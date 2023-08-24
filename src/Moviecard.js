import { Component } from "react";

class MovieCard extends Component {
    constructor() {
        super();
        this.state = {
            title: "The Avengers",
            plot: "Supernatural powers shown in the movie",
            price: 199,
            rating: 8.9,
            stars: 0.0,
        }
    }

    addStars = () => {
        this.setState({stars: this.state.stars + 0.5})
    }

    removeStars = () => {
        this.setState({stars: this.state.stars - 0.5})
    }

    render() {
        const {title, plot, price, rating, stars} = this.state;
        return <div className="main">
            <div className="movie-card">
              <div className="left">
                <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="Poster"/>
              </div>
              <div className="right">
                <div className="title">{title}</div>
                <div className="plot">{plot}</div>
                <div className="price">{price}</div>

                <div className="footer">
                    <div className="rating">{rating}</div>
                    <div className="star-dis">
                        <img className="str-btn" onClick={this.removeStars} src="https://cdn-icons-png.flaticon.com/128/43/43625.png" alt="decrease" />
                        <img className="stars" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="star" />
                        <img className="str-btn" onClick={this.addStars} src="https://cdn-icons-png.flaticon.com/128/748/748113.png" alt="increase" />
                        <span>{stars}</span>
                    </div>
                    <button className="favourite-btn">Favourite</button>
                    <button className="cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
        </div>
    }
}

export default MovieCard;