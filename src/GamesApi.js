// import 'bootstrap/dist/css/bootstrap.css';

// const GAMES_ENDPOINT = 'https://api.rawg.io/api/games?key=bdd2d97f6aff4685be794f9b75bf3adf&id=';
// const options = {
//     method: 'GET',
//     headers: {
//         // 'X-RapidAPI-Key': 'a9c789bca0mshd96dbfa5a6dae40p1816ecjsn96071b1d21e0',
//         // 'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
//         'User-Agent': 'Personal Game Journal'
//     }
// };

// //API for fetching all of the news data

// class GamesApi {
//     getGameById = async (id) => {
//         try {
//             const response = await fetch(`${GAMES_ENDPOINT}${id}`, options);
//             const data = await response.json();
//             console.log(data);
//             return data;
//         } catch (e) {
//             console.log('There was an issue.', e);
//         }
//     };

// }

// export const gamesApi = new GamesApi();