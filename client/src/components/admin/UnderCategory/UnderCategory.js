import React, {useCallback, useEffect, useState} from 'react';
import {useHttp} from "../../../hooks/admin/http.hook";
import {ListSelectUnderCategory} from "./ListSelectUnderCategory/ListSelectUnderCategory";
import {useMessage} from "../../../hooks/admin/message.hook";

export const UnderCategory = () => {
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        category: '', under_category: ''
    });
    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])


    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    };

    const addUnderCategoryHandler = async () => {
        try {
            const data = await request('/api/category/add-under_category', 'POST', {...form});
            message(data.message)
        } catch (e) {
        }
    };
    // const message = useMessage()
    // const {loading, request, error, clearError} = useHttp();
    // const [form, setForm] = useState({
    //     category: '', under_category: ''
    // });
    // useEffect(() => {
    //     message(error);
    //     clearError();
    // }, [error, message, clearError])
    //
    // useEffect(() => {
    //     window.M.updateTextFields()
    // }, [])
    //
    //
    // const changeHandler = event => {
    //     setForm({...form, [event.target.name]: event.target.value})
    // };
    //
    // const addUnderCategoryHandler = async () => {
    //     try {
    //         const data = await request('/api/category/add-under_category', 'POST', {...form});
    //         message(data.message)
    //     } catch (e) {
    //     }
    // };

    return(
        <div className="row">
            <div className="col s6 offset-s3">
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Добавить подкатегорию</span>
                        <div>
                            <ListSelectUnderCategory onChange={changeHandler}/>
                            <div className="input-field">
                                <input
                                    placeholder="Подкатегория"
                                    id="under_category"
                                    type="text"
                                    name="under_category"
                                    className="yellow-input"
                                    disabled={loading}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="under_category">Подкатегория</label>
                            </div>
                            <div className="input-field">
                            </div>
                        </div>
                        <div className="card-action">
                            <button
                                className="btn yellow darken-4"
                                style={{marginRight: 20}}
                                onClick={addUnderCategoryHandler}
                            >
                                Добавить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};
