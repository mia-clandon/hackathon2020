import React, {useEffect, useCallback, useState} from 'react';
import {DetailCopyPage} from "../../../pages/client/DetailPage";


export const ContentProgramCourse = () => {
    const [showResults, setShowResults] = React.useState(false);
    const onClick = () => setShowResults(true);

    return (
        <div className="contentInfoAbout">
            <h4>Программа курсов</h4>
            <div className="contentCardsCourse">
                <div className="col s12 m9 card-padding">
                    <h5 className="header">Разработка frontend</h5>
                    <div className="card horizontal">
                        <div className="card-image">
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>Проходя данный курс вы ознакомитесь с основными инструментами frontend-разработки: HTML, CSS и JavaScript.</p>
                            </div>
                            <div className="card-action">
                                <a href="#">В разработке</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m9 card-padding">
                    <h5 className="header">Разработка логотипа</h5>
                    <div className="card horizontal">
                        <div className="card-image">
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>Проходя данный курс вы ознакомитесь с основными инструментами frontend-разработки: HTML, CSS и JavaScript</p>
                            </div>
                            <div className="card-action">
                                <a href="#">В разработке</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m9 card-padding">
                    <h5 className="header">Навык копирайтера</h5>
                    <div className="card horizontal">
                        <div className="card-image">
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>Проходя данный курс вы ознакомитесь с основными инструментами frontend-разработки: HTML, CSS и JavaScript</p>
                            </div>
                            <div className="card-action">
                                <input type="submit" value="Изучить" onClick={onClick} />
                                { showResults ? <DetailCopyPage /> : null }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};
