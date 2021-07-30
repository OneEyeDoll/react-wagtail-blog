import { Component } from "react";
import ImageTitle from './ImageTitle'
import Layout from "./Layout";

export default class Post extends Component{
    constructor(props){
        super(props)
        this.state=
            {
                body:'',
                date:'',
                title:'',
                image:'',
                isReady:false,
            }
        

    }
    componentDidMount(){
        fetch('/api/v2/pages/?type=blog.BlogPage&fields=body,date,feed_image&title='+this.props.title,
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                body:data['items'][0]['body'],
                date:data['items'][0]['date'],
                title:data['items'][0]['title'],
                image:data['items'][0]['feed_image']['meta']['download_url'],
                isReady:true,
            })
        }
        )
    }
    render(){
        return(
            <>

            {   this.state.isReady?
                <ImageTitle title={this.state.title} imageUrl={this.state.image}/>
                :
                <>
                </>
                }
            <Layout body={this.state.body} date={this.state.date}/>
            </>
        )
    }
}
