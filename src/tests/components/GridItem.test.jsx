import { render, screen } from "@testing-library/react";
import GridItem from "../../components/GridItem";

describe('Prueba Componente <GridItem/>',() => {
    
    const title= "hola";
    const url = "https://hola/prueba.com"

    test('prueba 01- el campo title y url debe ser isRequired', () => {
        const {container} = render(<GridItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    })

    test('prueba 02- Tiene que coincidir title y url', () => {
        render(<GridItem title={title} url={url}/>);
        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('prueba 03- Debe mostrar el titulo en el componente', () => {
        render(<GridItem title={title} url={url}/>);
        expect(screen.getByText(title).innerHTML).toContain(title);
    })
})