import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
import { Link } from "react-router-dom";


class Nav extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className={style.nav}>  
               <SearchBar onSearch={this.props.onSearch}/>
               <Link to="/about">ABOUT</Link>
               <Link to="/home">HOME</Link>
               <Link to="/detail">DETAIL</Link>
            </div>
    
        );
    }

}

export default Nav;