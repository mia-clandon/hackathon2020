import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import 'materialize-css'
import AdminAreaPage from "./pages/AdminAreaPage";
import {Navbar} from "./components/client/Navbar/Navbar";
import {ContentAbout} from "./components/client/ContentAbout/ContentAbout";
import {ContentInfoAbout} from "./components/client/ContentInfoAbout/ContentInfoAbout";


function App() {
    return (
        <Router>
            <Navbar/>
            <ContentAbout/>
            <ContentInfoAbout/>
            <AdminAreaPage/>
        </Router>
);

}

export default App;
