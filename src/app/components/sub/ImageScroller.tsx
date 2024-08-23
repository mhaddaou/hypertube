import { useState } from 'react';
import Image from 'next/image';
import { HeroFilms } from '@/app/Types/Interfaces/Interfaces';

const ImageScroller = ({ images } : {images : HeroFilms[]}) => {
  const [imageList, setImageList] = useState(images);
  const [selectedImageId, setSelectedImageId] = useState(4);

  const handleImageClick = (id : number) => {
    // const updated = imageList.find((item) => selectedImageId === item.id);
    const index = imageList.findIndex((item) => item.id === selectedImageId);
    if(index!== -1){
      imageList[index]
    }
    
    const updatedList = [...imageList];
    const removedImage = updatedList.shift(); // Remove the first image
    if(removedImage)
    updatedList.push(removedImage); 
    

   
    const imageListElement = document.querySelector('.imageList');
    if(imageListElement){
      imageListElement.classList.add('animate-slide');
      setTimeout(() => {
        imageListElement.classList.remove('animate-slide');
        
      }, 1450);
    }
    
    setTimeout(() =>{
      setImageList(updatedList);
    }, 1450)
  };

  return (
    <div className=" whitespace-nowrap relative ">
      <div className="flex transition-transform imageList duration-300 relative gap-5 z-0">
        {imageList.map((item, index) => (
          <div
            key={item.id} 
            className={`relative w-[300px] min-w-[300px] max-w-[300px]  h-[400px]  inline-block   cursor-pointer ${item.selected ? 'scale-110' : ''}`}
            onClick={() => handleImageClick(item.id)}
          >
            <div className={`absolute w-full h-full flex-1 ${item.selected ? '' : 'bg-black/50'} z-10 rounded-xl`}>

            </div>
            <Image
              src={item.image}
              alt={`Image ${index}`}
              className='rounded-xl'
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
