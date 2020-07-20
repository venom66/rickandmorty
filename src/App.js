import React, { Component } from 'react';
import axios from 'axios';
import Post from './components/Post';
import Input from './components/Input';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    posts: [],
    input: '',
    status: '',
    image: '',
  }}

  componentDidMount () {
    const instance = axios.create({
      baseURL: 'https://rickandmortyapi.com/api/character/',
      timeout: 2000,
    });
    
    // axios.get('https://rickandmortyapi.com/api/character/', {
    //   params: {
    //     name: this.state.input
    //   }
    // })
    instance.get('', {
      params: {
        name: this.state.input
      }
    })
      .then(responce => {
        let resp = responce.data.results;
        let respVal = Object.values(resp)
        this.setState({posts: respVal});
        // console.log(this.state.posts);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      })
  }

  handleChangeSearch (e) {
    console.log(e.target.value);
    console.log(e.target.name);
    let newSearch = e.target.value;
    this.setState({input: newSearch}); 
    this.componentDidMount();
    }


render () {
  let posts = this.state.posts.map((post, i) => {
    // console.log(post.id);
      return <Post key={i} 
      name={post.name} 
      alive={post.status} 
      img={post.image}
      spec={post.species} 
      loc={post.location.name}
      epi={post.episode.length}
      created={post.created}
      number={post.episode}/>
  });


  return (
    <div className="App">
      <div>
      <div className="searchInput">
      <p>Choose charakter name:</p>
      <input id="search" placeholder="smith" name='serach' value={this.state.input} onChange={(event)=>this.handleChangeSearch(event)}></input>
      </div>
      <section className="Posts">

        {posts}
        
      </section>
      </div>
    </div>
  );
}
}
export default App;
