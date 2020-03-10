import React, { Component } from 'react';

class Chat extends Component {
    render() {
        return (
            <h1>My Chat App</h1>
            <form style="width: 100%">
                <div class="bar bar-header item-input-inset">
                    <label class="item-input-wrapper">
                        <input type="search" placeholder="Tapez un message" ng-model="add.message" />
                    </label>
                    <button class="button button-clear" type="submit" ng-click="add(add)">
                    Envoyer
                    </button>
                </div>
            </form>
        )
    }
}

export default Chat;