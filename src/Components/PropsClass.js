import React, { Component } from "react";

class VariableClassProps extends Component{
    render(){
        return (
                <div>
                    <h1>Hey {this.props.name}, did you love {this.props.loves}??</h1>
                    {this.props.children}
                </div>
        )
    }
}

export default VariableClassProps