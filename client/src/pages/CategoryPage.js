import React, {useEffect, useCallback, useState} from 'react';
import {useHttp} from "../hooks/http.hook";

export const CategoryPage = () => {
    const [category, setCategory] = useState([]);
    const {request} = useHttp();
    const fetchToCategory = useCallback(async()=>{
        try {
            const fetched = await request('/api/category', 'GET', null, {})
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
                        <td>{category.category}</td>
                    </tr>
                )
            }) }
        </div>
    )
};
