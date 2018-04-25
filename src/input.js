import React from 'react';
import { Imbue } from './contextwrapper'
import Utils from './utils'

const View = ({changeHeaderText, changeDescription, text, description}) => {
    const { now } = Utils;
    return (
        <div className="header_input">
            <div>
                <input placeholder={text} title={"Type header here and press enter"}
                    onKeyPress={(e)=> (e.keyCode===13 || e.which ===13) && changeHeaderText(e.target.value, now())}/> 
            </div>
            <div>
                <input placeholder={description} title={"Type description here and press enter"}
                    onKeyPress={(e)=> (e.keyCode===13 || e.which ===13) && changeDescription(e.target.value, now())}/>
            </div>
        </div>
    )
}

export default Imbue(View)("header")("header")