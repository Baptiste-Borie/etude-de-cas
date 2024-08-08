import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import SelectCategories from "../components/SelectCategories";
import store, { Movie } from "../store/store";
import { Icon } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CategoryPage from "./CategoryPage";

import "../components/Main.css";

type CategoryDisplayerType = {
  selectedCategory: string[] | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string[] | null>>;
};

const CategoryDisplayer: React.FC<CategoryDisplayerType> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [films, setFilms] = useState<Movie[]>(store);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(store.map((movie) => movie.Type))
    );
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    const CATEGORIES = Array.from(new Set(films.map((movie) => movie.Type)));
    setCategories(CATEGORIES);
  }, [films]);


  const handleDelete = (title: string) => {
    setFilms(films.filter((movie) => movie.Title !== title));
  };

  const filmsParCategorie: { [categorie: string]: Movie[] } = {
    "Tous les films": films,
  };

  categories.forEach((categorie) => {
    filmsParCategorie[categorie] = films.filter(
      (movie: Movie) => movie.Type === categorie
    );
  });

  if (selectedCategory && selectedCategory.length > 0) {
    const filteredFilms = selectedCategory.flatMap(
      (cat) => filmsParCategorie[cat] || []
    );
    return (
      <CategoryPage
        categories={selectedCategory}
        films={filteredFilms}
        handleDelete={handleDelete}
      />
    );
  }

  return (
    <>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}></div>
      <SelectCategories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
      {Object.keys(filmsParCategorie).map((categorie, index) => (
        <section key={index}>
          <div
            className="categories"
            onClick={() => setSelectedCategory([categorie])}
          >
            <h2>{categorie}</h2>
            <Icon>
              <ArrowRightIcon className="arrowIcon" />
            </Icon>
          </div>
          <div className="video-card-container">
            {filmsParCategorie[categorie].map((movie, index) => (
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
        </section>
      ))}
    </>
  );
};

export default CategoryDisplayer;
