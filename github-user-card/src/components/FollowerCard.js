import React from 'react'
import styled from 'styled-components'

const Style = styled.div`
    background: #5299D3;
    box-shadow: 1px 1px 2px;
    border: solid #2E3532 1.5px;
    color: black;
    font-family: 
    img {
        max-width: 200px;
        max-height: 200px;
    }
    padding: 10px;
    margin-bottom: 10px;
    h1{
    font-size: 1.25rem;
    }

`


class FollowerCard extends React.Component {
 


    

render(){
    return (
        <Style>
            
                <div>
                    
                    <img src={this.props.image} alt={this.props.name}/>
                </div>
                <div>
                    <h1>{this.props.name}</h1>
                </div>
            
            
        </Style>
    );
    }
}

export default FollowerCard