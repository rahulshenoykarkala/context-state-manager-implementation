import React from 'react';
import { Reader } from './contextwrapper'
import Utils from './utils'

export default function(){
    const { now } = Utils;
    return (
        <Reader>
            { context => {
                return (
                <div className="header_input">
                    <div>
                        <input placeholder={"Type header here and press enter"}
                            onKeyPress={(e)=> (e.keyCode===13 || e.which ===13) && context.changeHeaderText(e.target.value, now())}/> 
                    </div>
                    <div>
                        <input placeholder={"Type description here and press enter"}
                            onKeyPress={(e)=> (e.keyCode===13 || e.which ===13) && context.changeDescription(e.target.value, now())}/>
                    </div>
                </div>)
            }}
        </Reader>
    )
}

