import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import "./index.css";

function Widget() {
  return (
    <div className="widgets">
      <div className="widgetsInput">
        <SearchIcon className="widgetsSearchIcon" />
        <input placeholder="Search" type="text" />
      </div>
      <div className="widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1350480432215691265"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="mithilesh_ti"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://m1-key.github.io"}
          options={{ text: "#reactjs is awesome", via: "mithilesh_ti" }}
        />
      </div>
    </div>
  );
}

export default Widget;
