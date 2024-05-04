import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/paras.jpeg";
import Img2 from "../../assets/places/valley.jpg";
import Img3 from "../../assets/places/baba.webp";
import Img4 from "../../assets/places/bhadrakali.jpg";
import Img5 from "../../assets/places/jonha.jpg";
import Img6 from "../../assets/places/Netarhat.png";

const PlacesData = [
  {
    img: Img1,
    title: "Parasnath Temple",
    location: "Giridh",
    description: "Parasnath Temple, situated atop Parasnath Hill in Jharkhand, India, is one of the most revered Jain pilgrimage sites in the country.",
    price: 400,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Patratu Valley",
    location: "Ranchi",
    description:
      "Patratu Valley, located in the state of Jharkhand, India, is a picturesque destination renowned for its natural beauty, serene surroundings, and tranquil ambiance.",
    price: 200,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Baba Dham",
    location: "Deoghar",
    description:
      "The Deoghar Temple, also known as the Baba Baidyanath Dham or Baidyanath Jyotirlinga Temple, is one of the most sacred Hindu pilgrimage sites in India.",
    price: 600,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Maa Bhadrakali Temple",
    location: "Chatra",
    description: "The Maa Bhadrakali Temple is a revered Hindu shrine dedicated to Goddess Bhadrakali, a fierce and powerful manifestation of Goddess Kali.",
    price: 700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Jonha Fall",
    location: "Ranchi",
    description:
      "The Jonha Falls, also known as the Gautamdhara Falls, is a mesmerizing natural wonder located near Ranchi in the Indian state of Jharkhand.",
    price: 200,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Netarhat",
    location: "Latehar",
    description:
      "Netarhat, often referred to as the 'Queen of Chotanagpur Plateau', is a charming hill station located in the Latehar district of Jharkhand, India. ",
    price: 800,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
