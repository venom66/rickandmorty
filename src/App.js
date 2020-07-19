import React, { Component } from 'react';
import axios from 'axios';
import Post from './components/Post';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    posts: [],
    input: '',
  }}

  componentDidMount () {
    axios.get('https://rickandmortyapi.com/api/character/', {
      params: {
        name: this.state.input,
      }
    })
      .then(responce => {
        // console.log(responce);
        let resp = responce.data.results;
        let respVal = Object.values(resp)
        this.setState({posts: respVal});
        // console.log(this.state.posts);
      })
      // .catch(function (error) {
      //   // handle error
      //   console.log(error);
      // })
      // .then(function () {
      //   // always executed
      // });
  }

  handleChangeSearch (e) {
    console.log(e.target.value);
    console.log(e.target.name);
    let newSearch = e.target.value;
    this.setState({input: newSearch});
      console.log('input-----------');
    console.log(this.state.input);
    this.componentDidMount();
  }


render () {
  let posts = this.state.posts.map((post, i) => {
    // console.log(post.id);
      return <Post key={i} name={post.name} />
  });


  return (
    <div className="App">
      <input name='serach' value={this.state.input} onChange={(e)=>this.handleChangeSearch(e)}></input>
      <section className="Posts">

        {posts}
        
      </section>
    </div>
  );
}
}
export default App;
