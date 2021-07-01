import React from 'react'
import GameService from './GameService';

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state={
            searchDate: "",
            gameResult:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.searchGame = this.searchGame.bind(this);


    }

    searchGame() {
        // const axios = require('axios')
        // axios.get(`http://localhost:8081/api/date=${this.state.searchDate}`)
        // //.then((response) => this.setState({gameResult:response.data}));
        // .then((res) => {
        //     //console.log(response.data);
        //     this.setState({gameResult:res.data})
        // })

        GameService.getByDate(this.state.searchDate).then((res) => {
            console.log(res)
            //We use square brackets here because it is signle object and map only works on arrays. 
            //we know its a object because of the curly brackets
            this.setState({gameResult:res.data})
            this.props.changeGame()
        })

       //window.location.reload();
    }

    handleChange(event) {
		//You can control the values of more than one input field by adding a name attribute to each element.
		//gets the name of the input
		let n = event.target.name;
		//gets the value of the input
		let value = event.target.value;
		//n & value are equal to state names. This is done so anything entered can set a state 
		this.setState({ [n]: value })
	}

        
    render() 
    {
        
        return (
            <div className="center">
                <h3>Search For A Game By Date</h3>
                <form>
                    <label>Date: </label>
                    <input type="text" name="searchDate" value={this.state.searchDate} onChange={this.handleChange}/>
                </form>
                <button onClick={this.searchGame}>Submit</button>
            
                <div>
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Game ID</th>
                                <th>Date</th>
                                <th>Home Team</th>
                                <th>Opponet Team</th>
                                <th>Home Team Score</th>
                                <th>Opponet Team Score</th>
                                <th>Winner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.gameResult.map(
                                    res =>
                                    <tr key={res.id}>
                                        <td>{res.id}</td>
                                        <td>{res.date}</td>
                                        <td>{res.home_team}</td>
                                        <td>{res.opp_team}</td>
                                        <td>{res.home_team_score}</td>
                                        <td>{res.opp_team_score}</td>
                                        <td>{res.winner}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div> 

        )
    }
}

export default Search