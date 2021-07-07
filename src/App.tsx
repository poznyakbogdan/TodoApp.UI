import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Routing from "./Routing";
import NavigationBar from "./components/navigation/NavigationBar";

const App : React.FC = () => {
    return (
        <div className="container">
            <Router>
                <NavigationBar />
                <Routing/>
            </Router>
        </div>
    );
}

export default App;