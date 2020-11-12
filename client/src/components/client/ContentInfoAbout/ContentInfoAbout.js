import React from 'react';
import 'materialize-css';

export const ContentInfoAbout = () => {

    return (
        <div className="contentInfoAbout" id="about">
            <h4>Мы обучаем основным этапам разработки web-приложения</h4>
            <div className="contentCardsInfoAbout">
                <div className="row">
                    <div className="col s12 m9">
                        <div className="card white darken-1">
                            <div className="card-content black-text inner_card">
                                <span className="card-title orange-text">Разработка</span>
                                <p>Веб-разработчик разрабатывает сайт на языках HTML, CSS и JavaScript. Создаёт интерфейсы с помощью библиотеки React. Настраивает Git, чтобы работать в команде, и Webpack, чтобы собирать файлы проекта автоматически. Веб-разработчик разбирается и в устройстве сервера: может настроить Nginx и запрограммировать сервер на Node.js.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m9">
                        <div className="card orange darken-1">
                            <div className="card-content white-text inner_card">
                                <span className="card-title black-text">Логотип</span>
                                <p>Логотип – это одна из составляющих айдентики, то есть фирменного стиля. Это основа, которая позволяет создать визуальное представление бренда, сделать его целостным и узнаваемым. Грамотно и креативно разработанный корпоративный стиль производит впечатление солидности и процветания компании. Итак, отправная точка в айдентике – логотип, именно его разработка считается трудоемкой и самой ответственной.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m9">
                        <div className="card white darken-1">
                            <div className="card-content black-text inner_card">
                                <span className="card-title orange-text">Копирайтинг</span>
                                <p>Копирайтинг обладает огромной информационно-рекламной ценностью, ведь пишутся тексты не для заполнения пустого места, а для взаимодействия с целевой аудиторией. И чем полезнее такие тексты и проще для восприятия, тем они эффективнее. Написание копирайтинга может базироваться на частичном использовании и переосмысливании информации из различных источников.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
