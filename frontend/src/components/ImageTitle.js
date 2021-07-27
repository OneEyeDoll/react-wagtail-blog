import styled from 'styled-components';
import { Component } from 'react';

export default class ImageTitle extends Component {

    constructor(props){
        super(props);
    }
    imageTitleStyle={
'background-image': 'url('+this.props.imageUrl+')',
'opacity':'0.5',
'width':'100vw',
'height':'50vh',
 'background-position': 'center center',
 'background-attachment': 'fixed',
    };
    imageTitleStyleH1={
        'opacity':'1',
        'color':'white',
        'text-align':'center',
        'border':'1vw'
    }

    render(){
        return (
            <>
            
        <section style={this.imageTitleStyle}>
        <h1 style={this.imageTitleStyleH1}>{this.props.title}</h1>
        </section>
        </>
        );
        
    }
}