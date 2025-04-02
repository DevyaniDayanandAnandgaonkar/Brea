import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css"; // Import CSS file

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "From Everyday Elegance to Party Glam – BREA’s Stunning Silver Earrings Collection",
      image: "/Blog1.jpeg",
      date: "March 28, 2025",
      content: "Hii Everyone I am Devyani Dayanand Anandgaonkar.",
    },
    {
      id: 2,
      title: "Sankrant Mahotsav 2025: Celebrating Culture, Empowering Artisans, and Brea Jewelry’s Stellar Showcase in Satara",
      image: "/Blog2.jpeg",
      date: "March 28, 2025",
      content: "This event highlights the beauty of cultural celebrations and artisan work.",
    },
    {
      id: 3,
      title: "The Spirit of Giving: Gifts That Make Memories with Brea",
      image: "/Blog3.jpg",
      date: "March 28, 2025",
      content: "Gift ideas that make meaningful memories with Brea jewelry.",
    },
  ];

  return (
    <div className="blog-wrapper">
      {/* <h1>Blog List</h1> */}
      <div className="blogs-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>Published on: {post.date}</p>
            <p>{post.content}</p>
            <Link to={`/blog/${post.id}`}>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
