import { useHttp } from "../../hooks/http.hook";

const  useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=1dc04fc2716d2c109950006f6390093a';
    const _baseOffset = 210;

    const getAllHeroes = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}}&${_apiKey}`);
        return res.data.results.map(_transformHero);
    }

    const getHero = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformHero(res.data.results[0]);
    }

    const _transformHero = (hero) => {
        return {
            name: hero.name,
            description: hero.description,
            thumbnail: hero.thumbnail.path + '.' + hero.thumbnail.extension,
            homepage: hero.urls[0].url,
            wiki: hero.urls[1].url,
            id: hero.id,
            comics: hero.comics.items,
        }
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
			title: comics.title,
			description: comics.description || "There is no description",
			pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about the number of pages",
			thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
			language: comics.textObjects[0]?.language || "en-us",
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
        }
    }

    const getAllComics = async (offset = 0) => {
        const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics)
    }

    const getComics = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    }

    return {loading, error, clearError, getAllHeroes, getHero, getAllComics, getComics}
}
export default useMarvelService;