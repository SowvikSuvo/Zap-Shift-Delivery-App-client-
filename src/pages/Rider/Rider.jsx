import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { motion } from "framer-motion";
import riderImg from "../../assets/agent-pending.png";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const riderRegion = useWatch({ control, name: "region" });

  const [submitted, setSubmitted] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:
            " Your application has been submitted. We will reach out you in 15 days",
          showConfirmButton: false,
          timer: 2000,
        });
        reset();
      }
    });
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
                    Your Name
                  </label>
                  <motion.input
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    defaultValue={user?.displayName}
                    type="text"
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
                    Your Age
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
              <div className="w-1/2">
                <label className="block mb-1 font-medium text-gray-700">
                  Your Region
                </label>
                <motion.select
                  {...register("region", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  defaultValue="Pick a region"
                  variants={inputVariant}
                  initial="hidden"
                  animate="visible"
                  whileFocus="focus"
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  <option disabled={true}>Pick a region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </motion.select>
              </div>

              <div className="w-1/2">
                <label className="block mb-1 font-medium text-gray-700">
                  Your District
                </label>
                <motion.select
                  {...register("district", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  defaultValue=""
                  variants={inputVariant}
                  initial="hidden"
                  animate="visible"
                  whileFocus="focus"
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  <option value="" disabled>
                    Pick a District
                  </option>
                  {districtsByRegion(riderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </motion.select>
              </div>
              <div className="">
                <label className="block mb-1 font-medium text-gray-700">
                  Your Email
                </label>
                <motion.input
                  {...register("email", { required: true })}
                  placeholder="Your Email"
                  type="email"
                  defaultValue={user?.email}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  variants={inputVariant}
                  initial="hidden"
                  animate="visible"
                  whileFocus="focus"
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium text-gray-700">
                  Contact
                </label>
                <motion.input
                  {...register("contact", { required: true })}
                  placeholder="Contact"
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  variants={inputVariant}
                  initial="hidden"
                  animate="visible"
                  whileFocus="focus"
                  transition={{ duration: 0.3, delay: 0.25 }}
                />
              </div>

              {/* NID & Contact */}
              <div className="">
                <label className="block mb-1 font-medium text-gray-700">
                  NID No
                </label>
                <motion.input
                  {...register("nid", { required: true })}
                  placeholder="NID No"
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  variants={inputVariant}
                  initial="hidden"
                  animate="visible"
                  whileFocus="focus"
                  transition={{ duration: 0.3, delay: 0.2 }}
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium text-gray-700">
                  Driving Licence Number
                </label>
                <motion.input
                  {...register("drivingLicense", { required: true })}
                  placeholder="Driving License Number"
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  variants={inputVariant}
                  initial="hidden"
                  animate="visible"
                  whileFocus="focus"
                  transition={{ duration: 0.3, delay: 0.2 }}
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium text-gray-700">
                  Bike Registration Number
                </label>
                <motion.input
                  {...register("bikeRegNum", { required: true })}
                  placeholder="Bike Registration Number"
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  variants={inputVariant}
                  initial="hidden"
                  animate="visible"
                  whileFocus="focus"
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium text-gray-700">
                  Bike Brand Model & Year
                </label>
                <motion.input
                  {...register("bikeInfo", { required: true })}
                  placeholder="Bike Brand Model & Year"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  variants={inputVariant}
                  initial="hidden"
                  animate="visible"
                  whileFocus="focus"
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Wirehouse */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Which wire-house you want to work?
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
              <div className="">
                <label className="block mb-1 font-medium text-gray-700">
                  Tell Us about Yourself
                </label>
                <motion.textarea
                  {...register("riderBio", { required: true })}
                  placeholder="Tell Us about Yourself"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none h-28"
                  variants={inputVariant}
                  initial="hidden"
                  animate="visible"
                  whileFocus="focus"
                  transition={{ duration: 0.3 }}
                />
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
                Apply as a Rider
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
