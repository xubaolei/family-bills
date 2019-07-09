import React, {
    Component
} from 'react';
import PostItem from './PostItem';

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.timer = null;
        this.handleVote = this.handleVote.bind(this); //ES6 class中,必须手动绑定方法this的指向
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                posts: [{
                        id: 1,
                        title: '大家一起来讨论React吧',
                        creator: 'stone1',
                        date: '创建时间：0708',
                        vote: 0
                    },
                    {
                        id: 2,
                        title: '前端框架，你最爱哪一个',
                        creator: 'stone2',
                        date: '创建时间：0709',
                        vote: 0
                    }
                ]
            });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    handleVote(id) {
        const posts = this.state.posts.map(item => {
            const newItem = item.id === id ? {
                ...item,
                vote: ++item.vote
            } : item;
            return newItem;
        });

        this.setState({
            posts
        });

    }

    render(){
        return (
            <div>
                帖子列表:
                <ul>
                    {this.state.posts.map(item => 
                        <PostItem key ={item.id} post={item} onVote = {this.handleVote}/>
                    )}
                </ul>
            </div>
        );
    }
}

export default PostList;