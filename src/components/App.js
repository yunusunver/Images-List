import React , {Component} from 'react';
import SearchBar from '../components/searchBar/searchBar';
import ImageList from '../components/image/imageList';
import axios from 'axios';
import './App.css';

class App extends Component{

    state={
        images:[]
    }

    onSearchImage = async (search) => {
        console.log('App:'+search);
        const result =await axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query: search
            },
            headers:{
                Authorization: 'Client-ID f3708421c9af41cf963a72df228fe851fda6bbea02201872a7b4fbdce3083a1d'
            }
        })

        this.setState({
            images: result.data.results
        })
    }


    render(){
        return (
            <div className='app-container'>
                <SearchBar onSearchImage = {this.onSearchImage} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;