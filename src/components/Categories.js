import React from 'react';
import "./list.scss";

import {
    ROUTES
} from "../constants"

const Categories = (props) => {
    const items = Object.keys(props.categories);
    const onClickHandler = (id) => {
        props.history.push(`${ROUTES.POSTS}?category=${id}`);
    }
    return(<div className="list">
        <h4>Categories</h4>
        <ul>{
            items.map(category => {
            const id = props.categories[category].ID;
            return(<li className="list_item" key={category} onClick={() => onClickHandler(id)}>{category}</li>)
            })
        }</ul>
    </div>)
};

export default Categories;
