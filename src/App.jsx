import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import Loader from "./components/Loader/Loader.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  const fetchImages = async (searchQuery, pageNumber = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            query: searchQuery,
            page: pageNumber,
            per_page: 15,
          },
          headers: {
            Authorization: `Client-ID MwiKJfIu7zL7bgHvAOxRKsXHwYqFo80H6oEAJ66ReH8`,
          },
        },
      );

      if (pageNumber === 1) {
        setImages(response.data.results);
      } else {
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      }
    } catch (error) {
      setError(
        error.response.data.errors[0] ??
          "Failed to load images. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    fetchImages(searchQuery);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (page > 1) {
      fetchImages(query, page);
    }
  }, [page, query]);

  useEffect(() => {
    if (!loading && images.length > 0 && page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [images, loading, page]);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={setModalImage} />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {modalImage && (
        <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
      )}
    </div>
  );
};

export default App;
