import React from 'react';
import './Chat.css';
import image from '../images/person-placeholder.jpg';
import { connect } from 'react-redux';
import { toggleChatBox } from '../actions';

class Chat extends React.Component {
  dummyChats = [
    { id: '1', text: 'thi is a chat , talking more and more...' },
    { id: '2', text: 'thi is a chat 2, talking more and more...' },
    {
      id: '3',
      text:
        'thi is a chat 3, talking more and more , talking more and more......',
    },
    { id: '4', text: 'thi is a chat 4' },
    { id: '5', text: 'thi is a chat 5, talking more and more...' },
    { id: '6', text: 'thi is a chat 6, talking more and more...' },
    { id: '7', text: 'thi is a chat 7, talking more and more...' },
  ];

  renderChats = (chats, isCurrentUser) => {
    return chats.map((chat, index) => {
      return (
        <div className="d-flex justify-content-around">
          <div className="userImage col-md-2">
            {index === 0 && !isCurrentUser ? (
              <img src={image} alt="user" />
            ) : null}
          </div>
          <div
            key={chat.id}
            style={{ backgroundColor: isCurrentUser ? 'royalBlue' : 'grey' }}
            className="singleChat col-md-8"
          >
            <div>{chat.text}</div>
          </div>

          {isCurrentUser ? (
            <div className="userImage col-md-2">
              {index === 0 ? <img src={image} alt="user" /> : null}
            </div>
          ) : null}
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="chatBox"
        style={{ display: this.props.isVisible ? 'initial' : 'none' }}
      >
        <div class="userName">User Name Here</div>
        <hr />
        <div>{this.renderChats(this.dummyChats, false)}</div>
        <div>{this.renderChats(this.dummyChats, true)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isVisible: state.chatBox.isVisible };
};

export default connect(mapStateToProps, { toggleChatBox })(Chat);
