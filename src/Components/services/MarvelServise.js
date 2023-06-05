class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=1dc04fc2716d2c109950006f6390093a';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllHeroes = async () => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformHero);
    }

    getHero = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformHero(res.data.results[0]);
    }

    _transformHero = (hero) => {
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
}
export default MarvelService;