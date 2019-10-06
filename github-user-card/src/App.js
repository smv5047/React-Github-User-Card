import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      user: 'smv5047',
      name: 'this.state.name'
    }
  }

  componentDidMount() {
    this.fetchGitHub()
  }

  fetchGitHub = () => {
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then((res) => {
        this.setState({
          name: res.data.name,
          image: res.data.avatar_url,
          follower_count: res.data.followers,
          followers: res.data.followers_url,
          location: res.data.location
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }


render(){
  return (
    <>
    <h1>GitHub Cards</h1>
    <h2>{this.state.name}</h2>
    </>
  );
}
}

export default App;
