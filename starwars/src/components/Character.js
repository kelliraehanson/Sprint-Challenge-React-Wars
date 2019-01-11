import React from 'react';
import './StarWars.css';

const Character = props => {

    return (

      <div className="charInfo">
        <h2>{props.character.name}</h2>
        <h3>&middot;&nbsp;GENDER: {props.character.gender}</h3>
        <h3>&middot;&nbsp;BIRTH YEAR: {props.character.birth_year}</h3>
        <h3>&middot;&nbsp;HEIGHT: {props.character.height}</h3>
        <h3>&middot;&nbsp;EYE COLOR: {props.character.eye_color}</h3>
        <h3>&middot;&nbsp;HAIR COLOR: {props.character.hair_color}</h3>
        <h3>&middot;&nbsp;SKIN COLOR: {props.character.skin_color}</h3>
        <h3>&middot;&nbsp;MASS: {props.character.mass}</h3>
        </div>

    );
};

export default Character; 





