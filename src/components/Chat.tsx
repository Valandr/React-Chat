import React, { Component } from 'react';

const textArea = {
    borderRadius: 8,
    width: 450,
    height: 250
};

const styled = {
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-evenly'
}


class Chat extends Component {
    render() {
        return (
            <div className="chat__type__body">
                <h1>My Chat App</h1>
                <div className="chat__type" style={styled}>
                    <div>
                        <textarea style={textArea} id="msg_box" placeholder="Type your message"></textarea>
                    </div>
                    <div>
                        <button className="btn btn-primary" id="sendMessage">Send</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;