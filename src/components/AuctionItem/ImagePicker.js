import React from 'react';

class ImagePicker extends React.Component {
  state = { imageReader: null, actualImage: null };

  onFileSelected = (e) => {
    const files = Array.from(e.target.files);
    this.setState({ actualImage: files[0] });

    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({ imageReader: e.target.result });
    };
    reader.readAsDataURL(files[0]);
    this.props.onImageSelected(files[0]);
  };

  render() {
    return (
      <div>
        <div className="custom-file mb-5">
          <input
            onChange={this.onFileSelected}
            type="file"
            className="custom-file-input"
            id="customFile"
          />

          <div className="row">
            {
              <div
                className="col-md-1"
                style={{ display: this.state.actualImage ? 'initial' : 'none' }}
              >
                <img
                  className="img-fluid mb-5"
                  alt="item name"
                  style={{ width: '40px' }}
                  src={this.state.imageReader}
                />
              </div>
            }
            <div
              className={`${
                this.state.actualImage ? 'col-md-11' : 'col-md-12'
              }`}
            >
              <label className="custom-file-label" for="customFile">
                {this.state.imageReader
                  ? this.state.actualImage.name
                  : 'Upload A File'}
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImagePicker;
