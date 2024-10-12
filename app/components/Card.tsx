import React from "react";
import { Button } from "./Button";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { CardProps, cardWithImage, testimonialCardProps, pricingCardProps, featuresProps } from "../types/cardTypes";

const CardWithNo: React.FC<CardProps> = ({ cardTitle, cardBody, number }) => {
  return (
    <div className="p-5 px-10 rounded-lg py-8 flex flex-col gap-4 bg-white">
      <p className="text-6xl flex justify-end bg-transparent font-bold font-customFont">{number}</p>
      <div className="flex flex-col gap-2 my-5 bg-white">
        <p className="font-semibold bg-white">{cardTitle}</p>
        <p className="bg-white">{cardBody}</p>
      </div>
      <div className="bg-white flex justify-end">
        <Button
          text={<GoArrowUpRight className="text-orange-500 text-xl bg-transparent" />}
          bgColor="bg-[#FCFCFD]"
          border="border-[1px] h-12"
        />
      </div>
    </div>
  );
};

const CardWithImage: React.FC<cardWithImage> = ({ cardTitle, cardBody, image, courseCreator, courseDuration, courseLevel }) => {
  return (
    <div className="p-5 px-10 rounded-lg py-8 flex flex-col gap-4 bg-white">
      <Image src={image} alt="card-img" className="rounded-md" />
      <div className="flex justify-between my-auto bg-white">
        <div className="buttons bg-white flex gap-3">
          <Button border="border-[1px]" text={courseDuration} />
          <Button border="border-[1px]" text={courseLevel} />
        </div>
        <p className="bg-white my-auto font-semibold">By {courseCreator}</p>
      </div>
      <div className="flex flex-col gap-2 my-5 bg-white">
        <p className="font-bold text-xl bg-white">{cardTitle}</p>
        <p className="bg-white">{cardBody}</p>
      </div>
      <div className="bg-white flex">
        <Button
          text="Get it Now"
          bgColor="w-full bg-[#F7F7F8] font-semibold"
        />
      </div>
    </div>
  );
};

const TestimonialCard: React.FC<testimonialCardProps> = ({ clientName, cardBody, avatar }) => {
  return (
    <div className="rounded-xl flex flex-col gap-4 bg-white">
      <div className="flex flex-col pt-8 pb-5 gap-2 px-8 bg-white">
        <p className="bg-transparent">{cardBody}</p>
      </div>
      <div className="bg-[#FCFCFD] border-t-[1px]">
        <div className="flex justify-between bg-[#FCFCFD] px-8 p-5">
          <div className="flex gap-3 bg-transparent">
            <div id="tooltip-roberta" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              {clientName}
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <Image data-tooltip-target={clientName} quality={100} className="w-12 h-10 rounded" src={avatar} alt="avatar" />
            <p className="my-auto bg-transparent font-semibold">{clientName}</p>
          </div>
          <Button
            text="Read Full Story"
            bgColor="bg-[#F7F7F8]"
          />
        </div>
      </div>
    </div>
  );
};
const PricingCard: React.FC<PricingCardProps> = ({ plan, amount, features }) => {
    return (
      <div className="p-5 bg-[#FCFCFD] border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <Button
          text={plan}
          bgColor="w-full bg-[#FFF9F0]"
          border="border-[1px] border-[#FFEACC]"
        />
        <div className="flex items-baseline text-gray-900 bg-transparent text-center justify-center font-customFont mt-5 dark:text-white">
          <span className="text-5xl bg-transparent font-extrabold tracking-tight">
            ${amount}
          </span>
          <span className="ms-1 text-xl font-normal bg-transparent text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        <ul role="list" className="space-y-5 mt-7 bg-white p-12 rounded-t-md border-[1px]">
          <p className="bg-transparent text-center text-lg font-semibold">Available Features</p>
          {features.map((feature, index) => (
            <Features key={index} icon={feature.icon} features={feature.text} />
          ))}
        </ul>
        <Button
          text="Get Started"
          bgColor="w-full orange font-semibold rounded-b-md rounded-none"
          textColor="text-white"
        />
      </div>
    );
  };
  


const Features: React.FC<FeaturesProps> = ({ icon, features }) => {
    return (
      <li className="flex items-center p-2 bg-transparent border-[1px] rounded-md">
        {/* Use React.cloneElement to pass the className to the icon */}
        {React.cloneElement(icon as React.ReactElement, {
          className: "rounded-md bg-[#FFF9F0] p-1 text-2xl font-light",
        })}
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 bg-transparent">
          {features}
        </span>
      </li>
    );
  };
  
  
  

export { CardWithNo, CardWithImage, TestimonialCard, PricingCard, Features };
