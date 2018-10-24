import React, {Component} from 'react';



class Item extends Component{
	constructor(props){
        super(props);
        this.state={
          
        }
    }
save=(ev)=>{  
    this.setState({
        id:this.props.id,
        name:this.nameInput.current.value,
        desc:this.descInput.current.value
    },()=>this.props.changeParentState(this.state));  
}
//     increment = (ev) => {
//        ev.preventDefault();
//        this.setState({hasChanged:true});
//        
//        this.props.increment(this.props.name);
//    }
edit=(ev)=>{
    this.setState({editing:!this.state.editing})
    console.log(this.props.nameValue);
}

delete=(ev)=>{  
    this.setState({
   id:this.props.id
    },()=>this.props.changeParentState(this.state));  
}

editList=()=>{
   return <React.Fragment>  
        <li>
        
            <p><input type="text" store={this.state.name} onChange={this.nameInput}/></p>
            <p><input type="text" store={this.state.desc} onChange={this.descInput}/></p>           
            <button className="savebtn" onClick={this.save} >Save</button>
           
        </li>
        </React.Fragment>
}

store=()=>{
    return <React.Fragment>  
        <li>
            <p className="name">{this.props.info.name}</p>
            <p className="desc">{this.props.info.desc}</p>
           {console.log(this.props.name)}
	 {console.log(this.props.desc)}
<button className="editbtn" onClick={this.edit} >Edit</button>
            
<button className="deletebtn" onClick={this.delete} >Delete</button>
            
        </li>
        </React.Fragment>
}
    render(){
		
        
        return (
			
			this.state.editing?this.editList():this.store()      
            
			 
        );
    }

}
export default Item;
