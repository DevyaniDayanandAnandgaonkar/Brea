import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaYoutube, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaUserGroup, FaMagnifyingGlass, FaHeart, FaCartShopping 
} from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";



const Header = () => {
    const navigate = useNavigate();

const [dropDown, setDropDown] = useState(false);

function handleClick() {
    navigate("/ContactUs");
}

const categoriesDropdown = [
  { id: 1, title: "Mangalsutra", path: "/Mangalsutra", cName: "navSubItems" },
  { id: 2, title: "Chain-Pendants", path: "/ChainPendants", cName: "navSubItems" },
  { id: 3, title: "Tops", path: "/Tops", cName: "navSubItems" }
  ];

return (
  <div>
    <nav className="header">
    <div className="topNav">
      <div className="top-left topNav-top-left-button" >
          <p>Free shipping on all orders above Rs. 499</p>
          <button onClick={handleClick} >Enquiry</button>
      </div>
      <div className="top-Right">
          <div className="rightInfo">
            <li><FaFacebookF /></li>
            <li><FaTwitter /></li>
            <li><FaLinkedinIn /></li>
            <li><FaInstagram /></li>
            <li><FaYoutube /></li>
          </div>
          <div className="myAcc">
            <span><FaUserGroup /></span><h3>My Account</h3>
          </div>
        </div>
      </div>

        <div className="midNav">
          <div className="leftInfo">
            <div className="leftInfo-sub LFborder"><h3>Call Us:</h3><p>+91 88244 66669</p></div>
            <div className="leftInfo-sub"><h3>Locations:</h3><p>Satara | Karad</p></div>
          </div>

          <div className="Logo">
            <Link to="/"><img id="header-logo" src="./BreaLogo.png" alt="Logo" /></Link>
          </div>

          <div className="new-icons">
            <li><FaMagnifyingGlass /></li>
            <li><FaHeart /></li>
            <li><FaCartShopping /></li>
          </div>
        </div>

        {/*  Menu Section */}
        <div className="bottomMenu">
        <li className="list-menu" id="newLi-1" onClick={() => setDropDown(!dropDown)} >
        Categories <MdArrowDropDown id="dropDownIcon"/>
          </li>

          {dropDown && ( 
            <ul className="categoriesSubMenu">
              {categoriesDropdown.map((item) => (
                <li key={item.id}>
                  <Link to={item.path} className={item.cName} onClick={() => setDropDown(false)}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* <li className="list-menu"><Link to="/" id="newLi-1">Home</Link></li>
          <li className="list-menu"><Link to="/Mangalsutra" id="newLi-2">Mangalsutra</Link></li>
          <li className="list-menu"><Link to="/ChainPendants" id="newLi-3">Chain Pendants</Link></li>
          <li className="list-menu noBorder"><Link to="/Tops" id="newLi-4">Tops</Link></li> */}

        <li className="list-menu"><Link to="/BestOfBrea" id="newLi-2">Best of Brea</Link></li>
        <li className="list-menu"><Link to="/LatestCollection" id="newLi-3">Latest Collection</Link></li>
        <li className="list-menu noBorder"><Link to="/Gifting" id="newLi-4">Gifting</Link></li>
     
        


        </div>
      </nav>
    </div>
  );
};
export default Header