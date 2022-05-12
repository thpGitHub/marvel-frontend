import axios from 'axios'

const fetchAllComics = async () => {
    try {
        // const response = await axios.get('https://thierry-api-marvel.herokuapp.com/')
        const response = await axios.get('http://localhost:4000/comics')
        return await response.data 
        // console.log('response ===', response)
    } catch (error) {
        console.log(error);
    }
}
const fetchComic = async (id) => {
    try {
        // const response = await axios.get(`https://thierry-api-marvel.herokuapp.com/${id}`)
        const response = await axios.get(`http://localhost:4000/comic/${id}`)
        return await response.data 
        // console.log('response ===', response)
    } catch (error) {
        console.log(error);
    }
}
// https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=UHEMx2q8JJztSDpA&name=spider

const fetchAllCharacters = async (searchCharacters) => {
    try {
        // const response = await axios.get('https://lereacteur-marvel-api.herokuapp.com/characters')
       if(searchCharacters) {
        const response = await axios.get(`http://localhost:4000/searchCharacters?name=${searchCharacters}`)
        return await response.data
       } else {
           const response = await axios.get('http://localhost:4000/characters')
           return await response.data

       }
    } catch (error) {
        console.log(error);
    }  
}

// https://lereacteur-marvel-api.herokuapp.com/character/5fcf91f4d8a2480017b91453?apiKey=UHEMx2q8JJztSDpA
const fetchCharacter = async (id) => {
    try {
        // const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/character/${id}`)
        const response = await axios.get(`http://localhost:4000/character/${id}`)
        return await response.data
    } catch (error) {
        console.log(error);
    }
}

export {fetchAllComics, fetchAllCharacters, fetchCharacter, fetchComic}

// Cette requete fonctionne avec api heroku 

// const fetchAllComics = async () => {
//     try {
//         const response = await axios.get('https://thierry-api-marvel.herokuapp.com/')
//         return await response.data 
//         // console.log('response ===', response)
//     } catch (error) {
//         console.log(error);
//     }
// }