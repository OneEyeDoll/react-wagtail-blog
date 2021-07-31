import { Component } from "react";
import Card from "./Card";
import CategoryTitle from "./CategoryTitle";
import Pagination from "./Pagination";

export default class Category extends Component{
    constructor(props){
        super(props)
        this.state = {
            activePage: 1,
            results:{},
            isReady:false
          };
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
    componentDidMount(){
        fetch("/api/v2/pages?type=blog.BlogPage&offset="+((this.state.activePage-1)*12).toString()
        +"&limit=12&fields=date,title,slug,feed_image&category="+this.props.id)
        .then(
            (data)=>data.json()
        )
        .then(
            (data)=>{
                this.setState ({
                    activePage: 1,
                    results:data.items,
                    isReady:true,
                  });
            }
        );
        
        
    }
    render(){
        return (
            <>
            <h1><CategoryTitle name={this.props.name}/></h1>

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
            <div className="pagebar">
            <Pagination totalRecords={36} pageLimit={12} pageNeighbours={3} onPageChanged={void(0)} />
        </div>
        
            </>
        )
    }
}