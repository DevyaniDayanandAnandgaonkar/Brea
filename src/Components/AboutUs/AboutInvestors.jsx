import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import Modal from "react-modal";


// Set root for accessibility
Modal.setAppElement("#root");


//-------------------------
    // Sample Team Data
    const teamMembers = [
        { id: 1, name: "Aavanindra Gursale", role: "Partner", bio: "Initiated in 1930 by Maruti Rao Dhondiba Gursale, the jewelry business thrives today, grounded in the timeless principles of purity, transparency, and trust, spanning three generations. Embracing evolution, the third generation steers this legacy, upholding the same ethos. Introducing innovation to conventional methods, Mr. Ramakant Maruti Rao Gursale transitioned the business, adapting it for the new era. Brea emerges as an online platform specializing in silver jewelry, soon expanding to include lightweight diamond pieces. Our collection boasts an array of enchanting necklaces, pendants, rings, bracelets, chain pendants, and anklets, all offered at competitive prices. Beyond online retail, our mission-driven approach guides us. With four partners, including a woman, our commitment to empowering talented and creative women sets us apart. Brea aims not only to excel in online commerce but also to establish offline stores, where we prioritize women's involvement and engagement for our valued customers." },

        { id: 2, name: "Sanjay Bandarkar", role: "Partner", bio: `Shri Dattatraya Balwant Bandarkar, the grandfather of Sanjay Bandarkar, initiated a legacy by personally crafting gold and silver ornaments. Sanjay, captivated by his grandfather's artistry since childhood, developed a keen interest in the craft. However, the succeeding generation opted for jobs rather than continuing the family profession. During Sanjay's college years, his elder brother, Shri Rahul Dinanath Bandarkar, ventured into the jewelry business, founding "Mangalmurthy Jewellers" in 1997. Sanjay, driven by a desire to assist his grandfather and inspired by the family's craftsmanship, became increasingly involved in the business post-graduation. In 2000, Sanjay established his enterprise, "Mangalmurthy Jewel Palace," located at Shahupuri Chowk, Satara. Celebrating its 25th anniversary in 2025, the business has flourished. Recognizing the evolving tastes of the new generation, a new venture called "BREA" online Silver Jewelry is set to launch. "BREA" offers a diverse array of contemporary designs, including Rings, Pendants, Necklaces, Bracelets, Earrings, and Anklets at reasonable prices. Beyond enhancing women's beauty, the initiative aims to empower women by creating opportunities for entrepreneurship. In addition to online shopping, plans are underway to introduce offline shopping through the "BREA" brand franchise, with a particular emphasis on empowering women as the first priority.` },
        
        { id: 3, name: "Gandhali Bhurke", role: "Partner", bio: `I belongs to a middle class family living in Karad. I completed schooling in the hometown then shifted to Pune for higher education.
I worked as a Customer Care Associate in a Telecom industry & still working as a HR Head in Marketing Company, but this didn’t stop me from having a dream of setting up the own business someday. After serving for 14 long years in the company I realized that I has not moved an inch towards my dream of setting up own business. So I decided to let’s work for own dream & chase the dream of becoming an entrepreneur.
In order to run a successful business empire, it is really important to learn from the examples who have proven themselves in the field.` },

        
      ];
        //-------------------------



const AboutInvestors = () => {

      //-------------------------
      const [selectedMember, setSelectedMember] = useState(null);
    
      // Open modal with specific member's info
      const openModal = (member) => {
        setSelectedMember(member);
      };
    
      // Close modal
      const closeModal = () => {
        setSelectedMember(null);
      };


    //--------------------------
    return (
        <>
        <div className='TeamSection '>
        <div className='TeamSection-Wrapper '>
        <h2>Our <span id="dual-color">Investors</span> </h2>
        </div>

        <div className='team-wrapper'>

        <div className='teamMember-Block'>
        <h3>Aavanindra Gursale </h3>
        <h4>Partner</h4>
        <FaArrowAltCircleRight 
  className='team-sect-icons' 
  onClick={() => openModal(teamMembers.find(m => m.name === "Aavanindra Gursale"))}
/>
        </div>

        <div  className='teamMember-Block'>
        <h3>Sanjay Bandarkar</h3>
        <h4>Partner</h4>
        <FaArrowAltCircleRight 
  className='team-sect-icons' 
  onClick={() => openModal(teamMembers.find(m => m.name === "Sanjay Bandarkar"))}
/>
        </div>

        <div  className='teamMember-Block'>
        <h3>Harshal Gujar</h3>
        <h4>Partner</h4>
        <FaArrowAltCircleRight className='team-sect-icons' />
        </div>

        <div  className='teamMember-Block'>
        <h3>Gandhali Bhurke</h3>
        <h4>Partner</h4>
        <FaArrowAltCircleRight 
  className='team-sect-icons' 
  onClick={() => openModal(teamMembers.find(m => m.name === "Gandhali Bhurke"))}
/>
        </div>
        </div>
        </div>
        {/* --------------------- */}
        <div className="team-container">
            
        
              <div className="team-list">
                {teamMembers.map((member) => (
                  <div key={member.id} className="team-card">
                    {/* <h3>{member.name}</h3>
                    <p>{member.role}</p> */}
                    
                    {/* Arrow Button to Open Modal */}
                    {/* <button onClick={() => openModal(member)} className="arrow-button">
                      <FaArrowAltCircleRight size={20} />
                    </button> */}
                  </div>
                ))}
              </div>
        
              {/* Modal for showing team member details */}
              {selectedMember && (
                <Modal
                  isOpen={!!selectedMember}
                  onRequestClose={closeModal}
                  contentLabel="Team Member Info" 
                  style={{
                    overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
                    content: {
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    gap: "15px",
                    width: "850px",
                    height: "350px",
                    margin: "auto",
                    padding: "20px",
                    borderRadius: "10px",
                    zIndex: "10px",
                    //   textAlign: "center",
                   
                    },
                  }}
                >
                  <h2>{selectedMember.name}</h2>
                  <h4>{selectedMember.role}</h4>
                  <p>{selectedMember.bio}</p>
        
                  {/* Close Button */}
                  {/* <button onClick={closeModal} className="close-button">
                    Close
                  </button> */}
                  <RxCross2 onClick={closeModal} className="close-icon"></RxCross2>
                </Modal>
              )}
            </div>

        {/* ---------------------------- */}
      
    </>
    )
}
export default AboutInvestors