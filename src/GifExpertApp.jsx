// import React from "react";
import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <div>
        <h1>GifExpertApp</h1>

        <AddCategory
          onNewCategory={onAddCategory}
          // currentCategories={categories}
        />

        {/* <button onClick={onAddCategory}>Agregar</button> */}

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};

export default GifExpertApp;
