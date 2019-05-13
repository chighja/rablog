import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  render() {
    return (
      <div className="postContainer">
        <div>
          <img
            className="heroImg"
            src="https://www.fujifilm.co.nz/products/digital_cameras/x/fujifilm_x_t1/sample_images/img/index/ff_x_t1_001.JPG"
            alt="hero image"
          />
        </div>
        <h1 className="articleTitle">I am the title</h1>
        <h3>I am the subheading describing the article</h3>
        <div className="authorBox">
          <img
            className="authorAvatar"
            src="https://cdn.dribbble.com/users/5746/screenshots/5895153/dribbble-avatar-salvatier.png"
            alt="Author avatar"
          />
          <div className="postDetails">
            <h5 className="authorName">Martin Mahew</h5>
            <h6 className="articleDate">Jul 12, 2018</h6>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Quam id leo in
          vitae turpis massa sed elementum. Tempor orci dapibus ultrices in
          iaculis nunc sed augue. Arcu cursus euismod quis viverra nibh cras
          pulvinar mattis nunc. Massa tempor nec feugiat nisl. Amet porttitor
          eget dolor morbi non arcu risus. Purus viverra accumsan in nisl nisi
          scelerisque eu ultrices vitae. Massa tincidunt nunc pulvinar sapien.
          Nisi vitae suscipit tellus mauris a diam maecenas. Feugiat nisl
          pretium fusce id. Integer eget aliquet nibh praesent tristique magna.
          Phasellus vestibulum lorem sed risus. Volutpat maecenas volutpat
          blandit aliquam etiam. Sit amet nisl suscipit adipiscing. Ut tellus
          elementum sagittis vitae et leo duis. Purus faucibus ornare
          suspendisse sed nisi lacus sed viverra. Senectus et netus et malesuada
          fames. Nunc consequat interdum varius sit amet mattis vulputate enim
          nulla. Nam aliquam sem et tortor consequat id. Nibh ipsum consequat
          nisl vel pretium lectus. Sem viverra aliquet eget sit amet tellus cras
          adipiscing enim. Volutpat lacus laoreet non curabitur gravida arcu.
          Congue eu consequat ac felis donec. A scelerisque purus semper eget
          duis at. Arcu vitae elementum curabitur vitae. Bibendum est ultricies
          integer quis auctor elit. Odio morbi quis commodo odio aenean sed
          adipiscing diam. Venenatis urna cursus eget nunc scelerisque viverra
          mauris. Est ultricies integer quis auctor elit sed vulputate.
        </p>
      </div>
    );
  }
}

export default Post;
