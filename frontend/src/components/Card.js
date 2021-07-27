import { Component } from "react";

export default class Card extends Component{
  constructor(props){
    super(props)
  }
    render(){
       return( <div className="item-2">
  <a href={"/blog/"+this.props.slug} className="card">
    <div className="thumb" style={{"background-image":"url('"+this.props.image_url+"')"}} />
    <article>
      <h1>{this.props.title}</h1>
      <span>{this.props.date}</span>
    </article>
  </a>
</div>
       )
    }
}