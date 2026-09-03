import Image from "next/image";


export default function Banner () {
  return (
    <div className="block p-[5px] m-0 h-[40vw] w-screen relative bg-cover bg-center">
      <Image src={'/img/Cover.jpg'} alt="Cover" fill={true} objectFit="cover" priority/>
      <div className="relative top-[150px] z-20 text-center text-[rgb(252,237,237)]">
        <h1 style={{ fontSize: '40px' }}>where every event finds its venue</h1>
        <h3 style={{ fontSize: '18px' }}>Your dream event begins here. we provide a breathtaking backdrop for your special day. With elegant ballrooms, exquisite dining, and personalized service.</h3>
        <h3 style={{ fontSize: '18px' }}>we ensure every detail is nothing short of perfect. Let’s create unforgettable moments together.</h3>
      </div>
    </div>
  );
}