import React from 'react'
const StateManager = React.createContext();
const Writer = (props) => <StateManager.Provider value={{state:props.state, actions:props.actions}}>{props.component}</StateManager.Provider>;
const Reader = StateManager.Consumer;
const Imbue = 
    (View) => 
        (path)=>
            (actionpath)=>
                ()=>
                    <Reader>
                    { 
                        ({state, actions})=>{
                            var mappedState = state, mappedActions = actions;
                            typeof(path) === "string" && path.split(".").forEach((step)=>mappedState=mappedState[step])
                            typeof(actionpath) === "string" && actionpath.split(".").forEach((step)=>mappedActions=mappedActions[step])
                            return <View {...mappedState} {...mappedActions}/> 
                        }
                    }
                    </Reader>
            

export {Writer, Reader, Imbue}
