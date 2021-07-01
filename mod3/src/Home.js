import React from 'react'
import NavBar from "./NavBar"
import GameService from './GameService';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import AddGame from "./AddGame"
import DeleteGame from "./DeleteGame"
import UpdateGame from "./UpdateGame"
import GetById from "./Search"


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            games:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.changeGame = this.changeGame.bind(this);
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

    componentDidMount(){
       this.changeGame()
    }
    changeGame()
    {
        GameService.getGame().then((res) => {
            console.log(res)
            this.setState({games:res.data})
        })
    }    
    render() {
		return (
			<div>
                <Router>
                <div>
                    <NavBar />
                        <Switch>
                            <Route path="/AddGame" render={() => <AddGame changeGame={this.changeGame}/>} />
                            <Route path="/DeleteGame" render={() => <DeleteGame changeGame={this.changeGame}/>} />
                            <Route path="/UpdateGame" render={() => <UpdateGame changeGame={this.changeGame}/>} />
                            <Route path="/SearchById" render={() => <GetById changeGame={this.changeGame}/>} />
                        </Switch>
                </div>
                </Router>
                <hr/>
                <h1>Game Log</h1>
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
                                this.state.games.map(
                                    game =>
                                    <tr key={game.id}>
                                        <td>{game.id}</td>
                                        <td>{game.date}</td>
                                        <td>{game.home_team}</td>
                                        <td>{game.opp_team}</td>
                                        <td>{game.home_team_score}</td>
                                        <td>{game.opp_team_score}</td>
                                        <td>{game.winner}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
			</div>

		);
	}


}

export default Home