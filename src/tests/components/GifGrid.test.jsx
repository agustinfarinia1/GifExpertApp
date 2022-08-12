import { fireEvent, render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('Prueba Componente <GifGrid/>',() => {

    const category="category";

    test('prueba 01- Que coincida el valor que mandamos', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })

    test('prueba 02- Debe mostrar items cuando carga imagenes', () => {

        const gifs= 
        [
            {
                id:"123",
                title:"prueba mock",
                url:"https://prueba1/mock1.com"
            },
            {
                id:"1234",
                title:"prueba mock",
                url:"https://prueba2/mock2.com"
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category}/>);
        //Que tenga la misma cantidad de imagenes que el arreglo
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    })
})