import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewBasicCard from './newcard'; // Import the component for rendering each item

function DisplayItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems(); // Fetch items from MongoDB when the component mounts
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/getitems');
      setItems(response.data); // Update state with fetched items
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleDeleteCard = async (itemId) => {
    try {
      await axios.delete(`http://localhost:4000/api/deleteitem/${itemId}`);
      // After deletion, refetch items to update the UI
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      {items.map(item => (
        <NewBasicCard
          key={item._id} // Make sure to use a unique key for each item
          item={item}
          onDeleteCard={() => handleDeleteCard(item.id)} // Pass the item ID to the delete handler
        />
      ))}
    </div>
  );
}

export default DisplayItems;
