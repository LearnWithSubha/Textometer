import React from "react";

const VariableProps = props => {
    return(
        <div>
            <h1>Hey {props.name}, did you love {props.loves}??</h1>
            {props.children}
        </div>
    )
}


export default VariableProps