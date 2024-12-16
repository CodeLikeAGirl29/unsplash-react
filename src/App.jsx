import { useRef, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import "./App.css";

const App = () => {
  const queryRef = useRef("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (query, currentPage) => {
    const accessKey = import.meta.env.VITE_API_KEY;

    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: { query, page: currentPage, per_page: 12 },
          headers: { Authorization: `Client-ID ${accessKey}` },
        },
      );
      setImages((prevImages) => [...prevImages, ...response.data.results]); // Append new images
    } catch (error) {
      console.error("Error fetching the images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setImages([]); // Clear previous images
    setPage(1); // Reset to page 1
    fetchImages(queryRef.current.value, 1); // Fetch the first page
  };

  const observer = useRef();

  const lastImageRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && queryRef.current.value) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading],
  );

  useEffect(() => {
    if (page > 1) {
      fetchImages(queryRef.current.value, page);
    }
  }, [page]);

  return (
    <div className="app card">
      <h1 className="heading">Unsplash Image Search</h1>
      <form onSubmit={handleSearch}>
        <input
          className="form-field"
          type="text"
          placeholder="Search for images..."
          ref={queryRef}
        />
        <div className="btn-container">
          <button type="submit" className="btn">
            <FaSearch /> Search
          </button>
        </div>
      </form>

      <div className="image-grid">
        {images.map((image, index) => {
          if (index === images.length - 1) {
            return (
              <div ref={lastImageRef} key={image.id} className="image-item">
                <img
                  className="img"
                  src={image.urls.small}
                  alt={image.alt_description}
                />
              </div>
            );
          }
          return (
            <div key={image.id} className="image-item">
              <img
                className="img"
                src={image.urls.small}
                alt={image.alt_description}
              />
            </div>
          );
        })}
      </div>
      {loading && <p>Loading more images...</p>}
    </div>
  );
};

export default App;
