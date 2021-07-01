import axios from 'axios';

const GAMELOG_API_BASE_URL = "http://localhost:8081/api/games"
class GameService{

    getGame(){
        return axios.get(GAMELOG_API_BASE_URL)
    }

    getByDate(date){
        return axios.get(`http://localhost:8081/api/date=${date}`)
    }

    updateById(option, id, objs){
        return axios.put(`http://localhost:8081/api/update/${option}/id=${id}`, objs)
    }

    deleteById(id)
    {
        return axios.delete(`http://localhost:8081/api/game=${id}`)
    }

    addGame(obj)
    {
        return axios.post('http://localhost:8081/api/AddGames', obj)
    }
}

export default new GameService();