import React from 'react';
import PropTypes from 'prop-types';

import "./list.scss";

import {
    ROUTES
} from "../constants"

const Categories = (props) => {
    const items = Object.keys(props.categories);

    const onClickHandler = (id) => {
        props.history.push(`${ROUTES.POSTS}?category=${id}`);
    }

    if (items.length === 0) {
        return null;
    } else {
        return (<div className="list">
            <h4>Categories</h4>
            <ul>{
                items.map(category => {
                    const id = props.categories[category].ID;
                    return (<li className="list_item" key={category} onClick={() => onClickHandler(id)}>{category}</li>)
                })
            }</ul>
        </div>)
    }
};

export default Categories;

Categories.propTypes = {
    categories: PropTypes.object,
    history: PropTypes.object
}
