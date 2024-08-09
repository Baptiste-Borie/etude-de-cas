import React, { useState } from "react";
import { Movie } from "../store/store";
import Pagination from "../components/interactions/Pagination";
import VideoCard from "../components/VideoCard";

import "./CategoryPage.css";

type CategoryPageType = {
  categories?: string[];
  films: Movie[];
  handleDelete: (title: string) => void;
};

const CategoryPage: React.FC<CategoryPageType> = ({
  categories,
  films,
  handleDelete,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFilms = films.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <h1>{categories?.join(", ") || "Aucune catégorie sélectionnée"}</h1>
      <div className="page">
        <div className="container">
          {currentFilms.map((movie, index) => (
            <VideoCard
              key={index}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              like={movie.Like}
              dislike={movie.Dislike}
              onDelete={() => handleDelete(movie.Title)}
            />
          ))}
        </div>
        <div className="pagination">
          <Pagination
            indexOfLastItem={indexOfLastItem}
            films={films}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
