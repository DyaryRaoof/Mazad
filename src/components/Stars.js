import React from 'react';

const Stars = ({ number, users, showUsers = true }) => {
  function returnStars(number, isBlank) {
    const dummyArray = [];
    for (let i = 0; i < number; i++) {
      dummyArray.push({ id: i });
    }

    const stars = dummyArray.map((a) => {
      return (
        <i
          key={a.id}
          className={`${isBlank ? 'fa fa-star-o' : 'fa fa-star'} `}
          style={isBlank ? { color: 'grey' } : { color: 'yellow' }}
        ></i>
      );
    });

    return stars;
  }

  return (
    <React.Fragment>
      {returnStars(number, false)}
      {returnStars(5 - number, true)}
      {showUsers ? <span className="ml-2">({users}) users</span> : ''}
    </React.Fragment>
  );
};

export default Stars;
