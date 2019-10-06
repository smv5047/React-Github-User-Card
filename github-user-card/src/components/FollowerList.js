import React from 'react'
import axios from 'axios'
import FollowerCard from './FollowerCard'
import styled from "styled-components"

const Style = styled.div`
    
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    img {
        max-width: 150px;
        max-height: 150px;
    }
   
    

`

class FollowerList extends React.Component {
    constructor(){
        super()

        this.state={
           followers: []

        }

    }
    

    componentDidMount() {
        this.fetchGitHubFollowers()
    }


    fetchGitHubFollowers = () => {
        axios.get(`https://api.github.com/users/${this.props.user.user}/followers`)
          .then((res) => { 
            this.setState({
              followers: res.data
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }
    
    render() {
        return (
        <>
            {console.log(this.state.followers)}
            
            <h1>Followers:</h1>
            <Style>
            {this.state.followers.map(follower => (
                <FollowerCard
                    key={follower.id}
                    name={follower.login}
                    image={follower.avatar_url}
                    url={follower.url}
                />



            ))
            }
            </Style>
        </>
    )}

}

export default FollowerList