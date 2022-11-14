import "./style.scss";

const Cooperation = () => {
    return (
        <section className="section page-section cooperation fp-auto-height" id="cooperation">
            <div className="container">
                <div className="cooperation__inner">
                    <div className="cooperation__item-info">
                        <h2 className="cooperation__title section__title">Причины сотрудничать с нами</h2>
                        <p className="cooperation__text">
                            Вы можете ознакомиться с информацией о нас и посмотреть наше портфолио
                        </p>
                        <p className="cooperation__text">
                            Пока конкуренты говорят о том, что они лучшие - мы это доказываем делом.
                        </p>
                        <a className="cooperation__btn" href="#portfolio">Портфолио</a>
                    </div>
                    <div className="cooperation__item cooperation__item-first">
                        <h3 className="cooperation__item-title">Приемлимые цены</h3>
                        <p className="cooperation__item-text">
                            Мы максимально оптимизируем наш труд, для того, чтобы цены были доступными
                        </p>
                        <svg className="cooperation__item-icon cooperation__item-icon-money" width="205" height="187" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M138.204 51.36c-15.275-9.371-39.951-9.371-55.137 0-15.185 9.371-15.094 24.605.181 33.976 15.276 9.371 39.952 9.371 55.137 0 15.185-9.419 15.095-24.605-.181-33.976zm-7.005 14.754c-1.311.432-2.621.913-3.932 1.345-.813.24-1.31.288-1.672.096a2.39 2.39 0 0 1-.542-.625c-.859-1.49-2.17-2.787-3.932-3.844a11.498 11.498 0 0 0-.769-.433 7.254 7.254 0 0 0-1.853-.768c-2.53-.625-4.79.384-4.474 2.066.136.865.588 1.634 1.13 2.45.904 1.346 1.898 2.692 2.531 4.134 2.124 4.517-2.486 8.986-9.897 9.419-2.667.144-5.198-.192-7.548-1.01-1.04-.336-1.808-.336-2.576.241-.768.529-1.627 1.01-2.44 1.49-.724.432-1.492.48-2.215.048-.542-.288-1.04-.625-1.582-.913-.361-.24-.723-.433-1.084-.673-.769-.48-.678-.961.045-1.442.587-.384 1.175-.72 1.717-1.105 1.31-.817 1.31-.865.226-1.778-1.356-1.154-2.576-2.355-3.344-3.7-.588-1.058-.452-1.298 1.13-1.875 1.175-.384 2.305-.817 3.48-1.201.858-.289 1.355-.337 1.717-.144.226.144.362.336.542.672.769 1.538 2.08 2.884 3.661 4.181.271.24.588.433.859.625.858.529 1.853.913 2.983 1.201 2.937.721 5.558-.528 5.287-2.498-.09-.673-.407-1.25-.813-1.875-.995-1.585-2.305-3.075-2.983-4.757-1.085-2.692-.588-5.142 2.892-7.065 3.977-2.162 8.406-2.306 13.107-.96 1.943.576 1.898.576 3.389-.337.497-.337.994-.625 1.492-.913 1.129-.673 1.536-.673 2.666 0 .362.192.678.432 1.039.624 2.396 1.442 2.396 1.442.046 2.932-1.673 1.01-1.673 1.01-.272 2.21 1.085.914 1.944 1.875 2.577 2.932.497.529.316.961-.588 1.25zm27.388 31.621c-4.203 2.595-11.028 2.595-15.276 0-4.203-2.595-4.248-6.824-.045-9.42 4.203-2.594 11.027-2.594 15.275 0 4.249 2.596 4.294 6.825.046 9.42zM78.141 48.332c-4.203 2.596-11.027 2.596-15.275 0-4.248-2.595-4.248-6.824-.045-9.419 4.203-2.595 11.027-2.595 15.275 0 4.203 2.595 4.248 6.824.045 9.42zM215.757 77.6 95.315 3.64c-6.96-4.277-18.258-4.277-25.173 0L5.56 43.527c-6.915 4.277-6.87 11.245.09 15.522l120.442 73.96c6.96 4.277 18.258 4.277 25.173 0l64.537-39.887c6.96-4.278 6.915-11.246-.045-15.523zm-63.181 41.329a15.107 15.107 0 0 0-2.757-2.162c-7.05-4.326-18.484-4.326-25.489 0-.543.336-.995.672-1.492 1.057L29.332 60.395a21.952 21.952 0 0 0 2.576-1.298c7.005-4.325 6.96-11.341-.09-15.666a14.81 14.81 0 0 0-2.441-1.25l38.55-23.836c.588.529 1.266 1.01 2.034 1.49 7.05 4.325 18.484 4.325 25.49 0 .813-.48 1.491-1.01 2.124-1.586l93.822 57.572c-1.265.48-2.395 1.01-3.48 1.682-7.005 4.325-7.005 11.39.091 15.715 1.085.672 2.305 1.201 3.57 1.682l-39.002 24.028zM2.486 73.851c3.074-1.682 7.82-1.442 10.757.384l125.91 77.276 68.062-42.098c2.938-1.826 7.774-1.826 10.756 0 2.983 1.826 2.983 4.806.046 6.632l-72.356 44.693c-3.525 2.21-9.31 2.21-12.88 0l-2.531-1.538-1.763-1.105L2.261 80.627c-3.074-1.874-3.028-4.998.226-6.776zm215.621 66.366-72.356 44.693c-3.525 2.211-9.309 2.211-12.88 0l-2.485-1.538-1.808-1.105L2.351 104.799c-3.073-1.874-2.983-4.998.271-6.776 3.028-1.682 7.819-1.441 10.756.385l125.866 77.275 68.062-42.049c2.982-1.827 7.773-1.827 10.756 0 2.983 1.778 3.028 4.757.045 6.583z" fill="url(#a)" />
                            <defs>
                                <linearGradient id="a" x1="19" y1="43" x2="183" y2="173" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#414141" />
                                    <stop offset="1" stop-color="#262626" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="cooperation__item cooperation__item-second ">
                        <h3 className="cooperation__item-title">В сроки сдаем работу!</h3>
                        <p className="cooperation__item-text">
                            Расписываем каждый этап по срокам, и придерживаемся дедлайнов
                        </p>
                        <svg className="cooperation__item-icon cooperation__item-icon-clock" width="200" height="189" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M104.5 0C83.832 0 63.628 6.217 46.443 17.864 29.258 29.512 15.864 46.067 7.955 65.436a107.415 107.415 0 0 0-5.947 61.244c4.032 20.562 13.985 39.449 28.6 54.273 14.614 14.825 33.234 24.92 53.505 29.01a103.124 103.124 0 0 0 60.377-6.032c19.095-8.023 35.416-21.609 46.899-39.041C202.871 147.459 209 126.965 209 106c0-28.113-11.01-55.075-30.607-74.953C158.795 11.167 132.215 0 104.5 0zm0 185.5c-15.501 0-30.654-4.663-43.543-13.398-12.889-8.736-22.934-21.152-28.866-35.679a80.56 80.56 0 0 1-4.46-45.933c3.024-15.421 10.489-29.587 21.45-40.705 10.96-11.118 24.926-18.69 40.129-21.757a77.345 77.345 0 0 1 45.283 4.524c14.321 6.017 26.562 16.206 35.173 29.28 8.612 13.074 13.209 28.444 13.209 44.168-.022 21.078-8.287 41.286-22.98 56.19-14.694 14.904-34.616 23.287-55.395 23.31z" fill="url(#a)" />
                            <path d="M130.756 106h-19.725a6.486 6.486 0 0 1-4.618-1.94 6.675 6.675 0 0 1-1.913-4.685V79.368a13.264 13.264 0 0 0-.983-5.021 13.115 13.115 0 0 0-2.803-4.257 12.91 12.91 0 0 0-4.196-2.843 12.767 12.767 0 0 0-4.95-.997h-.261c-1.699 0-3.38.338-4.95.997a12.915 12.915 0 0 0-4.196 2.843 13.125 13.125 0 0 0-2.803 4.257 13.273 13.273 0 0 0-.983 5.02v40.016c0 1.722.333 3.428.983 5.02a13.124 13.124 0 0 0 2.803 4.257 12.92 12.92 0 0 0 4.196 2.843c1.57.659 3.251.998 4.95.997h39.449a12.76 12.76 0 0 0 4.949-.997 12.915 12.915 0 0 0 4.197-2.843 13.13 13.13 0 0 0 2.803-4.257c.649-1.592.983-3.298.983-5.02v-.265c0-1.723-.334-3.429-.983-5.021a13.13 13.13 0 0 0-2.803-4.257 12.915 12.915 0 0 0-4.197-2.843 12.76 12.76 0 0 0-4.949-.997z" fill="url(#b)" />
                            <defs>
                                <linearGradient id="a" x1="38" y1="29" x2="178" y2="175" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#414141" /><stop offset=".728" stop-color="#262626" />
                                </linearGradient>
                                <linearGradient id="b" x1="78" y1="66" x2="137" y2="139" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#404040" /><stop offset="1" stop-color="#282828" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="cooperation__item cooperation__item-third">
                        <h3 className="cooperation__item-title">Команда специалистов</h3>
                        <p className="cooperation__item-text">
                            В нашей команде множество специалистов, и каждый из них хорошо знает свое дело
                        </p>
                        <svg className="cooperation__item-icon cooperation__item-icon-user" width="130" height="183" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m119.738 64.687-21.87-28.645c-2.306-3.023-5.853-4.792-9.608-4.792H54.463c-3.754 0-7.302 1.769-9.608 4.792l-21.87 28.645c1.515 22.915 12.322 42.024 30.121 49.747v-.006c5.544 2.396 11.66 3.737 18.256 3.737s12.712-1.341 18.255-3.743v.006c17.799-7.717 28.6-26.826 30.121-49.74zM53.106 80.916c-3.358 0-6.085-2.781-6.085-6.209 0-3.426 2.727-6.208 6.085-6.208 3.36 0 6.086 2.782 6.086 6.209 0 3.427-2.727 6.208-6.086 6.208zm36.511 0c-3.359 0-6.085-2.781-6.085-6.209 0-3.426 2.726-6.208 6.085-6.208 3.36 0 6.085 2.782 6.085 6.209 0 3.427-2.726 6.208-6.085 6.208zM22.681 54.978V25.04C22.68 11.327 33.579.208 47.02.208h48.681c13.442 0 24.341 11.12 24.341 24.833v29.937L102.67 32.23c-3.457-4.538-8.775-7.189-14.41-7.189H54.457c-5.635 0-10.953 2.651-14.41 7.19L22.682 54.977zM142.637 171.4l-2.057-9.653c-1.649-9.232-8.13-16.639-16.759-19.271l-28.819-10.715-5.233 4.619a27.882 27.882 0 0 1-18.505 7.046 27.757 27.757 0 0 1-18.443-7.022l-5.185-4.569-28.54 10.579c-8.804 2.701-15.303 10.107-16.946 19.345L.349 171.817c-1.363 7.624 4.375 14.639 11.969 14.639H130.74c7.765 0 13.546-7.313 11.897-15.055zm-22.594-3.569c0 3.427-2.726 6.208-6.085 6.208H95.702c-3.359 0-6.085-2.781-6.085-6.208v-6.209c0-3.427 2.726-6.208 6.085-6.208h18.256c3.359 0 6.085 2.781 6.085 6.208v6.209zm-48.681-43.458c6.53 0 12.633-1.149 18.255-3.222v7.152l-3.834 3.389c-8.02 7.109-20.957 7.127-28.97.025l-3.707-3.265v-7.295c5.623 2.067 11.726 3.216 18.256 3.216zm24.34 37.249h18.256v6.209H95.702v-6.209z" fill="url(#a)" />
                            <defs>
                                <linearGradient id="a" x1="-37" y1="23" x2="108" y2="186" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#414141" />
                                    <stop offset="1" stop-color="#262626" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="cooperation__item cooperation__item-fourth">
                        <h3 className="cooperation__item-title">Консультация перед заказом</h3>
                        <p className="cooperation__item-text">
                            Наши менеджеры в сети 24/7, и готовы помочь вам, а так же ответить на ваши вопросы
                        </p>
                        <svg className="cooperation__item-icon cooperation__item-icon-headphone" width="183" height="189" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M171.329 75.432C171.329 32.97 137.706 0 96.373 0 55.04 0 21.416 32.97 21.416 73.5 8.963 79.769 0 91.308 0 105v21c0 8.354 3.385 16.366 9.409 22.274 6.024 5.907 14.195 9.226 22.715 9.226h10.708c2.84 0 5.564-1.106 7.572-3.075A10.4 10.4 0 0 0 53.54 147V84c0-2.785-1.128-5.456-3.136-7.425a10.817 10.817 0 0 0-7.572-3.075c0-13.924 5.641-27.277 15.682-37.123C68.554 26.53 82.173 21 96.373 21c14.2 0 27.818 5.531 37.859 15.377 10.04 9.846 15.681 23.2 15.681 37.123-2.84 0-5.563 1.106-7.571 3.075A10.395 10.395 0 0 0 139.205 84v63c0 2.785 1.128 5.455 3.137 7.425a10.815 10.815 0 0 0 7.571 3.075V168h-27.755c-2.206-6.1-8.095-10.5-15.077-10.5H85.665c-4.26 0-8.346 1.659-11.358 4.613-3.012 2.954-4.704 6.96-4.704 11.137 0 4.177 1.692 8.183 4.704 11.137C77.32 187.341 81.405 189 85.665 189h64.248c5.68 0 11.127-2.212 15.144-6.151 4.016-3.938 6.272-9.279 6.272-14.849v-12.421c6.251-2.154 11.667-6.155 15.502-11.453A30.998 30.998 0 0 0 192.746 126v-21a30.98 30.98 0 0 0-5.914-18.123c-3.836-5.296-9.252-9.294-15.503-11.445L-74.957 651 171.33 75.432z" fill="url(#a)" />
                            <defs>
                                <linearGradient id="a" x1="34.651" y1="40.576" x2="153.844" y2="193.825" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#3C3C3C" />
                                    <stop offset="1" stop-color="#262626" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cooperation;


