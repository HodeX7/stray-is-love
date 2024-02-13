"use client"

import React, { useState } from "react";

const GalleryCard = ({ image, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer w-64 h-64 m-4 overflow-hidden transition-transform transform-gpu hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt="Card" className="w-full h-full object-cover" />
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 transition-opacity">
          <span className="text-lg font-bold">{name}</span>
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-primary text-[8rem] mb-12">Gallery of Joy :)</h1>
        {/* <p className="text-primary text-[2rem] w-[50rem] mt-[-2rem]">Meet and experience the happiest stories!</p> */}

        <div className="flex flex-col items-center">
          <div className="flex justify-center mb-10">
            <GalleryCard image="image1.jpeg" name="Max" />
            <GalleryCard image="image2.jpeg" name="Tony" />
            <GalleryCard image="image3.jpeg" name="Coco" />
          </div>
          <div className="flex justify-center">
            <GalleryCard image="image4.jpeg" name="Dhruv" />
            <GalleryCard image="image5.jpeg" name="Akshar" />
            <GalleryCard image="image6.jpeg" name="Richa" />
          </div>
        </div>
      </section>
  );
};

export default Gallery;
