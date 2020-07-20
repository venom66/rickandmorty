import React from 'react';
import './Post.css'

const Post = (props) => (
    <div className="Post">
      <div className="left">
          <h1>{props.name}</h1>
          <img alt="" src={props.img}></img>
        </div>
        <div className="right">
            <p>status: <strong>{props.alive} </strong> </p>
            <p>species: {props.spec}</p>
            <p>location: {props.loc}</p>
            <p>nubers of episodes: {props.epi}</p>
            <p>created: {props.created} </p>
            <p>nr of episodes: {props.number[0]}</p>
        </div>
     </div>
  );

export default Post;