import React, {useCallback, useEffect, useState} from 'react';
import {useHttp} from '../hooks/http.hook'

export const CreatePage = () => {
    // const [category, setCategory] = useState([]);
    const {loading, request} = useHttp();
    const [form, setForm] = useState({
        category: ''
    })
    // const fetchToCategory = useCallback(async()=>{
    //     try {
    //         const fetched = await request('/api/category', 'GET', null, {})
    //         setCategory(fetched)
    //     }
    //         catch (e) {}
    // },[request]);
    //
    // useEffect(() => {
    //     fetchToCategory()
    // }, [fetchToCategory])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const addCategoryHandler = async () => {
        try {
            const data = await request('/api/category/add-category', 'POST', {...form})
        } catch (e) {}
    }

    return(
        <div>
            {category.map((category, index) => {
                return(
                    <tr key={category._id}>
                        <td>{index + 1}</td>
                        <td>{category.name}</td>
                    </tr>
                )
            }) }
        </div>
    )
};
