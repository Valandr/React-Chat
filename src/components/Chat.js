import React, { Component } from 'react';

class Chat extends Component {
    render() {
        return (
            <div class="chat__type__body">
                <h1>My Chat App</h1>
                <div class="chat__type">
                    <textarea id="msg_box" placeholder="Type your message"></textarea>
                    <button class="btn btn-primary" id="sendMessage">Send</button>
                </div>
            </div>
        )
    }
}

export default Chat;