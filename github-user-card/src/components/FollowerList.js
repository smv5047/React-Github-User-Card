import React from 'react'
import axios from 'axios'
import FollowerCard from './FollowerCard'



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
            {this.state.followers.map(follower => (
                <FollowerCard
                    key={follower.id}
                    name={follower.login}

                />



            ))
            }
        </>
    )}

}

export default FollowerList