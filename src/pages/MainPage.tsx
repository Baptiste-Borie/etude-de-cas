import { useState } from "react";
import CategoryDisplayer from "./CategoryDisplayer";

import "../App.css";

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[] | null>(
    null
  );
  


  return (
    <div id="main">
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "5px",
          cursor: "pointer",
        }}
        onClick={() => {
          setSelectedCategory(null);
        }}
      >
        <img src="/logo512.png" alt="logo" style={{ height: 120 }} />
        <h1>Movio</h1>
      </header>
      <CategoryDisplayer
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default MainPage;
