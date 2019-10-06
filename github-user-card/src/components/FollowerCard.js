import React from 'react'



class FollowerCard extends React.Component {
 


    

render(){
    return (
        <>
            
                {/* <div>
                    
                    <img src={this.props.user.image} alt={this.props.user.name}/>
                </div> */}
                <div>
                    <h1>{this.props.name}</h1>
                    {/* <h2>{this.props.user.location}</h2>
                    <h1>Followers:{this.props.user.follower_count}</h1> */}
                </div>
            
            
        </>
    );
    }
}

export default FollowerCard