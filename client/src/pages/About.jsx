import React from "react";
import { useNavigate, Link } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 text-gray-800 py-16">
      {" "}
      {/* Updated padding here */}
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold mb-4">
          About Our Hotel Rentals
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Welcome to our premium hotel renting platform, where we strive to
          provide an unparalleled experience for every traveler. At the
          intersection of comfort, luxury, and convenience, our curated
          selection of accommodations ensures a memorable stay for all our
          guests.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          We understand that discerning travelers seek more than just a room;
          they seek an escape, an experience, and a home away from home. Our
          commitment to excellence is reflected in the meticulous curation of
          hotels, ensuring each property meets our high standards of quality and
          service.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Whether you're a business traveler in need of a seamless stay, a
          family looking for a comfortable retreat, or an adventurer seeking a
          unique experience, our platform offers a diverse range of options
          tailored to your needs.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          With user-friendly features, transparent information, and a dedication
          to customer satisfaction, we invite you to explore our platform and
          elevate your travel experience to new heights.
        </p>
        <div className="flex space-x-4">
          <Link to="/search">
            {" "}
            <button className="bg-slate-700 text-white py-3 px-6 rounded-full hover:bg-slate-600 transition duration-300 ease-in-out">
              Explore Stays
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
