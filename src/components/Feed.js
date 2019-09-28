import React, { Component } from 'react'
import FeedMenu from './FeedMenu'
import FeedCard from './FeedCard'

export class Feed extends Component {
    render() {
        return (
            <div style={container}>
                    <FeedMenu/>
                <div style={{padding: '0px 16px'}}>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>                
                    <FeedCard/>
                    <FeedCard/>  
                </div>      
            </div>
        )
    }
}

const container = {
    backgroundColor: 'white',
}

export default Feed
