import React,{Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props);

        this.loadMore=this.loadMore.bind(this);
        const height_input = window.innerHeight;
        if(height_input>=768){
            // alert("des=="+height_input);
            // this.setState({current_window:4})
            var cur_h=4;
         }else if(height_input<=767 && height_input>=480){
             //alert("tab=="+height_input);
             //this.setState({current_window:3})
             var cur_h=3;
         }else{
            // alert("mob=="+height_input);
             //this.setState({current_window:2})
             var cur_h=1;
         }

        this.state={
            datas:[],
            window1:3,
            window2:1,
            current_window:cur_h,
            selected_row:0,
            selected_data:[],
        }
       

        

       
       
    }
    componentDidMount(){
        fetch('products.json')
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({datas:data}) ;
            var sdata=this.state.datas.slice(this.state.selected_row,this.state.current_window);
            this.setState({
                selected_data:sdata,
                selected_row:this.state.current_window  
            })
        }                    
        );
    }

    loadMore(){
        const selected_row=this.state.current_window;
        const current_window=this.state.selected_row+this.state.current_window;
        var sdata=this.state.datas.slice(0,current_window);
           
        this.setState({
            selected_data:sdata,
            selected_row:current_window     
        })
        console.log(this.state.selected_row);
    }

    render(){
        return(
            <div className="container bg-light">            
                              
                       
                        <div className="col-md-12">
                        
                            <h2>Lazy Loading Sample</h2>
                            <div className="col-md-12">
                                {this.state.selected_data.map((product,key)=>                                
                                    <DisplayConetent key={key} data={product} />                            
                                )}
                            {this.state.datas.length >this.state.selected_data.length ? 
                                (<div className="col-md-12">
                                    <button className="btn btn-success" onClick={this.loadMore}>View More</button>
                                </div>)
                                :''
                            }
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                      
                       
               
                
            </div>
        )
    }
}

export default Home;

class DisplayConetent extends Component{
    render(){
        return(
            <div className="col-md-12">
                <h4>{this.props.data.id}:{this.props.data.title}</h4>
                <p>{this.props.data.description}</p>
                <hr></hr>
            </div>
        )
    }
}
