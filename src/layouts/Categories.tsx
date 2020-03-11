import React from "react";
import CategoriesList from "../components/categoriesList/CategoriesList";
import CreateCategoryForm from "../components/createCategory/CreateCategoryForm";

const Categories: React.FC = () => {
    return (
        <div>
            <CreateCategoryForm />
            <CategoriesList />
        </div>
    );
}

export default Categories;