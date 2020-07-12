import React from "react";
import "./PostItem.scss";

import {
    timeSince,
    createMarkup,
} from "../utils/";

import {
    defaultThumbnail
} from "../constants/";


const PostItem = (props) => {
    return (<div className="post-item" onClick={ () => props.onClickHandler(props.post.ID) }>
        <div className="post_item__thum">
            <img src={props.post.post_thumbnail ? props.post.post_thumbnail.URL : defaultThumbnail} alt="thumbnai" />
        </div>
        <div className="post-item__content">
            <div className="post-item__title">{props.post.title}</div>
            <div className="post-item__excerpt" dangerouslySetInnerHTML={createMarkup(props.post.excerpt)}></div>
            <div className="post-item__date">{timeSince(props.post.modified || props.post.date)}</div>
        </div>
    </div>)
};

export default PostItem;
