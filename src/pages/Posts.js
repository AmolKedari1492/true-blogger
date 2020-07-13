import React, { Component } from 'react'
import "./Posts.scss";
import "../scss/base.scss";

import PostItem from "../components/PostItem";
import EmptyContent from "../components/EmptyContent";

import APIService from "../services/API";

import {
    parseQueryString
} from "../utils/"

import {
    LIST_VALID_PARAMS,
    ROUTES
} from "../constants/"


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            params: {
                number: 25,
                page: 1,
                offset: 25    
            },
            total: 0
        }

        let queryParams = parseQueryString(this.props.location.search);
        if(Object.keys(queryParams).length) {
            this.setParams(queryParams);
        }
    }

    componentDidMount() {
        this.fetchPosts()
    }

    setParams = (queryParams) => {
        let params = this.state.params;
        for(let i in queryParams) {
            if(LIST_VALID_PARAMS.indexOf(i)) {
                params[i] = queryParams[i];
            }
        }

        this.setState({
            params
        })
    }

    fetchPosts = () => {
        let {params, posts} = this.state;
        APIService.getPosts(params, (resp) => {
            let newPosts = resp.posts;
            let total = resp.found;
            posts = [].concat(posts, newPosts)
            this.setState({
                posts,
                total,
                APIFinished: true
            });
        }, (error) => {
            console.error(error);
        });
    }

    getMorePosts = () => {
        let {params} = this.state;
        params.page++;
        params.offset = params.page * params.number;
        this.setState({
            params
        }, () => {
            this.fetchPosts();
        });
    }

    onClickHandler = (id) => {
        this.props.history.push(`${ROUTES.POST}${id}`);
    }

    renderPosts = () => {
        let {posts} = this.state;
        let view = null;

        if(posts.length > 0) {
            view = posts.map(post => {
                return (<div key={post.ID}>
                    <PostItem post={ post } onClickHandler={ this.onClickHandler } customClass="listing"/>
                </div>);
            });    
        }

        return view;
    }

    render() {
        let { posts, total, params, APIFinished } = this.state;

        if(!APIFinished) {
            return <h2 className="align-center">Loading...</h2>
        }

        if(posts && posts.length === 0 && APIFinished) {
            return <EmptyContent />
        }

        return(<div className="posts">
            <div className="posts__header"></div>
            <div className="posts__list">
                { this.renderPosts() }
            </div>
            <div className="posts__actions">
                {
                    this.state.posts.length > 0 &&
                    params.offset < total &&
                    <div className="" onClick={ this.getMorePosts }>Load More</div>
                }
            </div>
        </div>);
    }
}

export default Posts;
