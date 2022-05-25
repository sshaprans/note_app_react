import React from "react";
import {ListGroup} from 'reactstrap';
import './post-list';
import PostListItem from "../post-list-item";

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    
    const elements = posts.map((item) => {
        const {id, ...itemPorps} = item
        return (
            <li key={id} className='list-group-item'>
                <PostListItem 
                    {...itemPorps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}/>
            </li>
        )
    })
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;