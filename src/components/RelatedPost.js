import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import APIService from "../services/API"

import "./list.scss";

import {
    ROUTES
} from "../constants"

const RelatedPost = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = () => {
            APIService.getRelatedPost(props.id, (result) => {
                setPosts(result.hits);
            }, (error) => {
                console.log(error);
                setPosts([]);
            })
        }

        fetchPosts();
    }, []);

    const onClickHandler = (id) => {
        props.history.push(`${ROUTES.POSTS}/${id}`);
    };

    if (posts.length === 0) {
        return null;
    } else {
        return (<div className="list">
            <h4>Related Post</h4>
            <ul>{
                posts.map(post => {
                    const id = post.fields.post_id;
                    return (<li className="list_item" key={id} onClick={() => onClickHandler(id)}>{id}</li>)
                })
            }</ul>
        </div>)
    }
};

export default RelatedPost;

RelatedPost.propTypes = {
    id: PropTypes.string,
    history: PropTypes.object
};
