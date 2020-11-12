import React, {useEffect, useCallback, useState} from 'react';
import {useHttp} from "../../../hooks/admin/http.hook";

export const ContentInfoCourse = () => {
    const [under_category, setUnderCategory] = useState([]);
    const {request} = useHttp();
    const fetchToUnderCategory = useCallback(async()=>{
        try {
            const fetched = await request('/api/client/category', 'GET', null, {})
            setUnderCategory(fetched)
        }
        catch (e) {}
    },[request]);

    useEffect(() => {
        fetchToUnderCategory()
    }, [fetchToUnderCategory])

    return(
        <div>
            {under_category.map((under_category, index) => {
                return(
                    <tr key={under_category._id}>
                        <td>{index + 1}</td>
                        <td>{under_category.category}</td>
                        <td>{under_category.under_category}</td>
                        <td>{under_category.lesson}</td>
                    </tr>
                )
            }) }
        </div>
    )
};
