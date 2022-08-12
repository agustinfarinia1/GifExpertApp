import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Prueba Componente <AddCategory/>',() => {
    
    const inputValue= "hola";

    test('prueba 01- Que coincida el valor que mandamos', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input,{target:{value:inputValue}});
        expect(input.value).toContain(inputValue);
    })

    test('prueba 02- Verificacion informacion en onNewCategory', () => {
        const onNewCategory= jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input,{target:{value:inputValue}});
        fireEvent.submit(form);
        //Que la funcion contenga la informacion
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        
    })

    test('prueba 03- Verificacion onNewCategory', () => {
        const onNewCategory= jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        //No lo ejecuta porque el input esta vacio
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        
    })
})