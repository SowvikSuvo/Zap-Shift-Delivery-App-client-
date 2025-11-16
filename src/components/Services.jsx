import {
  TruckIcon,
  GlobeAmericasIcon,
  ClipboardDocumentCheckIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  const services = [
    {
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours across major cities with fast and flexible options.",
      icon: <TruckIcon className="w-10 h-10 text-blue-600" />,
      bg: "bg-blue-100",
    },
    {
      title: "Nationwide Delivery",
      desc: "Fast home delivery anywhere nationwide within 48–72 hours.",
      icon: <GlobeAmericasIcon className="w-10 h-10 text-green-700" />,
      bg: "bg-green-200",
      highlight: true,
    },
    {
      title: "Fulfillment Solution",
      desc: "Inventory management, order processing, packaging, and delivery support.",
      icon: (
        <ClipboardDocumentCheckIcon className="w-10 h-10 text-purple-600" />
      ),
      bg: "bg-purple-100",
    },
    {
      title: "Cash on Delivery",
      desc: "Trusted COD service with full assurance and fast remittance.",
      icon: <BanknotesIcon className="w-10 h-10 text-orange-600" />,
      bg: "bg-orange-100",
    },
    {
      title: "Corporate Logistics Contract",
      desc: "Custom logistics contracts with warehouse & inventory support.",
      icon: <BuildingOffice2Icon className="w-10 h-10 text-indigo-600" />,
      bg: "bg-indigo-100",
    },
    {
      title: "Parcel Return",
      desc: "Easy return logistics for businesses and their customers.",
      icon: <ArrowUturnLeftIcon className="w-10 h-10 text-red-600" />,
      bg: "bg-red-100",
    },
  ];

  return (
    <section className="py-16 px-9 bg-[#03373D] rounded-2xl mt-25 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl  font-bold">Our Services</h2>
        <p className="  mt-2 mb-12">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br />
          business shipments — we deliver on time, every time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={` bg-white text-secondary
                card shadow-md hover:shadow-xl  hover:bg-primary hover:text-black border-gray-200  transition border
                
              `}
            >
              <div className="card-body items-center text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${service.bg}`}
                >
                  {service.icon}
                </div>
                <h3 className="card-title  font-semibold mt-4">
                  {service.title}
                </h3>
                <p className="">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
