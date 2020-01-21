import React, { Component} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

export default class GifListContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
            gifs: []
        }
    }      

    handleSearch = query => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=EgVtEkbCvLp3b12hc3JaBQNV8y28DvaT&rating=g`
        fetch(url)
        .then(res => res.json())
        .then(json => {
            const imgData = json.data.map(img => ({
                url: img.images.original.url,
                key: img.images.original.url
            }))
            const newImg = []
            newImg.push(imgData[0], imgData[1], imgData[2])
            this.setState({
                gifs: newImg
                
            })
        })
        
    }

    render(){
        return(
            <div>
                < GifSearch handleSearch={this.handleSearch} />
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }
}