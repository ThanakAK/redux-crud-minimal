import {combineReducers} from 'redux';
import users from './users';
import {routerReducer} from 'react-router-redux'

export const reducers=combineReducers({
    users:users,
    routing: routerReducer
})

export  function reducerCall(state , action, reducerClass){
  const [, method] = action.type.split('.')

  const methods =  Object.getOwnPropertyNames(reducerClass).filter(name=>{
    if('length' !== name && 'name' !==name && 'prototype'!==name){
      return name
    }
  })

  if(methods.find( x => x===method)){
      const new_state = cloneObject(state)
      return reducerClass[method](new_state, action)
  }else {
    return state
  }
}

function cloneObject(object){
  return JSON.parse(JSON.stringify(object))
}
