import React from 'react'
import { useParams } from 'react-router-dom'

const SingleBlogDisplay = () => {
    const{id}= useParams();

    const posts = [
        {
          id: 1,
          title: "From Everyday Elegance to Party Glam – BREA’s Stunning Silver Earrings Collection",
          image: "/Blog1.jpeg",
          date: "March 28, 2025",
            },

            {
          id: 2,
          title: "From Everyday Elegance to Party Glam – BREA’s Stunning Silver Earrings Collection",
          image: "/Blog2.jpeg",
          date: "March 28, 2025",
            },
        ];

            const blog = posts.find((post) => post.id === parseInt(id));
            // if (!blog) {
            //     return <h1>Blog Not Found</h1>;
            //   }
return (
<div className="BlogPage-Wrapper" >
<div className='blogImg_wrapo'>
<img src={blog.image} alt={blog.title} style={{ width: "100%", maxHeight: "400px" }} /></div>
<div className='blogh2_wrapo'>
<h1>{blog.title}</h1></div>
{/* <p>Published on: {blog.date}</p> */}

</div>
);

}
export default SingleBlogDisplay;