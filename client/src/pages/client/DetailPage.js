import React, {useCallback, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {useHttp} from "../../hooks/admin/http.hook";


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
        <div>
            {category.map((category, index) => {
                return(
                    <tr key={category._id}>
                        <td>{index + 1}</td>
                        <td>{category.under_category}</td>
                    </tr>
                )
            }) }
            </div>
    )
};
