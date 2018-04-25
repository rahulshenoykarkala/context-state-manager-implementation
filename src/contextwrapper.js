import React from 'react'
const StateManager = React.createContext();
const Writer = (props) => <StateManager.Provider value={props.context}>{props.component}</StateManager.Provider>;
const Reader = StateManager.Consumer;
const Imbue = (View, state) => {
    return (
        ()=>
        <Reader>          
            { 
                context => {
                    var mappedState = context;
                    if(state === undefined) return <View {...context}/>
                    state.split(".").forEach((step)=>mappedState=mappedState[step])
                    return <View {...mappedState}/> 
                }
            }
        </Reader>
    )
}
export {Writer, Reader, Imbue}
