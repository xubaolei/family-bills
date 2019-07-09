import React from 'react';
import './css/PostItem.css';

function PostItem(props){
    const handleClick = () =>{
        props.onVote(props.post.id);
    };

    const {post} = props;

    return(
        <li className='item'>
            <div className='title'>{post.title}</div>
            <div className='title'>{post.creator}</div>
            <div className='title'>{post.date}</div>
            <button className='like' onClick={handleClick}>
                点赞
            </button>
            <span>{post.vote}</span>
        </li>
    );
}

export default PostItem;