import React, { useState } from "react";
import Header from "./Header";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Admin() {
  const [imagename, setImagename] = useState('');
  const [image, setImage] = useState('');
  const [filter, setFilter] = useState('none'); // Selected filter
  const [preview, setPreview] = useState(null); // Preview image URL

  const navigate = useNavigate();

  // Handle Image Selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Preview Image
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
    }
  };

  // Handle Image Upload
  const handleAddimage = async (e) => {
    e.preventDefault();
    
    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append('imagename', imagename);
    formData.append('image', image);
    formData.append('filter', filter); // Send selected filter to backend

    try {
      await axios.post("http://localhost:7005/gallery/addimage", formData);
      alert("Image added successfully!");
      navigate("/gallery");
    } catch (err) {
      alert("Invalid field, try again.");
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <Header />
      <div className="card shadow-lg mt-4 p-4">
        <h3 className="mb-4 text-center text-primary">Add Image to Gallery</h3>
        <form encType="multipart/form-data" onSubmit={handleAddimage}>
          <div className="mb-3">
            <label className="form-label">Image Title</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter image title"
              onChange={(e) => setImagename(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input 
              type="file" 
              className="form-control" 
              onChange={handleImageChange}
            />
          </div>

          {/* Dropdown for selecting filters */}
          <div className="mb-3">
            <label className="form-label">Choose Filter</label>
            <select className="form-control" onChange={(e) => setFilter(e.target.value)}>
              <option value="none">None</option>
              <option value="grayscale(100%)">Grayscale</option>
              <option value="sepia(100%)">Sepia</option>
              <option value="brightness(150%)">Brightness</option>
              <option value="contrast(200%)">Contrast</option>
            </select>
          </div>

          {/* Preview Image with Filter */}
          {preview && (
            <div className="text-center mt-3">
              <h5>Preview:</h5>
              <img 
                src={preview} 
                alt="Preview" 
                style={{ width: "300px", height: "200px", objectFit: "cover", filter }}
                className="img-thumbnail"
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100 mt-3">Add to Gallery</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
