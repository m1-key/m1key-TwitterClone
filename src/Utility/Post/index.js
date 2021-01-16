import React from "react";
import "./index.css";
import { Avatar } from "@material-ui/core";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post(props) {
  const displayName = props.displayName;
  const userName = props.userName;
  const verfied = props.verfied;
  const text = props.text;
  const image = props.image;
  const avatar = props.avatar;
  return (
    <div className="post">
      <div className="postAvatar">
        <Avatar src="https://avatars2.githubusercontent.com/u/39923784?s=460&u=dffe3fe8a5b147420174c0aaede8b40b688efff8&v=4" />
      </div>
      <div className="postBody">
        <div className="postHeader">
          <div className="postHeaderText">
            <h3>
              Mithilesh{" "}
              <span>
                <VerifiedUser className="postBadge" /> @m1key
              </span>
            </h3>
          </div>
          <div className="postHeaderDescription">
            <p>We are the champions</p>
          </div>
        </div>
        <img src="https://raw.githubusercontent.com/m1-key/Media/main/linear.gif" />
      <div className="postFooter">

      </div>
      </div>
    </div>
  );
}

export default Post;
