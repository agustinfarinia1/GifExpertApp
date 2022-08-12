import {getGifs} from '../../helpers/getGifs';

describe('Prueba Helper GetGifs',() => {

    test('debe retornar un arreglo de gifs', async() => {
        const gifs = await getGifs('One punch');
        expect(gifs.length).toBeGreaterThan(0);
        //Evalua si la estructura del retorno es correcta
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    })
})