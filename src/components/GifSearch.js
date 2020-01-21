import React, { Component} from 'react'

export default class GifSearch extends Component {

    state={
        query: ''
    }

    handleChange = event => {
        event.persist()
        this.setState({
            [event.target.id]: event.target.value 
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleSearch(this.state.query)
    }
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <input type="text" id='query' value={this.state.query} onChange={this.handleChange}></input>
            <button type="submit" onSubmit={this.handleSubmit}>Search</button>
        </form>
        )
    }
}