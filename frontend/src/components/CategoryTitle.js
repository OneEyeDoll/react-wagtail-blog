import { Component } from "react"

export default class CategoryTitle extends Component{
    constructor(props){
        super(props)
    }
    styleCategoryTitle={
        'text-align':'center',
    }
    render(){
        return(
            <h1 style={this.styleCategoryTitle}>
                {this.props.name}
            </h1>
        )
    }
}