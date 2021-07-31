import { Component } from "react";
import {FaSearch} from "react-icons/fa"
import $ from 'jquery'

export default class Navbar extends Component{

    componentDidMount(){
        $("#search-icon").click(function() {
            $(".nav").toggleClass("search");
            $(".nav").toggleClass("no-search");
            $(".search-input").toggleClass("search-active");
          });
          
          $('.menu-toggle').click(function(){
             $(".nav").toggleClass("mobile-nav");
             $(this).toggleClass("is-active");
          });
    }
    render(){
        return (
            <div className="nav-wrapper">
  <div className="grad-bar" />
  <nav className="navbar">
    <div className="menu-toggle" id="mobile-menu">
      <span className="bar" />
      <span className="bar" /> 
      <span className="bar" />
    </div> 
    <ul className="nav">
      <li className="nav-item"><a href="/">Home</a></li>
      <li className="nav-item"><a href="/category/Category">Category</a></li>
      <FaSearch id="search-icon"/>
      <input className="search-input" type="text" placeholder="Search.." />
    </ul>
  </nav>
</div>
        )
    }
}