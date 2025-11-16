// import {
//   FaTruckFast,
//   FaMoneyBillWave,
//   FaCloudUploadAlt,
//   FaBuilding,
// } from "react-icons/fa";

import { FaBuilding, FaCloudUploadAlt, FaMoneyBillWave } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaCloudUploadAlt className="text-4xl text-pink-600" />,
      title: "Easy Booking",
      desc: "Book your parcel in a few clicks with our quick and simple online system.",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-green-600" />,
      title: "Secure Payments",
      desc: "Choose your preferred payment method with full transparency and security.",
    },
    {
      icon: <FaTruckFast className="text-4xl text-blue-600 " />,
      title: "Fast Delivery",
      desc: "From personal packages to business shipments — we deliver reliably on time.",
    },
    {
      icon: <FaBuilding className="text-4xl text-slate-800 " />,
      title: "Corporate Services",
      desc: "Tailored logistics solutions for SMEs and large enterprises.",
    },
  ];

  return (
    <section className="bg-base-200 rounded-2xl py-12 px-5 mt-24">
      <h2 className="text-2xl md:text-3xl font-bold  mb-8 ">How it Works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white text-secondary p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 transition-all duration-300 text-center"
          >
            <div className="mb-4 flex justify-center items-center ">
              {step.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
