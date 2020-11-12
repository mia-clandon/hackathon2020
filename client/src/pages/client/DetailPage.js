import React, {useCallback, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {useHttp} from "../../hooks/admin/http.hook";
import 'materialize-css';


export const DetailCopyPage = () => {
    const [category, setCategory] = useState([]);
    const {request} = useHttp();
    const fetchToCategory = useCallback(async()=>{
        try {
            const fetched = await request('/api/client/category', 'GET', null, {})
            setCategory(fetched)
        }
        catch (e) {}
    },[request]);

    useEffect(() => {
        fetchToCategory()
    }, [fetchToCategory])

    return(
        <div className="contentCardsInnerCourse">
            {category.map((category, index) => {
                return(
            <div className="card" key={category._id}>
                <div className="card-content">
                    <p>{category.under_category}</p>
                </div>
                <div className="card-content grey lighten-4">
                    <div id="test4">{category.lesson}</div>
                </div>
            </div>
                )
            }) }
            </div>
    )
};
