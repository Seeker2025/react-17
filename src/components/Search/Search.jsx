import { Component } from "react";
// import css from './Search.module.css';

export class Search extends Component{

    state ={
        value: '',
    }

    handleChange = (e) => {
        this.setState({ value:e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
        this.props.handleSearch(this.state.value)
    }

    render(){
        return (
            <>
        <form 
        className = 'd-flex mt-2'  
        role = 'search'
        onSubmit = {this.handleSubmit}
        >
                    <input
                        className='form-control me-2'
                        type = 'search'
                        placeholder='Search'
                        aria-label = 'Search'
                        onChange ={this.handleChange}
                    />

            <button className='btn btn-outline-success' type='submit'>
                Search
            </button>        
        </form>
            </>
        )
    }
}