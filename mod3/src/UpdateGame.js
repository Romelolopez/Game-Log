import React from 'react'
import GameService from './GameService';

class UpdateGame extends React.Component {
    constructor(props){
        super(props)
        this.state={
            id: 0,
            option: "",
            input: "",
            games:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.update = this.update.bind(this);
        this.setup = this.setup.bind(this);



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

    setup(){
        var sel = document.getElementById('columns');
        var opt = sel.options[sel.selectedIndex];
        this.setState({option:opt.value}, () => this.update())
    }

    update(){

        //const axios = require('axios')

        let op = `${this.state.option}`
        let inp = this.state.input
        let obj = {[`${op}`]:inp}

        // axios.put(`http://localhost:8081/api/update/${this.state.option}/id=${this.state.id}`, obj)
        // .then((response) => {
        //     console.log(response);
        // })
        
        
    
        GameService.updateById(this.state.option, this.state.id, obj) 
        .then((res) => {
            console.log(res)
            this.props.changeGame()
        })

    }



    render() 
    {
        return (
            <div className="center">
                <h3>Update A Game</h3>
                <form>
                    <div class="row">
                        <div class="col">
                            <label>ID: </label>
                            <input type="text" name="id" value={this.state.id} class="form-control" onChange={this.handleChange} placeholder="ID" />
                        </div>
                        <div class="col">
                            <label>Input: </label>
                            <input type="text" name="input" value={this.state.input} class="form-control" onChange={this.handleChange}/> 
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <label>Choose a stat column:</label>
                            <select id="columns" class="form-select form-control-md">
                                <option value="date">Date</option>
                                <option value="home_team">Home Team</option>
                                <option value="opp_team">Away Team</option>
                                <option value="home_team_score">Home Team Score</option>
                                <option value="opp_team_score">Away Team Score</option>
                            </select>
                            </div>
                    </div>
                </form>
                <button type="submit" className="btn-sm btn-primary" onClick={this.setup}>Submit</button>  
            </div> 

        )
    }
}

export default UpdateGame