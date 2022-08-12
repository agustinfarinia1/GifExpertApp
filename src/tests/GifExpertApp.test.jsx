import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

describe('Prueba componente principal <GifExpertApp/>',() => {

    const inputValue = "prueba gifExpert";
    const tituloPrincipal = "GifExpertApp";
    const footer = "Made by";

    test('prueba 01- Tiene que cargar el titulo', () => {
        render(<GifExpertApp/>);
        expect(screen.getByText(tituloPrincipal).innerHTML).toContain(tituloPrincipal);
    })

    test('prueba 02- Tiene que cargar el footer', () => {
        render(<GifExpertApp/>);
        expect(screen.getByRole('heading',{level:4}).innerHTML).toContain(footer);
    })

    test('prueba 02- Cargue busqueda correctamente ', () => {
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input,{target:{value:{inputValue}}});
        fireEvent.submit(form);
        expect(screen.getAllByRole('heading',{level:3}).length).toBeGreaterThan(0);
    })
})