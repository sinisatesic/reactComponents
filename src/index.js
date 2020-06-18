import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

//React component:
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Megatron"
                timeAgo="2am"
                comment="Wazzuh"
                ayvatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Spooderman"
                timeAgo="3pm"
                comment="WATHHHUUU"
                ayvatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Hulk Hogan"
                timeAgo="tomorrow at 4pm"
                comment="Wazzaaaaaaaaa"
                ayvatar={faker.image.avatar()}
            />
        </div>
    );
};



ReactDOM.render(<App/>, document.querySelector('#root'));
