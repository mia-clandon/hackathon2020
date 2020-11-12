import React, {useCallback, useEffect, useState} from 'react';
import {useHttp} from "../../../../hooks/admin/http.hook";

export const ListSelectUnderCategory = () => {
    const [category, setCategory] = useState([]);
    const {request} = useHttp();
    const [form, setForm] = useState({
        category: ''
    });
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


    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    };

    return(
        <div className="listSelectCategory">
            <label htmlFor="categories"> Категория
                <input
                    list="categories"
                    name="category"
                    onChange={changeHandler}
                />
            </label>
            <datalist id="categories">
                {category.map((category, index) => {
                    return(
                        <option key={index} value={category.category}/>
                    )
                } )}
            </datalist>
        </div>
    )
};
