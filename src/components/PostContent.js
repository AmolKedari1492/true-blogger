import React from "react";
import PropTypes from 'prop-types';
import "./PostContent.scss";

import {
    createMarkup,
} from "../utils/";


const PostContent = (props) => <div className="post-content-item" dangerouslySetInnerHTML={createMarkup(props.content) }></div>;

export default PostContent;

PostContent.propTypes = {
    content: PropTypes.string
};
