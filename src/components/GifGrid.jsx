import { useFetchGifs } from "../hooks/useFetchGifs";
import GridItem from "./GridItem";
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

    const {images,isLoading} = useFetchGifs(category);

    return (
        <div style={{marginBottom:"2rem"}}>
            <h3 style={{padding:"0",margin:"0"}}>{category}</h3>
            {isLoading  && (<h1>Cargando...</h1>)}
            <div className="card-grid">
                {images.map((image) => (
                    <GridItem 
                        key={image.id}
                        { ...image}/>
                ))}
            </div>
        </div>
    );
}

GifGrid.propTypes={
    category : PropTypes.string.isRequired,
}