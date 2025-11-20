import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-10">
      <h1 className="text-6xl font-extrabold text-gray-900 mb-8">
        Send A Parcel
      </h1>

      <p className="text-3xl font-extrabold mb-4">Enter your parcel details</p>

      <div className="w-full h-px bg-gray-300 my-6"></div>

      {/* Document Selector */}
      <form onSubmit={handleSubmit(handleSendParcel)}>
        <div className="flex items-center gap-6 mb-5 mt-8 ml-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              defaultChecked
            />
            <span className="font-semibold">Document</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              value="non-document"
              type="radio"
              {...register("parcelType")}
            />
            <span className="font-semibold">Non-Document</span>
          </label>
        </div>

        {/* Parcel Info name/weight*/}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div>
              <label className="block mb-1 font-medium">Parcel Name</label>
              <input
                type="text"
                {...register("parcelName")}
                placeholder="Parcel Name"
                className="border rounded-lg p-3 w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Parcel Weight (KG)
              </label>
              <input
                type="number"
                {...register("parcelWeight")}
                placeholder="Parcel Weight (KG)"
                className="border rounded-lg p-3 w-full"
              />
            </div>
          </div>

          <div className="w-full h-px bg-gray-300 my-6"></div>

          {/* Sender & Receiver */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Sender */}
            <div>
              <h2 className="text-xl font-extrabold mb-4">Sender Details</h2>

              <div className="flex flex-col gap-5">
                <div>
                  <label className="block mb-1 font-medium">Parcel Name</label>
                  <input
                    type="text"
                    {...register("parcelName")}
                    placeholder="Parcel Name"
                    className="border rounded-lg p-3 w-full"
                  />
                  <div className="mt-5">
                    <label className="block mb-1 font-medium">
                      Sender Email
                    </label>
                    <input
                      type="email"
                      {...register("senderEmail")}
                      placeholder="Sender Email"
                      className="border rounded-lg p-3 w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 font-medium">Address</label>
                  <input
                    type="text"
                    {...register("senderAddress")}
                    placeholder="Address"
                    className="border rounded-lg p-3 w-full"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">
                    Sender Phone No
                  </label>
                  <input
                    type="text"
                    {...register("senderPhone")}
                    placeholder="Sender Phone No"
                    className="border rounded-lg p-3 w-full"
                  />
                </div>

                {/* sender region */}
                <div>
                  <label className="block mb-1 font-medium">
                    Sender Regions
                  </label>
                  <select
                    defaultValue="Pick a region"
                    type="select"
                    {...register("senderRegion")}
                    className=" border rounded-lg p-3 w-full "
                  >
                    <option disabled={true}>Pick a region</option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                {/* sender districts */}
                <div>
                  <label className="block mb-1 font-medium">
                    Sender Districts
                  </label>
                  <select
                    defaultValue="Pick a districts"
                    type="select"
                    {...register("senderDistrict")}
                    className=" border rounded-lg p-3 w-full "
                  >
                    <option disabled={true}>Pick a District</option>
                    {districtsByRegion(senderRegion).map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-1 font-medium">
                    Pickup Instruction
                  </label>
                  <textarea
                    placeholder="Pickup Instruction"
                    {...register("senderPickupInstruction")}
                    className="border rounded-lg p-3 w-full h-24"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Receiver */}
            <div>
              <h2 className="text-xl font-extrabold  mb-4">Receiver Details</h2>

              <div className="flex flex-col gap-5">
                <div>
                  <label className="block mb-1 font-medium">
                    Receiver Name
                  </label>
                  <input
                    type="text"
                    {...register("ReceiverName")}
                    placeholder="Receiver Name"
                    className="border rounded-lg p-3 w-full"
                  />
                  <div className="mt-5">
                    <label className="block mb-1 font-medium">
                      Receiver Email
                    </label>
                    <input
                      type="email"
                      {...register("ReceiverEmail")}
                      placeholder="Receiver Email"
                      className="border rounded-lg p-3 w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 font-medium">
                    Receiver Address
                  </label>
                  <input
                    type="text"
                    {...register("ReceiverAddress")}
                    placeholder="Address"
                    className="border rounded-lg p-3 w-full"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">
                    Receiver Contact No
                  </label>
                  <input
                    type="text"
                    {...register("ReceiverContactNo")}
                    placeholder="Receiver Contact No"
                    className="border rounded-lg p-3 w-full"
                  />
                </div>

                {/* Receiver region */}
                <div>
                  <label className="block mb-1 font-medium">
                    Receiver Regions
                  </label>
                  <select
                    defaultValue="Pick a Regions"
                    type="select"
                    {...register("receiverRegion")}
                    className=" border rounded-lg p-3 w-full "
                  >
                    <option disabled={true}>Pick a region</option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Receiver districts */}
                <div>
                  <label className="block mb-1 font-medium">
                    Receiver District
                  </label>
                  <select
                    defaultValue="Pick a district"
                    type="select"
                    {...register("ReceiverDistrict")}
                    className=" border rounded-lg p-3 w-full "
                  >
                    <option disabled={true}>Pick a District</option>
                    {districtsByRegion(receiverRegion).map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-1 font-medium">
                    Delivery Instruction
                  </label>
                  <textarea
                    {...register("DeliveryInstruction")}
                    placeholder="Delivery Instruction"
                    className="border rounded-lg p-3 w-full h-24"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            * PickUp Time 4pm-7pm Approx.
          </p>

          <input
            type="submit"
            value="Proceed to Confirm Booking"
            className="mt-6 bg-primary  px-8 py-3 rounded-lg hover:bg-green-700 transition-all"
          />
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
