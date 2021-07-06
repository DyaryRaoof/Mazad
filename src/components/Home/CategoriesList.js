import React from 'react';

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
      return <label key={listItem}>{listItem}</label>;
    });
  }

  render() {
    const categoryNames = generateCategoryListNames();
    return (
      <div className="container" style={{ marginTop: '100px' }}>
        <h3 style={{ color: 'green' }}>Job Categories</h3>
        <div className="row">
          <div className="col-md-4">
            {this.renderCateogries(
              categoryNames.slice(0, categoryNames.length / 3)
            )}
          </div>
          <div className="col-md-4">
            {this.renderCateogries(
              categoryNames.slice(
                categoryNames.length / 3,
                (categoryNames.length / 3) * 2
              )
            )}
          </div>
          <div className="col-md-4">
            {this.renderCateogries(
              categoryNames.slice(
                (categoryNames.length / 3) * 2,
                categoryNames.length
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesList;
