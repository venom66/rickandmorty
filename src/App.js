import React, { Component } from 'react';
import axios from 'axios';
import Post from './components/Post';
import Hok from './hok';

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount () {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(responce => {
        this.setState({posts: responce.data.results});
        console.log(responce.data.results[1]);
      })
  }
render () {
  const posts = this.state.posts.map((post, i) => {
    console.log(post);
      return <Post key={i} name={post[i]} />
  });

  return (
    <div className="App">
      <input value="Rick name"></input>
      <section className="Posts">
        <div>div</div>
        {posts}
        
      </section>
    </div>
  );
}
}
export default App;
