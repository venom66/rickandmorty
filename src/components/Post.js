import React, { Component } from 'react';
import axios from 'axios';
import Hok from '.././hok';

const Post = (props) => (
    <div className="Post">
        <h1>{props.name}</h1>
      <div className="info">
      </div>
    </div>
  );

export default Post;