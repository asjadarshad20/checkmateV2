// // dashboard.js
// import React, { useState } from 'react';
// import ButtonAppBar from './navigation';
// import "./dashboard.css"
// import DisplayItems from './testing';


// function Dashboard() {
//   const [cardCount, setCardCount] = useState(1); // Initial card count

//   const handleAddCard = () => {
//     setCardCount(prevCount => prevCount + 1); // Increment card count
//   };

//   const deleteCard = () =>{
//     setCardCount(prevCount=> prevCount - 1);
//   }

//   return (
//     <>
//       <div className='header'>
//         <ButtonAppBar onAddCard={handleAddCard} />
//       </div>
//       <div className='cardBlock'>
//         <div className='cardGrid'>
//         <DisplayItems/>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Dashboard;
import React, { useState } from 'react';
import ButtonAppBar from './navigation';
import "./dashboard.css"
import DisplayItems from './testing';
import axios from 'axios'; // Import axios for making HTTP requests

function Dashboard() {
  const [showForm, setShowForm] = useState(false); // State for form visibility
  const [newItemText, setNewItemText] = useState(''); // State for form input

  const handleAddCard = () => {
    setShowForm(true); // Show the form when adding a new card
  };

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  var rndInt = randomIntFromInterval(1, 10000)
  var rndId = Math.round(rndInt)
  var newid = rndId.toString()


  const handleSaveItem = async () => {
    try {
      await axios.post('http://localhost:4000/api/additems', {id:newid,desc: newItemText, completed: false });
      setShowForm(false); 
      setNewItemText(''); 
    } catch (error) {
      console.error('Error adding item:', error);
      // Log the error to the console
      console.error('Error adding item:', error);
      // Display an error message to the user (optional)
      alert('Error adding item. Please try again.');
    }
  };

  const handleDiscardForm = () => {
    setShowForm(false); // Hide the form when discarding
    setNewItemText(''); // Reset the form input
  };

  return (
    <>
      <div className='header'>
        <ButtonAppBar onAddCard={handleAddCard} />
      </div>
      <div className='cardBlock'>
        <div className='cardGrid'>
          {showForm ? (
            <div className='form'>
              <input
                type='text'
                value={newItemText}
                onChange={(e) => setNewItemText(e.target.value)}
              />
              <button onClick={handleSaveItem}>Save</button>
              <button onClick={handleDiscardForm}>Discard</button>
            </div>
          ) : (
            <DisplayItems/>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
