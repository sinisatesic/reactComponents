import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";

//React component:
const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <h3>WAZZZUUUP</h3>
                Are you sho?
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Megatron"
                    timeAgo={faker.date.weekday()}
                    comment="Wazzuh"
                    ayvatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Spooderman"
                    timeAgo={faker.date.weekday()}
                    comment="WATHHHUUU"
                    ayvatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Hulk Hogan"
                    timeAgo={faker.date.weekday()}
                    comment="Wazzaaaaaaaaa"
                    ayvatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};



ReactDOM.render(<App/>, document.querySelector('#root'));
