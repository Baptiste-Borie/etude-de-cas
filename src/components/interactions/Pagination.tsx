import React from "react";
import { SelectChangeEvent, Select, MenuItem } from "@mui/material";
import { Movie } from "../../store/store";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type PaginationType = {
  indexOfLastItem: number;
  films: Movie[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
  indexOfLastItem,
  films,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  setItemsPerPage,
}: PaginationType) => {
  const nextPage = () => {
    if (indexOfLastItem < films.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleItemsPerPageChange = (event: SelectChangeEvent<number>) => {
    setItemsPerPage(event.target.value as number);
    setCurrentPage(1);
  };

  return (
    <div className="pagination">
      <button
        onClick={prevPage}
        style={{
          backgroundColor: "transparent",
          border: 0,
          cursor: "pointer",
          display: currentPage === 1 ? "none" : "inline-block",
        }}
      >
        <ArrowBackIosNewIcon sx={{ color: "white" }} />
      </button>
      <Select
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
        sx={styleSelectPagination}
      >
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={12}>12</MenuItem>
      </Select>
      <button
        onClick={nextPage}
        style={{
          backgroundColor: "transparent",
          border: 0,
          cursor: "pointer",
          display: indexOfLastItem >= films.length ? "none" : "inline-block",
        }}
      >
        <ArrowForwardIosIcon sx={{ color: "white" }} />
      </button>
    </div>
  );
};
export default Pagination;

const styleSelectPagination = {
  color: "white",
  backgroundColor: "#302f2f",
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  ".MuiSelect-icon": {
    color: "white",
  },
};
