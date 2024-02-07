import React, { useState, useRef, useEffect } from 'react';
import '../CSS/Formstyle.css';

const Image = ({ onImageUpload, img }) => {
  const [imgArray, setImgArray] = useState([]);
  const imgWrapRef = useRef();
  const [a, setA] = useState([]);

useEffect(()=>{
  const fetchImages = async () => {
    var values = await Object.values(img);
   
    if (values.length > 0) {
      setA([...values]);
    }
  };
 
 fetchImages()

},[img])

  console.log("a value")
console.log(a.length)
console.log(a)
  const handleFileChange = async (e) => {
    const imgWrap = imgWrapRef.current;
    const maxLength = 5;
    const files = e.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.type.match('image.*')) {
        if (newImages.length < maxLength) {
          newImages.push(file);

          // Upload the image to Cloudinary
          await uploadImageToCloudinary(file, i);
        } else {
          console.error('Maximum number of images reached');
        }
      }
    }

    setImgArray((prevImages) => [...prevImages, ...newImages]);
    console.log("after ",a)
    onImageUpload(a); // Notify the parent component about the uploaded images
  };

  const uploadImageToCloudinary = async (file, i) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'chatapp');
    data.append('cloud_name', 'dogndfmt0');

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dogndfmt0/image/upload', {
        method: 'post',
        body: data,
      });

      const cloudinaryData = await response.json();
      console.log('Cloudinary URL:', cloudinaryData.url);
      let l=a.length;
    a[l]=cloudinaryData.url;

    console.log(a);
  
      // Use the Cloudinary URL as needed (e.g., save it to state or perform other actions)
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  const handleRemoveImage = (img) => {
    setA((prevA) => prevA.filter((image) => image !== img));
  }

  // useEffect to log imgArray when it changes

let k=0;
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
            onChange={handleFileChange}
          />
        </label>
      </div>
      <div className="upload__img-wrap" ref={imgWrapRef}>
        {a  && a.map((img) => (
          <div key={k++} className="upload__img-box">
            <div
                style={{ backgroundImage: `url(${img})` }}

              
              className="img-bg"
            >
              <div
                className="upload__img-close"
                onClick={() => handleRemoveImage(img)}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
