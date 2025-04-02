import React from "react";
import { useParams } from "react-router-dom";
import SingleBlogDisplay from "./SigngleBlogDisplay";
import "./Blog.css"

const BlogPage = () => {
  const { id } = useParams();

  // Static blog data
  const posts = [
    {
      id: 1,
      title: "From Everyday Elegance to Party Glam – BREA’s Stunning Silver Earrings Collection",
      image: "/Blog1.jpeg",
      date: "March 28, 2025",
      content: "This event highlights the beauty of cultural celebrations and artisan work.",
        },
    {
      id: 2,
      title: "Sankrant Mahotsav 2025: Celebrating Culture, Empowering Artisans, and Brea Jewelry’s Stellar Showcase in Satara",
      image: "/Blog2.jpeg",
      date: "March 28, 2025",
      content: "This event highlights the beauty of cultural celebrations and artisan work.",
    },
    // {
    //   id: 3,
    //   title: "The Spirit of Giving: Gifts That Make Memories with Brea",
    //   image: "/Blog3.jpg",
    //   date: "March 28, 2025",
    //   content: "Gift ideas that make meaningful memories with Brea jewelry.",
    // },
  ];

  // Find the blog post by ID
  const blog = posts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }

  return (
    <div className="BlogPage-Wrapper" >
    
      <img src={blog.image} alt={blog.title} style={{ width: "100%", maxHeight: "400px" }} />
      <h1>{blog.title}</h1>
      <p>Published on: {blog.date}</p>
      {/* <p>{blog.content}</p> */}
      <div className='blogtest_wrapo'>
<h4>Introduction:</h4><br />
<p>Earrings are more than just an accessory; they are an expression of personality and style. And when it comes to silver earrings,<br></br>

they add an extra charm with their timeless elegance. Whether it’s delicate silver studs for everyday wear, stylish bugadi for a traditional touch,

or statement pieces for parties, silver jewellery seamlessly blends with any outfit.

At BREA, we bring you a collection that complements every look, making sure you shine effortlessly.</p><br /><br />
<h4>Why Earrings Are the Perfect Accessory?</h4><br />
<p>No matter the occasion—be it a party, a casual dinner, or a workday—earrings complete your look. Here’s why they are a must-have:</p><br /><br />
<p><h4>Versatility: </h4>Earrings come in endless styles, shapes, and sizes, making them easy to style for any event.</p><br /><br />
<p><h4>Enhances Beauty</h4> A well-chosen pair of earrings draws attention to the face, highlights your hairstyle, and adds a touch of sophistication.
</p><br /><br />
<p><h4>Timeless Appeal: </h4>Earrings have remained a fashion staple throughout history, never going out of style.</p><br /><br />
<p><h4>Self-Expression: </h4>Whether minimal or bold, earrings allow you to express your personality and upgrade your style instantly.</p><br /><br />
<h4>Earrings in Indian Fashion: </h4><br />
<p>Indian culture holds earrings in high regard, making them much more than just an ornament.</p><br /><br />
<p><h4>Cultural Heritage: </h4>Earrings symbolize various traditions and heritage, deeply rooted in Indian fashion.</p><br /><br />
<p><h4>Sign of Marriage:</h4> In many regions, elaborate earrings signify a woman’s marital status.

Religious Importance: Earrings play a key role in religious ceremonies, symbolizing devotion and spirituality.</p><br /><br />
 <p><h4>Completing the Look:</h4>No traditional attire is truly complete without a pair of earrings that enhance the overall ensemble.</p><br /><br />
<h4>BREA’s Exclusive Silver Earrings Collection:</h4><br />
<p>At BREA, we blend tradition with modern elegance to craft stunning 92.5% silver earrings. Our collection is one of India’s largest, offering everything from minimal studs to intricate bugadi designs.</p><br /><br />
<p><h4>Hoops: </h4>Classic and effortless, hoops are perfect for everyday wear or a casual dinner.</p><br /><br />
<p><h4>Sui Dhaaga: </h4>Inspired by traditional sewing tools, these earrings add a delicate and unique charm.</p><br />
<p> <h4>Bugadi:</h4> A hallmark of Maharashtrian jewellery, bugadi earrings follow the curve of the ear with intricate designs.</p><br /><br />
<h4>Conclusion: </h4> <br />
<p>Earrings are more than jewellery; they are a reflection of history, tradition, and personal style.</p><br />
<p>At BREA, we are committed to crafting pieces that preserve cultural heritage while adding a modern touch. Explore our 92.5% silver earring collection and find the perfect pair to complement your style!</p>
</div>
    </div>
  );
};

export default BlogPage;
