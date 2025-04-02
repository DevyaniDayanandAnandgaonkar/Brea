import React, { useState } from "react";
import Modal from "react-modal";
import { FaArrowDown } from "react-icons/fa"; // Arrow icon

// Set root for accessibility
Modal.setAppElement("#root");

// Sample Team Data
const teamMembers = [
  { id: 1, name: "Alice Johnson", role: "Project Manager", bio: "Alice has 10 years of experience managing tech projects." },
  { id: 2, name: "Bob Smith", role: "Lead Developer", bio: "Bob is a full-stack developer specializing in React and Node.js." },
  { id: 3, name: "Charlie Lee", role: "UI/UX Designer", bio: "Charlie designs user-friendly and aesthetically pleasing interfaces." },
  { id: 4, name: "Diana Patel", role: "Marketing Head", bio: "Diana leads our marketing efforts and brand strategy." },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Open modal with specific member's info
  const openModal = (member) => {
    setSelectedMember(member);
  };

  // Close modal
  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="team-container">
      <h2>Meet Our Team</h2>

      <div className="team-list">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            
            {/* Arrow Button to Open Modal */}
            <button onClick={() => openModal(member)} className="arrow-button">
              <FaArrowDown size={20} />
            </button>
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
              width: "400px",
              height: "250px",
              margin: "auto",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            },
          }}
        >
          <h2>{selectedMember.name}</h2>
          <h4>{selectedMember.role}</h4>
          <p>{selectedMember.bio}</p>

          {/* Close Button */}
          <button onClick={closeModal} className="close-button">
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

export default Team;
