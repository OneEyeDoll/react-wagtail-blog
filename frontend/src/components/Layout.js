import { Component } from "react";
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";
  import { FaTwitterSquare, FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import Card from "./Card";
import ReactMarkdown from 'react-markdown'

export default class Layout extends Component{
    constructor(props){
        super(props)
        
        

    }

    
    render(){
        
        return(
            <section className="grid-container">
                  <div className="about" >
                        Follow us on Twitter
                        <FaTwitterSquare/>
                        <hr/>
                        Share:
                        <TwitterShareButton url={window.location.href}>
                            <FaTwitterSquare/>
                        </TwitterShareButton>
                        <FacebookShareButton url={window.location.href}>
                            <FaFacebookSquare/>
                        </FacebookShareButton>
                        <WhatsappShareButton url={window.location.href}>
                            <FaWhatsappSquare/>
                        </WhatsappShareButton>
                        <hr/>
                        {this.props.date}

                   </div>
                    <div className="contentLayout">
                    <ReactMarkdown>
                        {this.props.body}
                    </ReactMarkdown>

                    </div>
                    <div className="related" >
                        <h1>Related</h1>
                        <hr/>
                        <div className="band">
                            <Card/>
                        </div>
                    </div>
            </section>
            
        )
    }
}