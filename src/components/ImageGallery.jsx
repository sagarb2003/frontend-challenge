import React, { useState } from "react";

const ImageGallery = () => {
  const imageMap = [
    "https://images.freeimages.com/images/large-previews/f48/random-pics-1-1324287.jpg?fmt",
    "https://images.freeimages.com/images/large-previews/303/random-art-2-1542645.jpg?fmt",
    "https://media.istockphoto.com/id/495692241/photo/urban-crowd-from-above.webp?b=1&s=170667a&w=0&k=20&c=iYWcnsC4T9YciKwOdKi0BI74qtbO5pbbZNSV5Q8yVAI=",
  ];
  const [selectImage, setSelectImage] = useState("");
  function clickHandler(image) {
    setSelectImage(image);
  }
  return (
    <>
      <div style={{ display: "flex" ,justifyContent:'center'}}>
        {imageMap.map((m) => {
          return (
            <div>
              <img
                src={m}
                alt=""
                style={{ width: "300px" }}
                onClick={() => clickHandler(m)}
              />
            </div>
          );
        })}
      </div>
      {selectImage && (
        <div style={{textAlign:'center'}}>
          <h1>Selected Image</h1>
          <img src={selectImage} alt="" style={{ width: "300px" }} />
        </div>
      )}
    </>
  );
};

export default ImageGallery;
