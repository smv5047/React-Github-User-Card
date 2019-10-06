import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard'
import styled from 'styled-components'

const Style = styled.div`
  margin: 0 auto;
  width: 80%;
  text-align: center;
`

class App extends React.Component {
  constructor(){
    super()
    this.state={
      user: 'smv5047',
      name: 'this.state.name',
      image: 'this.state.image',
      follower_count: 'this.state.follower_count',
      followers: 'this.state.followers',
      location: 'this.state.location'
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
    <Style>
      <h1>GitHub Cards</h1>
      <UserCard user={this.state}/>
      
    </Style>
  );
}
}

export default App;
