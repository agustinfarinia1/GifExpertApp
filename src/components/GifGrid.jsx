import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({category}) => {

    const {images,isLoading} = useFetchGifs(category);

    console.log({images,isLoading});

    return (
        <div>
            <h3>{category}</h3>
            {isLoading  && (<h1>Cargando...</h1>)}
            <div className="card-grid">
                {images.map((image) => (
                    <GifGridItem 
                        key={image.id}
                        { ...image}/>
                ))}
            </div>
        </div>
    );
}