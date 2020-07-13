import React from 'react';
import "./list.scss";

import {
    ROUTES
} from "../constants/"

const Tags = (props) => {
    let items = Object.keys(props.tags);
    items = items.splice(0, 10);

    const onClickHandler = (id) => {
        props.history.push(`${ROUTES.POSTS}?tags=${id}`);
    }

    if (items.length == 0) {
        return null;
    } else {
        return (<div className="list">
            <h4>Tags</h4>
            <ul>{
                items.map(tags => {
                    const id = props.tags[tags].ID;
                    return (<li className="list_item" key={tags} onClick={() => onClickHandler(id)}>{tags}</li>)
                })
            }</ul>
        </div>)
    }
};

export default Tags;
