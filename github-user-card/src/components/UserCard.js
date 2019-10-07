import React from 'react'
import styled from 'styled-components'



const Style = styled.div`
    display: flex;
    border: solid #4E5283 1px;
    justify-content: center;
    background: #7871AA;
    box-shadow: 1px 1px 5px;
    width: 100%;
        &>div{
            width: 45%;
            
        }
        img{
            border-radius: 200px;
        }
`


class UserCard extends React.Component {
 


    

render(){
    return (
        <Style>
            
                <div>
                    
                    <img src={this.props.user.image} alt={this.props.user.name}/>
                </div>
                <div>
                    <h1>{this.props.user.name}</h1>
                    <h2>{this.props.user.location}</h2>
                    <h1>Followers:{this.props.user.follower_count}</h1>
                </div>
            
            
        </Style>
    );
    }
}

export default UserCard