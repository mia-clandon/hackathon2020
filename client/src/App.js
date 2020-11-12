import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import 'materialize-css'
import AdminAreaPage from "./pages/AdminAreaPage";
import {MainPage} from "./pages/client/MainPage";
import {Footer} from "./components/client/Footer/Footer";
import {NavbarClient} from "./components/client/Navbar/NavbarClient";
import {DetailCopyPage} from "./pages/client/DetailPage";


function App() {
    return (
        <Router>
            <NavbarClient/>
            <MainPage/>
            <div>
                <AdminAreaPage/>
            </div>
            <Footer/>
        </Router>
);

}

export default App;
