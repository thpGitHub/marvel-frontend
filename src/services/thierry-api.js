import axios from 'axios'

const fetchAllComics = async () => {
    try {
        const response = await axios.get('https://thierry-api-marvel.herokuapp.com/')
        return await response.data 
        // console.log('response ===', response)
    } catch (error) {
        
    }
}

export {fetchAllComics}
//https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=YOUR_API_KEY

// https://thierry-api-marvel.herokuapp.com/