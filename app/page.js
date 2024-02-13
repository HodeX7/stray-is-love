import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-primary text-[12rem]">Stray is Love</h1>
        <p className="text-primary text-[2rem] text-center w-[50rem] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <Button text={"Explore More"} />
      </section>
      <section className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-primary text-[12rem]">Stray is Love</h1>
        <p className="text-primary text-[2rem] text-center w-[50rem] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <Button text={"Explore More"} />
      </section>
    </>
  );
}
