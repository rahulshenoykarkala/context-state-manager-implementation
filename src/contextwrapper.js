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
                    debugger;
                    state.split(".").forEach((step)=>mappedState=mappedState[step])
                    console.log(mappedState)
                    return <View {...mappedState}/> 
                }
            }
        </Reader>
    )
}
export {Writer, Reader, Imbue}
