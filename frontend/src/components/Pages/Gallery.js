import React, { useState } from 'react'
import home1 from "../image/home1.png"
import home10 from "../image/home10.png"
import home11 from "../image/home11.png"
import home12 from "../image/home12.png"
import home13 from "../image/home13.png"
import home2 from "../image/home2.png"
import home3 from "../image/home3.png"
import home4 from "../image/home4.png"
import home6 from "../image/home6.png"
import home7 from "../image/home7.png"
import home8 from "../image/home8.png"
import home9 from "../image/home9.png"
import "../style/Gallery.css"

const images = [home1, home12, home3, home4, home6]; // Array of image imports

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

 
  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className='galery'>
        <p>#Some SnapShotBy</p>
        <h1>Swaru Villa</h1>
      </div>
      <hr className='hr1'/>

      <div className='galery-container'>
        <button className='left-arrow' onClick={prevImage}>&#8249;</button>
        <img src={images[currentIndex]} alt='' className='galery-img'/>
        <button className='right-arrow' onClick={nextImage}>&#8250;</button>
      </div>

      <div className='galery-1'>
        <img src={home1} alt='' onClick={() => openImage(home1)} />
        <img src={home2} alt='' onClick={() => openImage(home2)} />
        <img src={home3} alt='' onClick={() => openImage(home3)} />
        <img src={home4} alt='' onClick={() => openImage(home4)} />
      </div>
      <div className='galery-2'>
        <img src={home6} alt='' onClick={() => openImage(home6)} />
        <img src={home7} alt='' onClick={() => openImage(home7)} />
        <img src={home8} alt='' onClick={() => openImage(home8)} />
        <img src={home9} alt='' onClick={() => openImage(home9)} />
      </div>
      <div className='galery-3'>
        <img src={home10} alt='' onClick={() => openImage(home10)} />
        <img src={home11} alt='' onClick={() => openImage(home11)} />
        <img src={home12} alt='' onClick={() => openImage(home12)} />
        <img src={home13} alt='' onClick={() => openImage(home13)} />
      </div>

      {/* Modal for full-width image */}
      {selectedImage && (
        <div className='modal' onClick={closeModal}>
          <img src={selectedImage} alt='' className='modal-img' />
        </div>
      )}
    </>
  )
}

export default Gallery;
