import React, { useState } from 'react';

function HomePage() {
  const [image, setImage] = useState(null); // State to store uploaded image
  const [text, setText] = useState(''); // State to store text input

  // Handle image file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the file from input
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Store the base64 file result in state
      };
      reader.readAsDataURL(file); // Convert the file to base64 string
    }
  };

  // Handle text input change
  const handleTextChange = (e) => {
    setText(e.target.value); // Update the text state
  };

  // Simulate the "Generate Video" process
  const handleGenerateVideo = () => {
    if (!image || !text) {
      alert("Please upload an image and enter some text!");
      return;
    }

    // Log the image and text to check if they are correct
    console.log("Image:", image);
    console.log("Text:", text);

    // Simulate the video generation process
    setTimeout(() => {
      alert("Video has been generated with your image and text!");
      // Here you would display the video or provide a link to download it.
    }, 2000); // Simulate a 2-second delay for video generation.
  };

  return (
    <div className="HomePage">
      <h1>Welcome to Vistara AI</h1>
      <p>Turn your images and text into amazing videos!</p>

      {/* File input for image upload */}
      <input type="file" onChange={handleImageChange} />
      
      {/* Display the selected image */}
      {image && (
        <div>
          <h3>Preview of Uploaded Image:</h3>
          <img src={image} alt="Uploaded" style={{ width: '300px', height: 'auto' }} />
        </div>
      )}

      {/* Text input for entering text */}
      <input 
        type="text" 
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..." 
      />

      {/* Button to generate video */}
      <button onClick={handleGenerateVideo}>Generate Video</button>
    </div>
  );
}

export default HomePage;
















