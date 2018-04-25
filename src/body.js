import { Imbue } from './contextwrapper'
import React from 'react'

const View = ({changes, count}) => 
<div>
    <ul className="changelog">
        <li className="change_count"> {count} changes so far </li>
        {changes && changes.map((change)=><li key={change.ts}>{change.text}</li>)}
    </ul>
</div>
export default Imbue(View, "body.changelog")

