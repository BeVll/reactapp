import React, { Component } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Home from './components/Home';
export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
      
    }

   



    render() {
        return (
            <div>
                <Header></Header>
                <Outlet>
                </Outlet>
            </div>
            
        );
    }
    
   
}
