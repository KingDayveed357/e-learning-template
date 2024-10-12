import Image from "next/image";
import Navbar from './components/Navbar'
import { BsFillLightningChargeFill } from "react-icons/bs";
import { Button } from "./components/Button";
import  zapier  from "./assets/img/zapier.png"
import  spotify  from "./assets/img/spotify.png"
import  zoom  from "./assets/img/zoom.png"
import  amazon  from "./assets/img/amazon.png"
import  adobe  from "./assets/img/adobe.png"
import  notion  from "./assets/img/notion.png"
import  netflix  from "./assets/img/netflix.png"
import  video  from "./assets/img/video-img.png"
import  avatar1  from "./assets/img/avatar1.png"
import { CardWithNo, Features, PricingCard } from "./components/Card";
import { CardWithImage } from "./components/Card";
import { TestimonialCard } from "./components/Card";
import { HiCheck } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
     <Navbar/>
     <section className="hero-section h-[60vh] max-w-screen-md mx-auto  flex flex-col justify-center items-center">
     <h1 className="text-4xl p-3 flex bg-white justify-center items-center gap-3 font-semibold">
     <BsFillLightningChargeFill className="text-4xl p-2 rounded-md bg-[#FFF4E5]"/> <span className="text-[#FF9500] bg-white font-semibold"> Unlock</span> Your Creative Potential
     </h1>
     <p className="text-3xl my-5">with Online Design and Development Courses</p>
     <small className="text-lg ">Learn from Industry Experts and Enhance Your Skills.</small>

     <div className="buttons flex gap-5 mt-10"> 
      <Button text="Explore Courses" bgColor="orange" textColor="text-white" />
      <Button text="View Pricing" bgColor="bg-white" />
     </div>
     </section>

     <div className="max-w-screen-xl mx-auto px-8 py-6 justify-center bg-white flex ">
      <div className="border-r-[1px] flex justify-center p-5   bg-white "> 
      <Image src={zapier} 
      className="bg-white mx-12 "  
      quality={100}
      alt="zapier-logo" />
      </div>

      <div className="border-r-[1px] p-5 flex justify-center items-center bg-white "> 
      <Image src={spotify} 
      className="bg-white mx-12" 
      quality={100} 
      alt="spotify-logo" />
      </div>

      <div className="border-r-[1px]  text-center p-5 flex justify-center items-center bg-white "> 
      <Image src={zoom} 
      className="bg-white mx-12" 
      quality={100} 
      alt="zoom-logo" />
      </div>

      <div className="border-r-[1px] p-5 flex justify-center items-center bg-white "> 
      <Image src={amazon} 
      className="bg-white mx-12" 
      quality={100} 
      alt="amazon-logo" />
      </div>
     
      <div className="border-r-[1px] p-5 flex justify-center items-center bg-white "> 
      <Image src={adobe} 
      className="bg-white mx-12" 
      quality={100} 
      alt="adobe-logo" />
      </div>

      <div className="border-r-[1px] p-5 flex justify-center items-center bg-white "> 
      <Image src={notion} 
      className="bg-white mx-12" 
      quality={100} 
      alt="notion-logo" />
      </div>
      
      <div className=" p-5 flex justify-center items-center bg-white "> 
      <Image src={netflix} 
      className="bg-white mx-12" 
      quality={100} 
      alt="netflix-logo" />
      </div>
     </div>
 
    <div className="mx-auto max-w-screen-lg my-16">
     <Image src={video} alt="video" className="rounded-md"/>
    </div>

   
   
    <section className="container">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">Benefits</h1>
        <div className="flex justify-between">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim nostrum architecto voluptatem dolores pariatur <br/> qui recusandae ratione dicta exercitationem!</p>
        <Button bgColor="bg-white" text="View All"/>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-12 gap-5 ">
      <CardWithNo 
      number='01'
      cardTitle="Flexible Learning Schedule"
      cardBody="Fit your coursework around your exiting commitments and obligations"
       />

      <CardWithNo 
      number='02'
      cardTitle="Flexible Learning Schedule"
      cardBody="Fit your coursework around your exiting commitments and obligations"
       />

      <CardWithNo 
      number='03'
      cardTitle="Flexible Learning Schedule"
      cardBody="Fit your coursework around your exiting commitments and obligations"
       />

      <CardWithNo 
      number='04'
      cardTitle="Flexible Learning Schedule"
      cardBody="Fit your coursework around your exiting commitments and obligations"
       />

     <CardWithNo 
      number='05'
      cardTitle="Flexible Learning Schedule"
      cardBody="Fit your coursework around your exiting commitments and obligations"
       />

       
     <CardWithNo 
      number='06'
      cardTitle="Flexible Learning Schedule"
      cardBody="Fit your coursework around your exiting commitments and obligations"
       />
      </div>
    </section>


    <section className="container">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">Our Courses</h1>
        <div className="flex justify-between">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim nostrum architecto voluptatem dolores pariatur <br/> qui recusandae ratione dicta exercitationem!</p>
        <Button bgColor="bg-white" text="View All"/>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-12 gap-5 ">
      <CardWithImage
      image={video}
      courseCreator="John Smith"
      courseDuration="4 Weeks"
      courseLevel="Beginner"
      cardTitle="Web Design Fundamentals"
      cardBody="Learn the fundamentals of web design, including HTML, CSS, 
      and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
       />

      <CardWithImage
      image={video}
      courseCreator="Emily Johnson"
      courseDuration="6 Weeks"
      courseLevel="Intermediate"
      cardTitle="UI/UX Design"
      cardBody="Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). 
      Learn design principles, wireframing, prototyping, and usability testing techniques."
       />

      <CardWithImage
      image={video}
      courseCreator="David Brown"
      courseDuration="8 Weeks"
      courseLevel="Intermediate"
      cardTitle="Mobile App Development"
      cardBody="Dive into the world of mobile app development.
       Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
       />

       
      <CardWithImage
      image={video}
      courseCreator="Sarah Thompson"
      courseDuration="10 Weeks"
      courseLevel="Beginner"
      cardTitle="Graphic Design for Beginners"
      cardBody="Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. 
      Create visually stunning designs for print and digital media."
       />

      <CardWithImage
      image={video}
      courseCreator="Micheal Adams"
      courseDuration="10 Weeks"
      courseLevel="Intermediate"
      cardTitle="Front-End Web Development"
      cardBody="Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. 
      Build interactive and responsive websites."
       />

      <CardWithImage
      image={video}
      courseCreator="Jennifer Wilson"
      courseDuration="6 Weeks"
      courseLevel="Advance"
      cardTitle="Advanced JavaScript"
      cardBody="Take your JavaScript skills to the next level. Explore advanced concepts like closures, 
      prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence."
       />
      </div>
    </section>
    

    <section className="container">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold">Our Testimonials</h1>
        <div className="flex justify-between">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim nostrum architecto voluptatem dolores pariatur <br/> qui recusandae ratione dicta exercitationem!</p>
        <Button bgColor="bg-white" text="View All"/>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-12 gap-5 ">
       <TestimonialCard 
       clientName="Sarah L"
       avatar={avatar1}
       cardBody="The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive,
        and the interactive learning environment was engaging. I highly recommend it!" />

       <TestimonialCard 
       clientName="Sarah L"
       avatar={avatar1}
       cardBody="The UI/UX design course exceeded my expectations. The instructor's expertise and 
       practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!" />


      <TestimonialCard 
       clientName="Sarah L"
       avatar={avatar1}
       cardBody="The mobile app development course was fantastic! The step-by-step tutorials and hands-on
        projects helped me grasp the concepts easily. I'm now building my own app. Great course!" />

      <TestimonialCard 
       clientName="Sarah L"
       avatar={avatar1}
       cardBody="I enrolled in the graphic design course as a beginner, and it was the perfect starting point. 
       The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!" />
      </div>
    </section>


    <section className="container">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold">Our Pricing</h1>
        <div className="flex justify-between">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim nostrum architecto voluptatem dolores pariatur <br/> qui recusandae ratione dicta exercitationem!</p>
        
        <div className="flex gap-2 bg-white p-2 my-auto rounded-md">
        <Button bgColor="orange" textColor="text-white" text="Monthly"/>
        <Button  text="Yearly"/>
        </div>
       
        </div>
      </div>
      <div className="p-8 px-16 py-16 mt-12 grid grid-cols-2 gap-7 justify-center items-center bg-white rounded-md ">
      <PricingCard
      plan="Free Plan"
      amount="0"
      features={[
        { icon: <HiCheck />, text: "Access to selected free courses." },
        { icon: <HiCheck />, text: "Limited course materials and resources." },
        { icon: <HiCheck />, text: "Basic community support." },
        { icon: <HiCheck />, text: "No certification upon completion." },
        { icon: <HiCheck />, text: "Limited course materials and resources." },
        { icon: <RxCross2 />, text: "Access to exclusive Pro Plan community forums." },
        { icon: <RxCross2 />, text: "Early access to new courses and updates." },
      ]}
    />

          <PricingCard
      plan="Pro Plan"
      amount="79"
      features={[
        { icon: <HiCheck />, text: "Unlimited access to all courses." },
        { icon: <HiCheck />, text: "Limited course materials and resources." },
        { icon: <HiCheck />, text: "Limited course materials and resources." },
        { icon: <HiCheck />, text: "Limited course materials and resources." },
        { icon: <HiCheck />, text: "Ad-free experience." },
        { icon: <HiCheck />, text: "Limited course materials and resources." },
        { icon: <HiCheck />, text: "Limited course materials and resources." },
      ]}
    />
      </div>
    </section>

    <Footer />
    </>
  );
}
