import React, { useState } from 'react';
import '../components/UserPosts.css';
import axios from 'axios';

function UserPost() {
  const [postText, setPostText] = useState('');

  function handlePost() {
    axios.post('/api/posts', { text: postText })
      .then(response => {
        // Handle the response if needed
        console.log('Post successful:', response.data);
      })
      .catch(error => {
        // Handle errors if any
        console.error('Error posting:', error);
      });
    setPostText('');
  }

  // ... rest of your component code
}

export default UserPost;
