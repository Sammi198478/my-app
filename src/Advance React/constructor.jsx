import React from "react";
class Example extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            favoriteColor: "red"
        }
    }
    static getDerivedStateFromProps(props, state){
        return{
            favoriteColor: props.color
        }
    }
    render(){
        return(
            <>
            <h1>This is my favoriteColor {this.state.favoriteColor}</h1>
            
            </>
        )
    }
}
export default Example;