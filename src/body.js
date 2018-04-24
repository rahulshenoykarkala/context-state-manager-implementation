import { Reader } from './contextwrapper'
import React from 'react'
export default function(){
    return (
        <ul>
            <Reader>
                {context => context.body.changelog.map((change)=><li key={change.ts}>{change.text}</li>)}
            </Reader>
        </ul>
    )
}