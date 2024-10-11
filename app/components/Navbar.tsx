import logo from "../assets/img/shape-17.png"
import Image from 'next/image'


export default function Navbar () {
  return (
    <>
    
    <div className="mx-auto  max-w-screen-xl flex justify-between">
      <div className="mx-2 flex my-5">
        <div className="p-3">
        <Image
      src={logo}
      className="w-7 h-7 p-1 bg-yellow-400 rounded-md "
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
    </div>
    </>
  )
}