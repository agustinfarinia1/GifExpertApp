import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Prueba hook useFetchGifs',() => {

    test('prueba 01- Debe regresar el estado inicial', () => {
        const {result} = renderHook(() => useFetchGifs('prueba'));
        const {images,isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('prueba 02- Debe regresar arreglo de imagenes y isLoading en false', async() => {
        const {result} = renderHook(() => useFetchGifs('prueba'));
        //Espera al flujo del hook
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )
        const {images,isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
})