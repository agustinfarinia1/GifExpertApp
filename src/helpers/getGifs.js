export const getGifs = async(category) => {

    const apiKey = 'DEXEKti0qmVs45qdri76Q4ufqCwd0ebx';
    const urlFetch = 'https://api.giphy.com/v1/gifs/search';

    const cantidad = 10;
    const resp = await fetch(`${urlFetch}?api_key=${apiKey}&q=${category}&limit=${cantidad}`);
    const {data} = await resp.json();
    const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }))
    return gifs;
}