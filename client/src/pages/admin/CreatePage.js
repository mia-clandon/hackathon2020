import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useHttp} from '../../hooks/admin/http.hook'
import {useMessage} from '../../hooks/admin/message.hook'
import {UnderCategory} from "../../components/admin/UnderCategory/UnderCategory";


export const CreatePage = () => {
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        category: ''
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

    const addCategoryHandler = async () => {
        try {
            const data = await request('/api/category/add-category', 'POST', {...form});
            message(data.message)
        } catch (e) {
        }
    };

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Добавить категорию</span>
                        <div>
                            <div className="input-field">
                                <input
                                    placeholder="Категория"
                                    id="category"
                                    type="text"
                                    name="category"
                                    className="yellow-input"
                                    disabled={loading}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="category">Категория</label>
                            </div>
                            <div className="input-field">
                            </div>
                        </div>
                        <div className="card-action">
                            <button
                                className="btn yellow darken-4"
                                style={{marginRight: 20}}
                                onClick={addCategoryHandler}
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
