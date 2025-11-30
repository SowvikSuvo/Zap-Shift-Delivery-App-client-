import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import riderImg from "../../assets/agent-pending.png";

const Rider = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  const inputVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    focus: { scale: 1.05, boxShadow: "0 0 10px rgba(52,211,153,0.6)" },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" },
  };
  return (
    <div className=" bg-gray-50 rounded-b-2xl p-8">
      <div className="mt-10 ">
        <h1 className="text-6xl font-extrabold text-teal-900 mb-3">
          Be a Rider
        </h1>
        <p className="text-gray-500 mb-8">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal <br /> packages to business shipments — we
          deliver on time, every time.
        </p>
      </div>
      <div className=" flex items-center justify-center ">
        <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden max-w-7xl w-full animate-fadeIn mt-10">
          {/* Form Section */}
          <div className="md:w-1/2 p-10 ">
            <p className="text-teal-700 font-extrabold text-3xl mb-8">
              Tell us about yourself
            </p>
            {submitted && (
              <div className="mb-5 text-green-600 font-semibold animate-pulse">
                Form submitted successfully!
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
              {/* Name & Age */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block mb-1 font-medium text-gray-700">
                    Name
                  </label>
                  <motion.input
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    variants={inputVariant}
                    initial="hidden"
                    animate="visible"
                    whileFocus="focus"
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-1 font-medium text-gray-700">
                    Age
                  </label>
                  <motion.input
                    {...register("age", { required: true, min: 18 })}
                    placeholder="Your Age"
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    variants={inputVariant}
                    initial="hidden"
                    animate="visible"
                    whileFocus="focus"
                    transition={{ duration: 0.3, delay: 0.05 }}
                  />
                </div>
              </div>

              {/* Email & District */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block mb-1 font-medium text-gray-700">
                    Email
                  </label>
                  <motion.input
                    {...register("email", { required: true })}
                    placeholder="Your Email"
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    variants={inputVariant}
                    initial="hidden"
                    animate="visible"
                    whileFocus="focus"
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-1 font-medium text-gray-700">
                    District
                  </label>
                  <motion.select
                    {...register("district", { required: true })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    variants={inputVariant}
                    initial="hidden"
                    animate="visible"
                    whileFocus="focus"
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    <option value="">Select your District</option>
                    <option value="Bagerhat">Bagerhat</option>
                    <option value="Bandarban">Bandarban</option>
                    <option value="Barguna">Barguna</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Bhola">Bhola</option>
                    <option value="Bogura">Bogura</option>
                    <option value="Brahmanbaria">Brahmanbaria</option>
                    <option value="Chandpur">Chandpur</option>
                    <option value="Chattogram">Chattogram</option>
                    <option value="Chuadanga">Chuadanga</option>
                    <option value="Comilla">Comilla</option>
                    <option value="Cox's Bazar">Cox's Bazar</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Dinajpur">Dinajpur</option>
                    <option value="Faridpur">Faridpur</option>
                    <option value="Feni">Feni</option>
                    <option value="Gaibandha">Gaibandha</option>
                    <option value="Gazipur">Gazipur</option>
                    <option value="Gopalganj">Gopalganj</option>
                    <option value="Habiganj">Habiganj</option>
                    <option value="Jamalpur">Jamalpur</option>
                    <option value="Jashore">Jashore</option>
                    <option value="Jhalokati">Jhalokati</option>
                    <option value="Jhenaidah">Jhenaidah</option>
                    <option value="Joypurhat">Joypurhat</option>
                    <option value="Khagrachhari">Khagrachhari</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Kishoreganj">Kishoreganj</option>
                    <option value="Kurigram">Kurigram</option>
                    <option value="Kushtia">Kushtia</option>
                    <option value="Lakshmipur">Lakshmipur</option>
                    <option value="Lalmonirhat">Lalmonirhat</option>
                    <option value="Madaripur">Madaripur</option>
                    <option value="Magura">Magura</option>
                    <option value="Manikganj">Manikganj</option>
                    <option value="Meherpur">Meherpur</option>
                    <option value="Moulvibazar">Moulvibazar</option>
                    <option value="Munshiganj">Munshiganj</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Naogaon">Naogaon</option>
                    <option value="Narail">Narail</option>
                    <option value="Narayanganj">Narayanganj</option>
                    <option value="Narsingdi">Narsingdi</option>
                    <option value="Natore">Natore</option>
                    <option value="Nawabganj">Nawabganj</option>
                    <option value="Netrokona">Netrokona</option>
                    <option value="Nilphamari">Nilphamari</option>
                    <option value="Noakhali">Noakhali</option>
                    <option value="Pabna">Pabna</option>
                    <option value="Panchagarh">Panchagarh</option>
                    <option value="Patuakhali">Patuakhali</option>
                    <option value="Pirojpur">Pirojpur</option>
                    <option value="Rajbari">Rajbari</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Rangamati">Rangamati</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Satkhira">Satkhira</option>
                    <option value="Shariatpur">Shariatpur</option>
                    <option value="Sherpur">Sherpur</option>
                    <option value="Sirajganj">Sirajganj</option>
                    <option value="Sunamganj">Sunamganj</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Tangail">Tangail</option>
                    <option value="Thakurgaon">Thakurgaon</option>
                  </motion.select>
                </div>
              </div>

              {/* NID & Contact */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block mb-1 font-medium text-gray-700">
                    NID No
                  </label>
                  <motion.input
                    {...register("nid", { required: true })}
                    placeholder="NID No"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    variants={inputVariant}
                    initial="hidden"
                    animate="visible"
                    whileFocus="focus"
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-1 font-medium text-gray-700">
                    Contact
                  </label>
                  <motion.input
                    {...register("contact", { required: true })}
                    placeholder="Contact"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    variants={inputVariant}
                    initial="hidden"
                    animate="visible"
                    whileFocus="focus"
                    transition={{ duration: 0.3, delay: 0.25 }}
                  />
                </div>
              </div>

              {/* Wirehouse */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Wire-house
                </label>
                <motion.select
                  {...register("wirehouse", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  variants={inputVariant}
                  initial="hidden"
                  animate="visible"
                  whileFocus="focus"
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <option value="">Select wire-house</option>
                  <option value="House A">House A</option>
                  <option value="House B">House B</option>
                </motion.select>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-primary rounded-lg text-black font-semibold"
                variants={buttonVariant}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ duration: 0.3, delay: 0.35 }}
              >
                Submit
              </motion.button>
            </form>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 relative bg-teal-50 flex items-center justify-center p-10">
            <img
              src={riderImg}
              alt="Rider"
              className="w-full h-auto animate-pulse"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rider;
