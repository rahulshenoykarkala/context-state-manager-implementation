import React from 'react'
const StateManager = React.createContext();
const Writer = (props) => <StateManager.Provider value={props.context}>{props.component}</StateManager.Provider>;
const Reader = StateManager.Consumer;
const Imbue = (View, state) => {
    return (
        ()=>
        <Reader>
            { 
                context => <View {...context[state]}/> 
            }
        </Reader>
    )
}
export {Writer, Reader, Imbue}
