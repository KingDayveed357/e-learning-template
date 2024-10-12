import logo from "../assets/img/shape-17.png"
import Image from 'next/image'


export default function Navbar () {
  return (
    <>
    <div className="my-4 p-2 orange max-w-[1450px] rounded-md flex justify-center items-center mx-auto">
    <p className="orange text-white">Free Courses 🌟 Sale Ends Soon, Get it Now → </p>
    </div>
    <header className="mx-auto  max-w-screen-xl flex justify-between">
      <div className="gap-5 flex mb-5">
        <div className="p-2">
      <Image
      src={logo}
      className="w-8 h-8 p-1 bg-[#FF9500] rounded-md"
      alt="Logo"
    />
      </div>
      
      <nav className="flex gap-5">
      <div className="">
      <p className="hover:bg-[#F1F1F3] p-3 rounded-md">Home</p>
      </div>

      <div className="">
      <p className="hover:bg-[#F1F1F3] p-3 rounded-md">About Us</p>
      </div>

      <div className="">
      <p className="hover:bg-[#F1F1F3] p-3 rounded-md">Courses</p>
      </div>

      <div className="">
      <p className="hover:bg-[#F1F1F3] p-3 rounded-md">Pricing</p>
      </div>

      <div className="">
      <p className="hover:bg-[#F1F1F3] p-3 rounded-md">Contact</p>
      </div>

      </nav>
      </div>
      <div className="nav-buttons justify-center items-center flex gap-5">
     <button>Sign Up</button>
     <button className="py-1 px-7 text-white rounded-md bg-[#FF9500] h-10"> Login </button>
      </div>
    </header>
    </>
  )
}