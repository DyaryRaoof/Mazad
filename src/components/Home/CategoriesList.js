import React from 'react';
import './CategoriesList.css';
import history from '../history';

const generateCategoryListNames = () => {
  const list = [];
  for (let i = 0; i < 100; i++) {
    list.push(makeid(20));
  }

  return list;
};

function makeid(length) {
  var result = [];
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join('');
}

class CategoriesList extends React.Component {
  renderCateogries(list) {
    return list.map((listItem) => {
      return (
        <div
          className="category-item"
          key={listItem}
          onClick={() => history.push('/job-list')}
        >
          {listItem}
        </div>
      );
    });
  }

  render() {
    const categoryNames = generateCategoryListNames();
    return (
      <div className="container" style={{ marginTop: '100px' }}>
        <h3 style={{ color: 'green' }}>Job Categories</h3>
        <div className="p-2 m-2 categories-grid">
          {this.renderCateogries(categoryNames)}
        </div>
      </div>
    );
  }
}

export default CategoriesList;
