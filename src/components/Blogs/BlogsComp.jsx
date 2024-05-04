import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/paras.jpeg";
import Img2 from "../../assets/places/valley.jpg";
import Img3 from "../../assets/places/Netarhat.png";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in Jharkhand",
    description:
      "As a devout follower of Hinduism, my visit to Parasnath Temple left an indelible mark on my soul. Situated atop the majestic Parasnath Hill, the temple exudes an aura of spirituality and serenity that is truly unmatched. As I ascended the hill, surrounded by lush greenery and pristine air, I felt a sense of calm wash over me, preparing me for the divine experience that awaited at the temple's summit.",
    author: "Hrithik Choudhary",
    date: "April 22, 2024",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in Jharkhand",
    description:
      "The journey to Patratu Valley itself was a scenic adventure, with winding roads offering glimpses of the picturesque countryside and quaint villages nestled amidst verdant landscapes. As I approached the valley, the sight of the expansive Patratu Reservoir shimmering in the sunlight took my breath away, its tranquil waters mirroring the azure skies above.",
    author: "Tahzeeb Sana",
    date: "April 02, 2024",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Jharkhand",
    description:
      "Exploring the area's scenic trails and pathways was a delightful adventure, with each step revealing new wonders of nature – from vibrant wildflowers blooming along the hillsides to the melodious chirping of birds hidden amidst the foliage. The cool, crisp air invigorated my senses, and the gentle rustle of leaves in the breeze provided a soothing backdrop to my journey of exploration.",
    author: "Someone",
    date: "April 12, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
