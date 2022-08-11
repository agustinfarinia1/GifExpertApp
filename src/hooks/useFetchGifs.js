import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [gifs,setGifs] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const getImages = async() => {
        setGifs(await getGifs(category));
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    },[]);

    return{
        images:gifs,
        isLoading
    }
}