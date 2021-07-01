import React from 'react'
import GameService from './GameService';

class AddGame extends React.Component {
    constructor(props){
        super(props)
        this.state={
            date: "",
            home_team: "",
            opp_team: "",
            home_team_score: 0,
            opp_team_score: 0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.post = this.post.bind(this);


    }

    post() {
        //const axios = require('axios')

        let obj = {
            date: this.state.date,
            home_team: this.state.home_team,
            opp_team: this.state.opp_team,
            home_team_score: this.state.opp_team_score,
            opp_team_score: this.state.home_team_score,
        }

        // axios.post('http://localhost:8081/api/AddGames', obj)
        // .then(function (response) {
        //     console.log(response);
        //     this.props.changeGame()
        // })

        

        GameService.addGame(obj)
        .then((res) => {
            console.log(res)
            this.props.changeGame()
        })

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
                <h3>Add A Game</h3>
                <form>
                    <div className="gameForm">
                    
                    <div>
                    <label>Date: </label>
                    <input type="text" name="date" value={this.state.date} onChange={this.handleChange}/>
                    </div>
                    
                    <div>
                    <label>Home Team Name: </label>
                    <input type="text" name="home_team" value={this.state.home_team} onChange={this.handleChange}/>
                    </div>
                    
                    <div>
                    <label>Opponet Team Name: </label>
                    <input type="text" name="opp_team" value={this.state.opp_team} onChange={this.handleChange}/>
                    </div>
                    
                    <div>
                    <label>Home Team Score: </label>
                    <input type="text" name="home_team_score" value={this.state.home_team_score} onChange={this.handleChange}/>
                    </div>
                    
                    <div>
                    <label>Opponet Team Score: </label>
                    <input type="text" name="opp_team_score" value={this.state.opp_team_score} onChange={this.handleChange}/>
                    </div>
                    </div>
                </form>
                <button onClick={this.post}>Submit</button>
            </div> 

        )
    }
}

export default AddGame