import Button from "@/components/Button";

const Card = () => {
  return (
    <div className="p-5">
      <h1>Meet Max!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col w-screen">
      <section className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-primary text-[12rem]">Stray is Love</h1>
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
    </main>
  );
}
