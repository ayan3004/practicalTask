import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../Components/Gallery.css";
import axios from "axios";

function Gallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const res = await axios.get("http://localhost:7005/gallery/viewgallery");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching gallery data:", err);
      }
    };
    fetchingData();
  }, []);

  const deleteImage = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:7005/gallery/deleteimage?id=${id}`
      );
      if (response.status === 200) {
        alert(response.data.msg);
        setData(data.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Failed to delete image. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <Header />
      <br />

      <div
        className="d-flex justify-content-start flex-wrap gap-5 mt-5"
        style={{ width: "80%", marginLeft: "200px" }}
      >
        {data.length > 0 ? (
          data.map((el, i) => (
            <div
              className="card shadow-lg overflow-hidden"
              style={{ width: "16.5rem", height: "380px" }}
              key={i}
            >
              {/* Image with Filter Applied */}
              <div style={{ height: "70%", overflow: "hidden" }}>
                <img
                  src={`http://localhost:7005/${el.image}`}
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: el.filter, // Apply the saved filter
                  }}
                  alt={el.imagename}
                />
              </div>

              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-text text-center mb-3">{el.imagename}</h5>
                <button
                  className="btn btn-danger w-100"
                  onClick={() => deleteImage(el._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <h4>No items found</h4>
        )}
      </div>
    </div>
  );
}

export default Gallery;
