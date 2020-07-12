import React from "react";
import "./PostContent.scss";

import {
    createMarkup,
} from "../utils/";


const PostContent = (props) => <div className="post-content-item" dangerouslySetInnerHTML={createMarkup(props.content) }></div>;

export default PostContent;
