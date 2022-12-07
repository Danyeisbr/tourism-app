import React from "react";
import '../stylesheets/Landscape.css'

export default function Landscape(props) {
    return (
      <div className="container-landscape">
        <img 
        alt={`Photograph of ${props.location}`}
        className="image-landscape"
        src={require(`../images/img-${props.image}.jpg`)}/>
        <div className="container-text-place">
          <p className="name-place">{props.name}</p>
          <p className="location"><strong> {props.location} </strong></p>
          <p className="description-place">{props.description}</p>
        </div>
      </div>
    );
}