import React from "react"
import {Link} from "react-router-dom"
import { ReactComponent as CloseMenu } from "./Assets/x.svg";
import { ReactComponent as MenuIcon } from "./Assets/menu.svg";

import { useState } from "react";


class Nav extends React.Component 
{
    constructor(props){
        super(props)
        this.state={
            click: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.closeMobileMenu = this.closeMobileMenu.bind(this);
    }

    handleClick(){
        this.setState({click: !this.state.click})
    }
    closeMobileMenu(){
        this.setState({click: false})
    }

    render() 
    {
        return (
            // <div >
            //         <div className="nav">
            //             <h4 className="title">Summer Tournament Database</h4>
            //                 <Link className="link" to="/"><div>Home</div></Link>
            //                 <Link className="link" to="/AddGame"><div>AddGame</div></Link>
            //                 <Link className="link"to="/DeleteGame"><div>DeleteGame</div></Link>
            //                 <Link className="link" to="/UpdateGame"><div>UpdateGame</div></Link>
            //                 <Link className="link" to="/SearchById"><div>Search</div></Link>
            //         </div>
                    
            // </div> 

    <div className="nav">
        <div className="everything">
            <div className="title">
                <h4 className="title">Summer Tournament Database</h4>
            </div>

            {/* <ul className={this.state.click ? "nav-options active" : "nav-options"}>
                <li className="option" onClick={this.closeMobileMenu}>
                    <Link className="link" to="/"><div>Home</div></Link>
                </li>

                <li className="option" onClick={this.closeMobileMenu}>
                    <Link className="link" to="/AddGame"><div>AddGame</div></Link>
                </li>

                <li className="option" onClick={this.closeMobileMenu}>
                    <Link className="link"to="/DeleteGame"><div>DeleteGame</div></Link>
                </li>

                <li className="option mobile" onClick={this.closeMobileMenu}>
                    <Link className="link" to="/UpdateGame"><div>UpdateGame</div></Link>
                </li>

                <li className=" option mobile" onClick={this.closeMobileMenu}>
                    <Link className="link" to="/SearchById"><div>Search</div></Link>
                </li>
            </ul> */}
            <div className="routes">
                <div className={this.state.click ? "nav-options active" : "nav-options"}>
                    
                    <div className="option" onClick={this.closeMobileMenu}>
                        <Link className="link" to="/"><div>Home</div></Link>
                    </div>

                    <div className="option" onClick={this.closeMobileMenu}>
                        <Link className="link" to="/AddGame"><div>AddGame</div></Link>
                    </div>

                    <div className="option" onClick={this.closeMobileMenu}>
                        <Link className="link"to="/DeleteGame"><div>DeleteGame</div></Link>
                    </div>

                    <div className="option mobile" onClick={this.closeMobileMenu}>
                        <Link className="link" to="/UpdateGame"><div>UpdateGame</div></Link>
                    </div>

                    <div className=" option mobile" onClick={this.closeMobileMenu}>
                        <Link className="link" to="/SearchById"><div>Search</div></Link>
                    </div>
                </div> 
            </div>
        </div>
        <div className="mobile-menu" onClick={this.handleClick}>
            {this.state.click ? (
            <CloseMenu className="menu-icon" />
            ) : (
            <MenuIcon className="menu-icon" />
            )}
        </div>
        
    </div>
    

        )
    }
}

export default Nav

// const Nav = () => {
//     const [click, setClick] = useState(false);
//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);
    
//     return (
//       <div className="header">
//         <div className="logo-nav">
//           <div className="logo-container">
//             <a href="#/">
//               <h1>hey</h1>
//             </a>
//           </div>
  
//           <ul className={click ? "nav-options active" : "nav-options"}>
//             <li className="option" onClick={closeMobileMenu}>
//               <a href="#/">ABOUT</a>
//             </li>
//             <li className="option" onClick={closeMobileMenu}>
//               <a href="#/">CONTACT</a>
//             </li>
//             <li className="option" onClick={closeMobileMenu}>
//               <a href="#/">BLOG</a>
//             </li>
//             <li className="option mobile-option" onClick={closeMobileMenu}>
//               <a href="#/">SIGN-IN</a>
//             </li>
//             <li className=" option mobile-option" onClick={closeMobileMenu}>
//               <a href="/" className="sign-up">
//                 SIGN-UP
//               </a>
//             </li>
//           </ul>
//         </div>
        
//         <div className="mobile-menu" onClick={handleClick}>
//           {click ? (
//             <CloseMenu className="menu-icon" />
//           ) : (
//             <MenuIcon className="menu-icon" />
//           )}
//         </div>
//       </div>
//     );
//   };
  
//export default Nav;