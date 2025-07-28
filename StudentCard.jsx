// Name: Mukwaya Lwere
// Class: CS 81 JavaScript
// Module 10 Assignment 10A: Code Review - StudentCard Component
// Date: 07/27/2025

// StudentCard.jsx
// Shows a student's name, year, major, and photo on their profile card.
 // Contains a button to reveal or conceal the student's biography.
 // The profile card of a student is shown by this React functional component.
 // It displays the student's name, profile picture, academic year, and major.
 // Additionally, it has a button that uses component state to toggle whether the student's biography (bio) is visible.
 // Student information is passed into the component via props.
 // The useState hook manages the visibility state of the bio section.

import React from 'react';

function StudentCard(props) {
  // Disassemble props to retrieve student data.  
  // Props are how this component gets information from its parent (name, major, year, bio, imageUrl).

  const { name, major, year, bio, imageUrl } = props;
  //'showBio' determines whether the bio text is visible or not. 
  // useState hook declares state variable'showBio' initialized to false.
   // This state is updated using the function "setShowBio."
   // Whenever'showBio' changes, React re-renders this component.

  // Keeps track of whether the bio is visible or hidden
  const [showBio, setShowBio] = React.useState(false);

  // Toggle the bio visibility when the button is clicked
  // This function changes'showBio''s value from true to false.
   // It is triggered when the button to reveal or conceal the bio is pressed.
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  return (
    // Main container div styled as a card with padding, border, and centered 
    <div
      style={{
        maxWidth: '350px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        margin: '20px auto',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img
        src={imageUrl} // Image source URL passed via props, 'imageUrl' from props provides the image source URL
        alt={`${name}'s profile`} // Alt text for accessibility
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%', // Makes image circular
          objectFit: 'cover', // Ensures image covers area
          marginBottom: '12px',
        }}
      />
      <h2 style={{ margin: 0, fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>
        {major} – {year}
      </p>
      <button
        onClick={toggleBio} // Calls toggleBio function on click to update state
        style={{
          marginTop: '12px',
          padding: '8px 16px',
          fontSize: '14px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: '#007BFF', // Blue button background
          color: 'white',
        }}
      >
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
      
      {showBio && (
        <p style={{ marginTop: '16px', fontSize: '14px' }}>
          {bio}
        </p>
      )}
    </div>
  );
}

export default StudentCard;
