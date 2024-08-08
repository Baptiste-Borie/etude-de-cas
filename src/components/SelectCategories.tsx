import React, { useState } from "react";
import {
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

type SelectType = {
  categories: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string[] | null>>;
};

const SelectCategories = ({ categories, setSelectedCategory }: SelectType) => {
  const [temporarySelection, setTemporarySelection] = useState<string[]>([]);

  const handleCategoryChange = (
    event: SelectChangeEvent<typeof temporarySelection>
  ) => {
    const {
      target: { value },
    } = event;
    setTemporarySelection(typeof value === "string" ? value.split(",") : value);
  };

  const handleValidate = () => {
    setSelectedCategory(temporarySelection);
  };

  return (
    <>
      <Select
        multiple
        value={temporarySelection}
        onChange={handleCategoryChange}
        renderValue={(selected) => (selected as string[]).join(", ")}
        sx={styleSelect}
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            <Checkbox checked={temporarySelection.indexOf(category) > -1} />
            <ListItemText primary={category} />
          </MenuItem>
        ))}
      </Select>
      <Button
        variant="contained"
        sx={{ color: "white", backgroundColor: "#302f2f"  }}
        onClick={handleValidate}
        endIcon={<SendIcon />}
      >
        Valider
      </Button>
    </>
  );
};
export default SelectCategories;

export const styleSelect = {
  backgroundColor: "#302f2f",
  color: "white",
  border: "1px solid white",
  borderRadius: "25px",
  width: "125px",
  margin: "25px",
  ".MuiSelect-icon": {
    color: "white",
  },
};

