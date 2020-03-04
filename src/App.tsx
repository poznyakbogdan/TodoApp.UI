import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Routing from "./Routing";

const App : React.FC = () => {
    return (
        <div className="container">
            <Router>
                <Routing/>
            </Router>
        </div>
    );
}

export default App;