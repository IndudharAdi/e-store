import React from "react";

const Category = props => {
    return (
     <div key={props.id}> {props.title} </div>
    )
};

export default Category;