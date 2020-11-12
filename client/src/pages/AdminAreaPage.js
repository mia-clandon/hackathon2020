import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import 'materialize-css'
import {useRoutes} from "./../routers";
import {useAuth} from "./../hooks/admin/auth.hook";
import {AuthContext} from "./../context/admin/AuthContext";
import {Navbar} from "./../components/admin/Navbar/Navbar";


function AdminAreaPage() {
    const {token, login, logout, userId} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <Router>
                {isAuthenticated && <Navbar/>}
                <div className="container">
                    {routes}
                </div>
            </Router>
        </AuthContext.Provider>
    );

}

export default AdminAreaPage;
