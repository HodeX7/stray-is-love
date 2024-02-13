"use client";
import Button from "@/components/Button";
import { Image } from "antd";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";
import { useState } from "react";

const Card = () => {
  return (
    <div className="p-5">
      <h1>Meet Max!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.{" "}
      </p>
    </div>
  );
};

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

export default function Home() {
  return (
    <main className="flex flex-col w-screen">
      <section
        className="flex min-h-screen flex-col items-center justify-center p-24"
        style={{
          backgroundImage: "url('/kitten.jpeg')",
        }}
      >
        <h1 className="text-primary text-[8rem]">Stray is Love &lt;3 </h1>
        <p className="text-primary text-[2rem] text-center w-[50rem] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <Button text={"Explore More"} />
      </section>

      <section className="flex min-h-screen flex-col items-start justify-center p-24">
        <h1 className="text-primary text-[12rem]">Stories ...</h1>
        {/* <p className="text-primary text-[2rem] w-[50rem] mt-[-2rem]">Meet and experience the happiest stories!</p> */}

        <div className="flex flex-col">
          <Card />
        </div>

        <div className="mt-12 flex w-full z-0">
          <div className="w-1/2 flex justify-end mr-5 ">
            <Image src="/max.jpeg" height={500} alt="max" />
          </div>
          <div className="w-1/2">
            <h1 className="font-bold text-7xl">Meet Max!</h1>
            <p className="text-sm mt-6 mb-8">
              "Max, the Street Dog" is a heartwarming tale of resilience,
              friendship, and hope. Max, a scrappy street dog, navigates the
              bustling city streets with courage and determination, despite
              facing numerous challenges and obstacles along the way. Abandoned
              and alone, Max finds solace and companionship in unexpected
              places, forging deep connections with fellow strays and
              compassionate humans who show him kindness. Through Max's journey,
              the story explores themes of survival, loyalty, and the power of
              love to transcend adversity. Despite his rough exterior, Max
              possesses a gentle soul and an unwavering spirit, inspiring those
              around him to see the beauty and resilience in all creatures,
              regardless of their circumstances.
            </p>
            <div className="flex gap-5">
              <ArrowCircleLeft className="cursor-pointer" size={50} />
              <ArrowCircleRight className="cursor-pointer" size={50} />
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-primary text-[8rem] mb-12">
          Gallery of Happiness :)
        </h1>
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
    </main>
  );
}
