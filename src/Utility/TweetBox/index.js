import React from 'react'
import "./index.css"
import { Avatar, Button } from "@material-ui/core"

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox--input">
                    <Avatar src="https://avatars2.githubusercontent.com/u/39923784?s=460&u=dffe3fe8a5b147420174c0aaede8b40b688efff8&v=4"/>
                    <input placeholder="GGWP" type="text"/>
                </div>
                <input className="tweetBoxImageInput" placeholder="Enter image url" type="text"/>
                <Button className = "tweetBoxTweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
