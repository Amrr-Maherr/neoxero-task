import BgImage from "../Assets/rachit-tank-2cFZ_FB08UM-unsplash.jpg";

export default function Offers() {
  return (
    <section
      className="h-[50dvh] bg-cover bg-center my-5 flex items-center justify-start p-5"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
        <div className="flex items-center justify-center gap-10">
              <h1 className="text-md  xl:text-4xl">SHOP AND <span className="font-bold">SAVE BIG </span> <br /> ON HOTTEST TABLETS</h1>
              <div className="p-2 xl:p-5 bg-yellow-300 rounded-full text-center">STARTING AT <br/> <span className="font-extrabold">$79</span></div>
        </div>
    </section>
  );
}
