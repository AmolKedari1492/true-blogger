import React, { Component } from 'react'

import APIService from "../services/API";

class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        this.fetchBlogs()
    }

    fetchBlogs = () => {
        APIService.getBlogs((resp) => {
            console.log(resp)
        }, (error) => {
            console.error(error);
        });
    }

    render() {
        return(<div className="">
            Blogs
        </div>);
    }
}

export default Blogs;
