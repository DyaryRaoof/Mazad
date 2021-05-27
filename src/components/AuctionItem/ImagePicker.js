import React from "react";

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
  };

  render() {
    return (
      <div>
        <div className="custom-file pb-5">
          <input
            onChange={this.onFileSelected}
            type="file"
            className="custom-file-input"
            id="customFile"
          />

          <div className="row">
            {this.state.actualImage ? (
              <div className="col-md-1">
                <img
                  className="img-fluid pb-5"
                  alt="item name"
                  style={{ width: "40px" }}
                  src={this.state.imageReader}
                />
              </div>
            ) : null}
            <div className="col-md-11">
              <label className="custom-file-label" for="customFile">
                {this.state.imageReader
                  ? this.state.actualImage.name
                  : "Upload A File"}
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImagePicker;
