import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="cardContent">
          <h1>I am the title</h1>
          <p>
            I am the paragraph full of text offering a sample of the post
            itself.
          </p>
          <p>by: Mac McMackinmick</p>
        </div>
        <img
          className="previewImg"
          src="https://assets.pcmag.com/media/images/544767-fujifilm-instax-square-sq10-sample-image.jpg?thumb=y"
          alt="Article Image"
        />
      </div>
    );
  }
}

export default Card;
