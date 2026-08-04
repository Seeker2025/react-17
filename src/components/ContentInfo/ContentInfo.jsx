import { Component } from "react";
import { getNews } from '../services/getNews';
import { ErrorCard } from '../ErrorCard/ErrorCard';

export class ContentInfo extends Component {
    state ={
        news: null,
        // isLoading: false,
        error: '',
        status: 'idle'
    }

    componentDidUpdate(prevProps, prevState){
        console.log('this.props >>', this.props);
        
        if(prevProps.searchText !== this.props.searchText){

            this.setState({ status: 'pending' })     

            getNews(this.props.searchText)
                .then((response)  => response.json())
                .then((data) => {
                    console.log(data);
                    
                    if(data.status === 'ok')
                        this.setState({ news: data.articles, status: 'resolved' })
                    else return Promise.reject(data.message)
                })
                .catch((error)=>{
                    
                    this.setState({ error, status: 'rejected' })
                 
                    
                })
                // .finally(()=>{
                //     this.setState({ isLoading: false })
                // })
        }
    }
        render(){
           
            const { news, error } = this.state
            if(this.state.status === 'pending')
                return (
               <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                        </div>
                )
                
            else if(this.state.status === 'resolved') 
                return (
                 <ul>
                        
                            {news.map((el) =>{
                                return <li key ={el.url}>{el.title}</li>
                            })}
                        
                    </ul>
            )
            else if(this.state.status === 'rejected')
                return <ErrorCard>{error}</ErrorCard>
            
            
          
            
        }
    
}