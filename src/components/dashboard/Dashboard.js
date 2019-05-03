import React,{Component} from 'react';
import {BrowserRouter} from "react-router-dom";

import Notifications from "./components/dashboard/Notifications";

export default class Dashboard extends Component{

    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">

                        <div className="col s12 m5 offset-m1">
                        <Notifications/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}
