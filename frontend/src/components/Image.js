import React, { Component } from 'react';
import '../CSS/Formstyle.css';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArray: [],
    };
    // Create a ref for imgWrap
    this.imgWrapRef = React.createRef();
  }

  handleFileChange = (e) => {
    const imgWrap = this.imgWrapRef.current; // Access the ref
    const maxLength = e.target.getAttribute('data-max_length');
    const files = e.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.type.match('image.*')) {
        if (newImages.length < maxLength) {
          newImages.push(file);
        } else {
          // Handle error or show a message about reaching the maximum allowed images
          console.error('Maximum number of images reached');
        }
      }
    }

    this.setState((prevState) => ({
      imgArray: [...prevState.imgArray, ...newImages],
    }));
  };

  handleRemoveImage = (file) => {
    this.setState((prevState) => ({
      imgArray: prevState.imgArray.filter((img) => img !== file),
    }));
  };

  render() {
    const { imgArray } = this.state;

    return (
      <div className="upload__box">
        <div className="upload__btn-box">
          <label className="upload__btn">
            <p>Upload images</p>
            <input
              type="file"
              multiple
              data-max_length="20"
              className="upload__inputfile"
              onChange={this.handleFileChange}
            />
          </label>
        </div>
        <div className="upload__img-wrap" ref={this.imgWrapRef}>
          {imgArray.map((file, index) => (
            <div key={index} className="upload__img-box">
              <div
                style={{ backgroundImage: `url(${URL.createObjectURL(file)})` }}
                data-number={index}
                data-file={file.name}
                className="img-bg"
              >
                <div
                  className="upload__img-close"
                  onClick={() => this.handleRemoveImage(file)}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Image;
