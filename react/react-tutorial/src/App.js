import React, {Fragment}from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet,Greet1,Hello} from './components/Greet.js'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Form from './components/Form'
import FragmentDemo from './components/FragmentDemo'


import ParentComp from './components/ParentComp'
import RefsCom from './components/Refs'
 
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary';

import HOCClickCounter from './components/hoc/clickCounter'
import HoverCounter from './components/hoc/hoverCounter'

import AllCTXCom from './components/context/AllComp'

import HooksAll from './components/hooks/HooksAll';
function App() {
  return (
    
    <div className="App">
      <HooksAll></HooksAll>
       <Greet name="Bruce">
          <p>children props</p>
       </Greet>
       <Greet1></Greet1>
       <Hello></Hello>
       <Welcome></Welcome>
       <Message></Message>
       <Counter addStep="1"></Counter>
       <FunctionClick/>
       <ClassClick/>
       <EventBind/>
       <ParentComponent/>
       <UserGreeting/>
       <NameList/>
       <Form/>
      <FragmentDemo/>


     
      <ParentComp/>
      <RefsCom/>

      <ErrorBoundary><Hero name="joker"/><Hero name="joker"/></ErrorBoundary>

      <HOCClickCounter/>
      <HoverCounter/>

      <AllCTXCom/>
    </div>
   
 
  );
}

export default App;
