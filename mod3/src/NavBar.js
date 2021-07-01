import React from "react"
import {Link} from "react-router-dom"



class Nav extends React.Component 
{

    render() 
    {
        return (
            <div>
                <nav>
                    <div className="nav">
                    <h4 className="title">Summer Tournament Database</h4>
                        <Link className="link" to="/"><div>Home</div></Link>
                        <Link className="link" to="/AddGame"><div>AddGame</div></Link>
                        <Link className="link"to="/DeleteGame"><div>DeleteGame</div></Link>
                        <Link className="link" to="/UpdateGame"><div>UpdateGame</div></Link>
                        <Link className="link" to="/SearchById"><div>SearchById</div></Link>
                    </div>
                </nav>
            </div> 

        )
    }
}

export default Nav