import React, { Component } from 'react';
import { Imbue } from './contextwrapper';
import State from './state/state_header'

const View = (props) => {
    const { text, description } = props;
    return (
        <div>
            <h1>{text}</h1>
            <h2>{description}</h2>
        </div>
    )
}

export default Imbue(View, State);