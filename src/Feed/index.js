import React from "react";
import "./index.css";
import TweetBox from "../Utility/TweetBox/index"
import Post from "../Utility/Post/index"

function Feed() {
  return (
    <div className="feed">
      <div className="feed--header">
        <h1>Home</h1>
      </div>
      <TweetBox />
      <Post/>
    </div>
  );
}

export default Feed;
