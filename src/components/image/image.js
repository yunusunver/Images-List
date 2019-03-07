import React,{Component} from 'react';

class Image extends Component{
    constructor(props){
        super(props);

        this.state={
            spanCount:1
        }

        this.myRef = React.createRef();
    }

    componentDidMount(){

        this.myRef.current.addEventListener('load',()=>{

            const spanCount=parseInt(this.myRef.current.clientHeight/5)+2;

            this.setState({
                spanCount
            });
        });
    }

    render(){
        const {image}=this.props;
        return(
            <img ref={this.myRef} src={image.urls.small} alt={image.description} style={{gridRowEnd: `span ${this.state.spanCount}`}}/>
        )
    }
} 

export default Image;