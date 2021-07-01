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
            <div >
                <h3 className="center">Update A Game</h3>
                <div className="updateForm">
                <form>
                    <label>ID: </label>
                    <input type="text" name="id" value={this.state.id} onChange={this.handleChange}/>
                </form>

                
                {/* add a on chnage for the sleect element and that will detect everytime we change just like the input text */}
                <form>
                <label htmlFor="columns">Choose a stat column:</label>
                <select id="columns" >
                
                    <option value="date">Date</option>
                    <option value="home_team">Home Team</option>
                    <option value="opp_team">Opp Team</option>
                    <option value="home_team_score">Home Team Score</option>
                    <option value="opp_team_score">Opp Team Score</option>
                </select>
                </form>
                <form>
                    <label>Input: </label>
                    <input type="text" name="input" value={this.state.input} onChange={this.handleChange}/>
                </form>

                <button onClick={this.setup}>Update</button>
                </div>
            </div> 

        )
    }
}

export default UpdateGame