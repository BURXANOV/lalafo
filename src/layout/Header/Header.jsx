import React, { useState } from "react";
import {Link} from "react-router-dom";
import {CgMenuGridO} from 'react-icons/cg'
import {LuSearch} from 'react-icons/lu'
import {FcHome} from 'react-icons/fc'
import {MdOutlineMapsHomeWork} from 'react-icons/md'
import {TbMap2} from 'react-icons/tb'
import {RiHome2Fill} from 'react-icons/ri'
import {GiHomeGarage} from 'react-icons/gi'
import {MdAddHomeWork} from 'react-icons/md'
 
import Popup from "../../components/Popup/Popup";
const Header= ({user, setUser})=>{
    const [popup, setPopup]= useState (false)
    const logOutUser=()=>{
        localStorage.removeItem('user')
        setUser({})
    }
    return(
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__left">
                        <h1 className="header__title"><Link className="header__title-link" to='/' >DADIL</Link></h1>
                        <Link className="header__link" to='#'>Для бизнеса</Link>
                    </div>
                    <div className="header__right">
                        {
                            user.email ?<div>
                                <p>{user.name}</p>
                                <button onClick={()=>logOutUser()} type={"button"}>Выйти</button>
                            </div>
                              :
                            <p  onClick={()=> setPopup(true)} className="header__login">Войти - Регистрация</p>
                       
                        }
                        <button type={"button"} className="header__btn">Подать обьяление</button>
                    </div>
                </nav>
            </div>
        {
            popup && <Popup user= {user} setUser={setUser} setPopup={setPopup} popup={popup}/>
        }
        <div className="header__bottom">
            <div className="container">
                <div className="header__bottom-search">
                    <input placeholder="     Я моснтр" className="header__bottom-input" type="text"  />
                    <span className="header__bottom-icon"><LuSearch/></span>
                </div>
                <ul className="header__bottom-list">
                    <li className="header__bottom-item">
                        <Link className="header__bottom-link" to='#' >
                          <div className="header__bottom-circle">
                            <CgMenuGridO/>

                        </div>
                        <p className="header__bottom-title">Все</p>
                        </Link>
                    </li>
                    <li className="header__bottom-item">
                        <Link className="header__bottom-link" to='#' >
                          <div className="header__bottom-circle">
                            <MdAddHomeWork/>

                        </div>
                        <p className="header__bottom-title">Квартира</p>
                        </Link>
                    </li>
                    <li className="header__bottom-item">
                        <Link className="header__bottom-link" to='#' >
                          <div className="header__bottom-circle">
                            <FcHome/>

                        </div>
                        <p className="header__bottom-title">Дома</p>
                        </Link>
                    </li>
                    <li className="header__bottom-item">
                        <Link className="header__bottom-link" to='#' >
                          <div className="header__bottom-circle">
                            <MdOutlineMapsHomeWork/>

                        </div>
                        <p className="header__bottom-title">Коммерческая недвижимость</p>
                        </Link>
                    </li>
                    <li className="header__bottom-item">
                        <Link className="header__bottom-link" to='#' >
                          <div className="header__bottom-circle">
                            <TbMap2/>

                        </div>
                        <p className="header__bottom-title">Земельные участки</p>
                        </Link>
                    </li>
                    <li className="header__bottom-item">
                        <Link className="header__bottom-link" to='#' >
                          <div className="header__bottom-circle">
                            <RiHome2Fill/>

                        </div>
                        <p className="header__bottom-title">Комнаты</p>
                        </Link>
                    </li>
                    <li className="header__bottom-item">
                        <Link className="header__bottom-link" to='#' >
                          <div className="header__bottom-circle">
                            <GiHomeGarage/>

                        </div>
                        <p className="header__bottom-title">Гаражи</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </header>
    );
};
export default Header;