import logo from './logo.svg';
import Navbar from './components/Navbar'
import './App.css';
import Home from './components/Home'
import Footer from './components/Footer';
import Post from './components/Post';
import Category from './components/Category';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      categories:{},
      isReady:false,
    }
  }
  componentDidMount(){
    fetch('/categories')
    .then(
      (response)=>response.json()
    )
    .then((data)=>{
      this.setState(
        {categories:data,
        isReady:true}
      )
    })
  }
  render(){
    let pathArray=window.location.pathname.split('/')
    return (
      <>
      <Router>
        <Navbar/>
        <Route exact path="/" component={ ()=><Home categories={this.state.categories}/> }/>
        <Route path="/blog" component={()=><Post slug={pathArray[pathArray.length-1]}/>}/>
        { this.state.isReady?
          Object.entries(this.state.categories).map(
            ([id,category])=>{
              return <Route path={"/category/"+category+'/'} component={() => <Category id={id} name={category}/>}/>
            })
          :
          <></>
      }
        <Footer/>
    </Router>
      </>
    );
  }
}

export default App;
