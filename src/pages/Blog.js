import React, { Component } from 'react';

import APIService from "../services/API";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: {
                author: '',
                category: '',
                content: '',
                date: '',
                excerpt: '',
                featured_image: '',
                like_count: 0,
                likes_enabled: false,
                tags: '',
                title: ''
            }
        }
    }

    componentDidMount() {
        if (this.props.match && this.props.match.params.id) {
            this.fetchBlog(this.props.match.params.id);
        }
    }

    fetchBlog = (id) => {
        APIService.getBlog(id, (resp) => {
            let {
                author,
                category,
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
                blog: {
                    author,
                    category,
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
        return (<div className="">
            Blog
        </div>);
    }
}

export default Blog;
