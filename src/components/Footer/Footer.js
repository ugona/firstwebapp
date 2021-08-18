import React from "react";

class Footer extends React.Component{
    constructor(){
        super();
        // this.props
        this.state ={
            data: ' Footer working witj React Comonent....'// initialization default values
    }
    }
    componentWillMount(){
        this.setState(
            { data: 'new value'}// new value assignment
        );
    }
   render(){
      
    return (
        <div>
           { this.state.data}
        </div>
    )
   }
}

export default Footer;