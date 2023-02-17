import 'bootstrap/dist/css/bootstrap.css';

const NEWS_ENDPOINT = 'https://videogames-news2.p.rapidapi.com/videogames_news/recent';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a9c789bca0mshd96dbfa5a6dae40p1816ecjsn96071b1d21e0',
        'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
    }
};

//API for fetching all of the news data

class NewsApi {
    get = async () => {
        try {
            const response = await fetch(NEWS_ENDPOINT, options);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log('There was an issue.', e);
        }
    };

}

export const newsApi = new NewsApi();
