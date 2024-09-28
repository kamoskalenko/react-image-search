import { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { fetchImages } from "../services/api";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import "react-toastify/dist/ReactToastify.css";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);

        const data = await fetchImages(page, query);

        if (data.results.length === 0) {
          setIsError(true);
          return;
        }

        setImages((prev) => [...prev, ...data.results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (param) => {
    setQuery(param);
    setImages([]);
    setPage(1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar setQuery={handleSetQuery} />
      {images.length > 0 && (
        <>
          <ImageGallery images={images} openModal={openModal} />
          <LoadMoreBtn onClick={handleChangePage} />
        </>
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
      <ImageModal />
    </div>
  );
};

export default App;
