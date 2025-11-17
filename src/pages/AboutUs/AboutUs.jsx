import React, { useState } from "react";

const AboutUs = () => {
  const [tab, setTab] = useState("story");

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 bg-base-100 rounded-xl shadow-lg my-15">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Us</h2>
      <p className=" mb-6 text-sm sm:text-base">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. <br /> From personal packages to business shipments — we deliver
        on time, every time.
      </p>

      <hr />

      {/* Tabs */}
      <div
        role="tablist"
        className="tabs tabs-bordered flex flex-wrap gap-2 sm:gap-4 mt-5"
      >
        <a
          role="tab"
          className={`tab text-sm sm:text-lg ${
            tab === "story" ? "tab-active text-primary font-semibold" : ""
          }`}
          onClick={() => setTab("story")}
        >
          Story
        </a>

        <a
          role="tab"
          className={`tab text-sm sm:text-lg ${
            tab === "mission" ? "tab-active text-primary font-semibold" : ""
          }`}
          onClick={() => setTab("mission")}
        >
          Mission
        </a>

        <a
          role="tab"
          className={`tab text-sm sm:text-lg ${
            tab === "success" ? "tab-active text-primary font-semibold" : ""
          }`}
          onClick={() => setTab("success")}
        >
          Success
        </a>

        <a
          role="tab"
          className={`tab text-sm sm:text-lg ${
            tab === "team" ? "tab-active text-primary font-semibold" : ""
          }`}
          onClick={() => setTab("team")}
        >
          Team & Others
        </a>
      </div>

      {/* Tab Content */}
      <div className="mt-6 text-gray-700 leading-relaxed text-sm sm:text-base">
        {tab === "story" && (
          <p>
            We started with a simple promise — to make parcel delivery fast,
            reliable, and stress-free. Over the years, our commitment to
            real-time tracking, efficient logistics, and customer-first service
            has made us a trusted partner for thousands. Whether it's a personal
            gift or a time-sensitive business delivery, we ensure it reaches its
            destination — on time, every time. We began with a simple yet
            powerful idea: making parcel delivery fast, reliable, and effortless
            for everyone. At a time when delivery solutions felt slow and
            uncertain, we saw an opportunity to build a service that puts
            customers first. What started with a small team and a few local
            deliveries quickly gained momentum as more people recognized our
            commitment to excellence.Our early challenges shaped who we are
            today. With limited resources but strong determination, we adopted
            technology and smarter workflows to improve accuracy and speed.
            Every successful delivery taught us something new, and every
            customer interaction pushed us to improve even further. We listened,
            learned, and evolved. Over the years, we expanded our services,
            enhanced our tracking system, and strengthened our logistics
            network. Today, we stand as a trusted delivery partner for thousands
            — not because we grew quickly, but because we stayed true to our
            promise: delivering every package with care, precision, and
            reliability. In the beginning, we faced numerous challenges — from
            limited manpower to technical limitations. But instead of stepping
            back, we used these obstacles as stepping stones. Every mistake
            became a lesson, every complaint became a direction for growth, and
            every positive review became motivation to keep moving forward. As
            our services expanded, so did our commitment to quality. We adopted
            modern tracking technology, improved our route planning, and built a
            customer support system that listens with attention and responds
            with action. Customers quickly recognized our reliability, and word
            of mouth became our strongest source of growth. Through
            perseverance, we transformed from a small local service into a
            trusted delivery partner. Our network spread, our services
            diversified, and our team grew stronger. Yet, our values remained
            the same — honesty, punctuality, and responsibility in every
            delivery we make. Today, our story continues to evolve, but our core
            purpose stays unchanged. We are still driven by the same passion and
            dedication we started with. Each new milestone reminds us of how far
            we’ve come, and every new customer inspires us to keep delivering
            excellence in everything we do.
          </p>
        )}

        {tab === "mission" && (
          <p>
            Our mission is to simplify the way people send and receive goods by
            combining technology with a customer-first mindset. We believe
            delivery should be predictable, transparent, and convenient — not a
            stressful part of your day. That’s why we focus on solutions that
            reduce waiting time, improve tracking visibility, and ensure safe
            handling. We are driven by the goal of making delivery accessible to
            everyone — individuals, small businesses, and large enterprises.
            Whether someone is sending a single parcel or managing thousands of
            shipments, our platform adapts to their needs. Innovation guides us,
            and efficiency motivates us to keep upgrading our system. Our
            mission also extends beyond business success. We aim to build
            long-term relationships through trust, communication, and consistent
            performance. Every improvement we make, every feature we release,
            and every delivery we complete is part of our ongoing effort to
            create the most reliable logistics experience possible. We are
            committed to offering solutions that adapt to the needs of
            individuals and businesses alike. Whether it’s a small personal
            parcel or a large commercial shipment, we ensure the same level of
            care, precision, and professionalism. Technology plays a central
            role in our mission. We continuously upgrade our platform, tracking
            systems, and logistics strategies to ensure accuracy and efficiency.
            Real-time updates, smart routing, and predictive delivery times are
            just a few ways we are making deliveries smarter and more reliable.
            Beyond innovation, we prioritize trust and communication. Our
            mission is not only to transport packages but to build long-term
            relationships. Every interaction with our customers is guided by
            respect, transparency, and a promise to always do better.
            Ultimately, we aim to become more than just a delivery service — we
            want to be a dependable partner in people’s daily lives. Our mission
            is to provide convenience, peace of mind, and a sense of confidence
            that their parcels are in safe hands.
          </p>
        )}

        {tab === "success" && (
          <p>
            Our success story is built on dedication and a relentless pursuit of
            excellence. From day one, we stayed committed to delivering quality
            service — even when it meant going the extra mile. Our on-time
            delivery rate, customer satisfaction metrics, and growing user base
            reflect the hard work of our entire team. As a company, we’ve
            embraced digital transformation in logistics. Our intelligent
            routing system, real-time tracking, and efficient delivery network
            have enabled us to handle thousands of shipments with accuracy and
            speed. These achievements did not come overnight — they came from
            continuous improvement and customer feedback. But success for us is
            not just about numbers. It’s about moments — the smile on a
            customer’s face, the trust of a business partner, and the
            satisfaction of knowing a package reached its destination safely.
            These moments inspire us to aim higher and redefine what great
            delivery service means. Our success is a reflection of our
            dedication and the trust our customers place in us. From a few
            deliveries per day to thousands of shipments across multiple
            locations, our journey is shaped by continual effort and an
            unbreakable commitment to quality. We have achieved consistent
            on-time delivery rates, earning the confidence of both individual
            senders and large businesses. This reliability became our identity —
            a promise we never compromise on, no matter the challenges.
            Innovation has also been a significant part of our success. Our use
            of advanced tracking, automated systems, and optimized logistics
            routes has allowed us to grow while maintaining high service
            standards. Every technological improvement brings us closer to
            perfection. But success is not just about numbers. It is found in
            the small moments — the relieved smile of a customer receiving an
            urgent package, the appreciation of a business owner who trusts our
            service, and the gratitude expressed by families separated by
            distance but connected through our deliveries.But success is not
            just about numbers. It is found in the small moments — the relieved
            smile of a customer receiving an urgent package, the appreciation of
            a business owner who trusts our service, and the gratitude expressed
            by families separated by distance but connected through our
            deliveries. Our achievements motivate us to aim even higher. We are
            continuously setting new benchmarks and striving to provide
            world-class service. Success for us is not an endpoint — it is a
            journey we walk every day with determination and pride.
          </p>
        )}

        {tab === "team" && (
          <p>
            Behind every smooth delivery stands a dedicated team working
            tirelessly to ensure excellence. Our workforce includes logistics
            specialists, customer support professionals, developers, dispatch
            coordinators, and delivery experts. Each member brings unique
            skills, perspectives, and passion to the table. We believe in
            teamwork, transparency, and collaboration. Our company culture
            encourages innovation, problem-solving, and continuous learning.
            When challenges arise, our team steps up — brainstorming solutions,
            optimizing processes, and supporting each other to achieve the best
            outcome. Beyond our team, we value our partners, drivers, suppliers,
            and community. They play a crucial role in shaping who we are and
            how we operate. Together, we work toward creating a delivery
            experience that is efficient, trustworthy, and meaningful for
            everyone involved. Behind our company is a strong team of passionate
            individuals who bring experience, creativity, and dedication to the
            table. Our employees work tirelessly to ensure each delivery is
            smooth, secure, and timely. They are the heart of our organization.
            Every member of our team plays a vital role — from developers and
            logistics managers to customer support and delivery personnel. Their
            combined efforts create a seamless and efficient process that
            customers can rely on. We believe in a work culture that encourages
            collaboration, learning, and innovation. Our team regularly engages
            in training and development to enhance their skills and deliver even
            better service. We support each other and grow together. Beyond
            internal teamwork, we value our external partners, suppliers, and
            service collaborators. They contribute significantly to our
            operations and help us provide a widespread, dependable delivery
            network. Most importantly, we acknowledge our customers — they are
            the reason we exist. Their feedback, trust, and continued support
            fuel our constant improvement. Together, with our team and
            community, we strive to build a service that stands out through
            quality, care, and commitment.
          </p>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
