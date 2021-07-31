import { Component } from "react";
import Card from "./Card";
import CategoryTitle from "./CategoryTitle";

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            results:{},
            isReady:false,
        }
    }
    componentDidMount(){
        fetch("/api/v2/pages/?type=blog.BlogPage&fields=date,title,slug,feed_image&offset=0&limit=12")
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({
                results:data.items,
                isReady:true,
            })
        })
    }

    render(){
        return(
            <>
            <CategoryTitle name="Welcome"/>
            <div className="band">
            {this.state.isReady?

            Object.entries(this.state.results).map(
            ([id,object])=>{
                return <Card title={object.title}   image_url={object.feed_image.meta.download_url} date={object.date} slug={object.meta.slug}/>
            })
            :
                <>
                </>
            }
            </div>
            </>
        )
    }
}