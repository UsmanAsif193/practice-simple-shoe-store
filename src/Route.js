import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export const Route = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' component={ } />
                </Switch>
            </Router>
        </div>
    )
}
