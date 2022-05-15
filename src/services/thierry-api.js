import axios from 'axios'

const fetchAllComics = async searchComics => {
    try {
        if (searchComics) {
            const response = await axios.get(
                `https://thierry-api-marvel.herokuapp.com/searchComics?title=${searchComics}`,
            )
            return await response.data
        } else {
            const response = await axios.get(
                'https://thierry-api-marvel.herokuapp.com/comics',
            )
            return await response.data
        }
    } catch (error) {
        console.log(error)
    }
}

const fetchComic = async id => {
    try {
        const response = await axios.get(
            `https://thierry-api-marvel.herokuapp.com/comic/${id}`,
        )
        return await response.data
    } catch (error) {
        console.log(error)
    }
}
/*
 * charactersIds = ["id character", "id character",  ...]
 */
const fetchCharactersByIds = async charactersIds => {
    try {
        const test = []
        for (let i = 0; i < charactersIds.length; i++) {
            const response = await axios.get(
                `https://thierry-api-marvel.herokuapp.com/character/${charactersIds[i]}`,
            )
            test.push(response)
        }
        return await test
    } catch (error) {}
}
/*
 * comicsIds = ["id comic", "id comic",  ...]
 */
const fetchComicsByIds = async comicsIds => {
    try {
        const test = []
        for (let i = 0; i < comicsIds.length; i++) {
            const response = await axios.get(
                `https://thierry-api-marvel.herokuapp.com/comic/${comicsIds[i]}`,
            )
            test.push(response)
        }
        return await test
    } catch (error) {}
}

const fetchAllCharacters = async searchCharacters => {
    try {
        if (searchCharacters) {
            const response = await axios.get(
                `https://thierry-api-marvel.herokuapp.com/searchCharacters?name=${searchCharacters}`,
            )
            return await response.data
        } else {
            const response = await axios.get(
                'https://thierry-api-marvel.herokuapp.com/characters',
            )
            return await response.data
        }
    } catch (error) {
        console.log(error)
    }
}

const fetchCharacter = async id => {
    try {
        const response = await axios.get(
            `https://thierry-api-marvel.herokuapp.com/character/${id}`,
        )
        return await response.data
    } catch (error) {
        console.log(error)
    }
}

export {
    fetchAllComics,
    fetchAllCharacters,
    fetchCharacter,
    fetchComic,
    fetchComicsByIds,
    fetchCharactersByIds,
}
