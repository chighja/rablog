import React, { Component } from 'react';
import Card from '../Card/Card';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="contentContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Content;
