import React from 'react'
import GameService from './GameService';

class DeleteGame extends React.Component {
    constructor(props){
        super(props)
        this.state={
            id: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.delete = this.delete.bind(this);


    }

    delete() {
        // const axios = require('axios')
        // axios.delete(`http://localhost:8081/api/game=${this.state.id}`)
        // .then(function (response) {
        //     console.log(response);
        //     this.props.changeGame()
        // })

        GameService.deleteById(this.state.id).then((res) => {
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
                <h3>Delete A Game By ID</h3>
                <form>
                    <label>ID: </label>
                    <input type="text" name="id" value={this.state.id} onChange={this.handleChange}/>
                </form>
                <button onClick={this.delete}>Submit</button>
            </div> 

        )
    }
}

export default DeleteGame