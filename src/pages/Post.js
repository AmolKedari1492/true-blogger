import React, { Component } from 'react';
import "./Posts.scss";

import PostItem from "../components/PostItem";
import PostContent from "../components/PostContent";
import Tags from "../components/Tags";
import Categories from "../components/Categories";
import RelatedPost from "../components/RelatedPost";
import EmptyContent from "../components/EmptyContent";


import APIService from "../services/API";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }

    componentDidMount() {
        if (this.props.match && this.props.match.params.id) {
            this.fetchPost(this.props.match.params.id);
        }
    }

    static getDerivedStateFromProps(newProps, preState) {
        if(newProps.match.params.id && preState.post && newProps.match.params.id !== preState.post.id) {
            let post = preState.post;
            post.id = newProps.match.params.id;
            return {
                post
            }
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match && prevProps.match && this.props.match.params.id !== prevProps.match.params.id) {
          this.fetchPost(this.props.match.params.id);
        }
      }

    fetchPost = (id) => {
        APIService.getPost(id, (resp) => {
            let {
                author,
                categories,
                content,
                date,
                excerpt,
                featured_image,
                like_count,
                likes_enabled,
                tags,
                title
            } = resp;

            this.setState({
                post: {
                    id,
                    author,
                    categories,
                    content,
                    date,
                    excerpt,
                    featured_image,
                    like_count,
                    likes_enabled,
                    tags,
                    title
                }
            });
            console.log(resp)
        }, (error) => {
            console.error(error)
        });
    }

    render() {
        let { post } = this.state;
        if (!post) {
            return null;
        }

        if(post && post.length === 0) {
            return <EmptyContent />
        }

        return (<div className="post">
            <div className="post__content">
                <PostItem post={post} customClass="" />
                <PostContent content={post.content} />
            </div>
            <div  className="post__meta">
                <Categories categories={post.categories} history={this.props.history} />
                <Tags tags={post.tags} history={this.props.history} />
                <RelatedPost history={this.props.history}/>
            </div>
        </div>);
    }
}

export default Post;
