import React ,{Component} from 'react';
import './searchBar.css';

class SearchBar extends Component {

    constructor(props){
        super(props)
        this.state={
            search:''
        }

        this.searchImage=this.searchImage.bind(this);
    }
   

    inputChanged(event){
        console.log(event.target.value);
        this.setState({
            search:event.target.value
        })
    }

    searchImage () {
        this.props.onSearchImage(this.state.search)
    }

   render(){
    return(
        <div className='search-bar-container ui action input'>
            <input type='text' 
                    placeholder='Ara'
                    value={this.state.search}
                    onChange={this.inputChanged.bind(this)} 
                    onKeyPress={(e)=>{
                        
                        if(e.key==='Enter'){
                            this.searchImage();
                        }
                    }} /> 
            <button className="ui icon button" onClick={this.searchImage}>
                <i className="search icon"></i>
            </button>
        </div>
    )
   }
}

export default SearchBar;