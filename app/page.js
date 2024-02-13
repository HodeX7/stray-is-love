import Button from "@/components/Button";

const Card = () => {
  return (
    <div className="p-5">
      <h1>Meet Max!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </div>
  )
}

const GalleryCard = ({image}) => {
  return (
    <div className="cursor-pointer w-64 h-64 m-4 overflow-hidden transition-transform transform-gpu hover:scale-105">
      <img src={image} alt="Card" className="w-full h-full object-cover" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col w-screen">
      <section className="flex min-h-screen flex-col items-center justify-center p-24" style={{
        backgroundImage: "url('/kitten.jpeg')"
      }}>
        <h1 className="text-primary text-[8rem]">Stray is Love &lt;3 </h1>
        <p className="text-primary text-[2rem] text-center w-[50rem] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <Button text={"Explore More"} />
      </section>

      <section className="flex min-h-screen flex-col items-start justify-center p-24">
        <h1 className="text-primary text-[12rem]">Stories ...</h1>
        {/* <p className="text-primary text-[2rem] w-[50rem] mt-[-2rem]">Meet and experience the happiest stories!</p> */}

        <div className="flex flex-col">
          <Card />
        </div>
      </section>

      <section className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-primary text-[8rem] mb-12">Gallery of Happiness :)</h1>
        {/* <p className="text-primary text-[2rem] w-[50rem] mt-[-2rem]">Meet and experience the happiest stories!</p> */}

        <div className="flex flex-col items-center">
          <div className="flex justify-center mb-10">
            <GalleryCard image="image1.jpg" />
            <GalleryCard image="image2.jpg" />
            <GalleryCard image="image3.jpg" />
          </div>
          <div className="flex justify-center">
            <GalleryCard image="image4.jpg" />
            <GalleryCard image="image5.jpg" />
            <GalleryCard image="image6.jpg" />
          </div>
        </div>
      </section>
    </main>
  );
}
