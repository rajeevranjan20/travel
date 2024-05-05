import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          Welcome to <b>Johar Jharkhand</b>, where adventure meets discovery! Explore the Jharkhand with our curated selection of unforgettable tours and travel experiences. Whether you're dreaming of ancient wonders, vibrant cultures, or breathtaking natural landscapes, we've got the perfect journey for you.
          Discover iconic landmarks, hidden gems, and immersive cultural experiences guided by knowledgeable local experts. From thrilling outdoor adventures to relaxing scenic getaways, our tours cater to every travel style and interest.


          </p>
          <br />
          <p>
          Embark on a journey of a lifetime with <b>Johar Jharkhand</b>. Book your next adventure today and create memories that will last a lifetime!"







          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
