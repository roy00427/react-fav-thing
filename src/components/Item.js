import React, {Component} from 'react';



class Item extends Component{
	constructor(props){
        super(props);
        this.state={
        	id:this.props.id,
			name: this.props.info.name,
			desc: this.props.info.desc,
			editing: false
        }
    }
	
	save=(ev)=>{  
//		this.setState({
//			
//		},()=>this.props.changeParentState(this.state));  
	}
	
//     increment = (ev) => {
//        ev.preventDefault();
//        this.setState({hasChanged:true});
//        
//        this.props.increment(this.props.name);
//    }
	
	name=(ev)=>{
		console.log (ev.currentTarget.value)
	}
	
	desc=(ev)=>{
		console.log (ev.currentTarget.value)
	}
	
	
	edit=(ev)=>{
		this.setState({editing:!this.state.editing})
		//console.log(this.props.nameValue);
		//call the function in App.js to change state. pass your whole object from
		// item to the function in App.js
	}

	delete=(ev)=>{  
		this.setState({})
	   }

	editList=()=>{
	   return <React.Fragment>  
			<li>

				<p><input type="text" value={this.state.name} onChange={this.name}/></p>
				<p><input type="text" value={this.state.desc} onChange={this.desc}/></p>           
				<button className="savebtn" onClick={this.edit} >Save</button>

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
