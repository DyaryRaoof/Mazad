import React, { useEffect, useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { connect } from 'react-redux';

import personImage from '../../images/person-placeholder.jpg';
import { toggleChatBox } from '../../actions';

const MessagePopover = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, []);

  const toggle = () => {
    setOpen(!open);
  };

  const toggleChatBox = () => {
    props.toggleChatBox();
  };

  const messages = [
    {
      title: 'some message title here, and some omore contenet',
      userName: 'Dyary Raoof',
      duration: '1 month ago',
      id: 1,
    },
    {
      title: 'some message title here, and some omore contenet',
      userName: 'Dyary Raoof',
      duration: '1 month ago',
      id: 2,
    },
    {
      title: 'some message title here, and some omore contenet',
      userName: 'Dyary Raoof',
      duration: '1 month ago',
      id: 3,
    },
    {
      title: 'some message title here, and some omore contenet',
      userName: 'Dyary Raoof',
      duration: '1 month ago',
      id: 4,
    },
    {
      title: 'some message title here, and some omore contenet',
      userName: 'Dyary Raoof',
      duration: '1 month ago',
      id: 5,
    },
    {
      title: 'some message title here, and some omore contenet',
      userName: 'Dyary Raoof',
      duration: '1 month ago',
      id: 6,
    },
    {
      title: 'some message title here, and some omore contenet',
      userName: 'Dyary Raoof',
      duration: '1 month ago',
      id: 7,
    },
    {
      title: 'some message title here, and some omore contenet',
      userName: 'Dyary Raoof',
      duration: '1 month ago',
      id: 8,
    },
    {
      title: 'some message title here, and some omore contenet',
      userName: 'Dyary Raoof',
      duration: '1 month ago',
      id: 9,
    },
    {
      title: 'some message title here, and some omore contenet',
      userName: 'Dyary Raoof',
      duration: '1 month ago',
      id: 10,
    },
    {
      title: 'some message title here, and some omore contenet',
      userName: 'Dyary Raoof',
      duration: '1 month ago',
      id: 11,
    },
  ];

  const renderMessages = () => {
    return messages.map((message, index) => {
      if (index < 5) {
        return (
          <div
            className="row"
            key={message.id}
            onClick={toggleChatBox}
            style={{ cursor: 'pointer' }}
          >
            <div className="col-2">
              <img
                src={personImage}
                alt={message.userName}
                style={{ width: '50px' }}
              />
            </div>
            <div className="col-4">
              <div className="d-flex justify-content-between  ">
                <p>{message.userName}</p>
                <span
                  style={{
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    backgroundColor: 'grey',
                    border: '2px solid white',
                  }}
                ></span>
              </div>
              <p>{message.title.slice(0, 25)}</p>
              <p>{message.duration}</p>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <React.Fragment>
      <button
        style={{ cursor: 'pointer' }}
        className="btn btn-success mr-2"
        id={props.buttonId}
        type="button"
      >
        <i className={props.iconClass}></i>
        <span className="badge badge-pill badge-danger ml-1">1</span>
      </button>

      <Popover
        placement="left"
        isOpen={open}
        target={props.buttonId}
        toggle={toggle}
      >
        <PopoverHeader>
          <div className="d-flex justify-content-between">
            Messages{' '}
            <label
              style={{
                fontSize: '12px',
                textDecoration: 'underline',
                color: 'green',
                cursor: 'pointer',
              }}
            >
              See All
            </label>
          </div>
        </PopoverHeader>
        <PopoverBody style={{ width: '500px', fontWeight: 'lighter' }}>
          {renderMessages()}
        </PopoverBody>
      </Popover>
    </React.Fragment>
  );
};

export default connect(null, { toggleChatBox })(MessagePopover);
