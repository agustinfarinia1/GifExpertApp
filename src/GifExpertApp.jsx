import { useState } from "react";
import { AddCategory, FooterApp, GifGrid } from "./components";

export const GifExpertApp = () => {

    const[categories,setCategories] = useState([]);

    const onNewCategory = (newCategory) => {
        if(categories.find((cat) => cat.toUpperCase() === newCategory.toUpperCase())) return;
        setCategories([newCategory,...categories]);
    }

    return (
        <>
            <div
                className="container"                 
                style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    minWidth:"10rem"}}>
                <h1 >GifExpertApp</h1>
                <AddCategory onNewCategory={onNewCategory}/>
                {categories.map((category) => (
                <GifGrid 
                    category={category} 
                    key={category} />
                ))}
            </div>
            <FooterApp/>
        </>
    );
}