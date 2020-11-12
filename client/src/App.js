import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import 'materialize-css'
import AdminAreaPage from "./pages/AdminAreaPage";
import {Navbar} from "./components/client/Navbar/Navbar";
import {MainPage} from "./pages/client/MainPage";


function App() {
    return (
        <Router>
            <div>
                <AdminAreaPage/>
            </div>
            <Navbar/>
            <MainPage/>
        </Router>
);

}

export default App;
