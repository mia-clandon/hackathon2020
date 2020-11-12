import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {CategoryPage} from './pages/admin/CategoryPage'
import {CreatePage} from './pages/admin/CreatePage'
import {DetailPage} from './pages/admin/DetailPage'
import {AuthPage} from './pages/admin/AuthPage'
import {UnderCategory} from "./components/admin/UnderCategory/UnderCategory";
import {DetailCopyPage} from "./pages/client/DetailPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <CategoryPage />
                </Route>
                <Route path="/under-categories" exact>
                    <UnderCategory />
                </Route>
                <Route path="/create" exact>
                    <CreatePage />
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    } else if(!isAuthenticated){
        return (
            <Switch>
                <Route path="/admin-area" exact>
                    <AuthPage />
                </Route>
                <Route path="/detail-lesson" exact>
                    <DetailCopyPage />
                </Route>
                <Redirect to="/detail-lesson" />
            </Switch>
        )
    }

    return (
        <h1>test</h1>
    )
};
