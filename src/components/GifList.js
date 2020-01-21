import React, { Component } from 'react'

export default class GiftList extends Component {


    handleLiItem = () => {
        return (this.props.gifs.map(url => (
            <li key={url.key}>
                <img src={url.url} alt='' />
            </li>
        )))
    }
    render(){
        return(
            
            <ul>
                {this.handleLiItem()}
            </ul>
           
        )
    }
}