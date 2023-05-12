import React, { useState } from 'react'
import "./Footer.scss";
import { FooterMenu } from "../../utils/constant.js";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {

    return (
        <div>
            <footer>
                <div className="menu">
                    {
                        FooterMenu.map((element, index) => {
                            return (
                                <div key={index} className='menu-column'>
                                    <h2 className='footer-title'>{element.title}</h2>
                                    <ul className='footer-menu-list'>
                                        {element.subMenu.map((list) => {
                                            return (
                                                <li key={list}>
                                                    <a href='#'>{list}</a>
                                                </li>
                                            )
                                        })}

                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='bottom'>
                    <div className='helpline'>
                        <div className='helpline-title'>
                            <h5>
                                Helpline Number
                            </h5>
                        </div>
                        <a href='#' className='support-number'><BsWhatsapp className='icon' /> + 91 783 599 9999</a>
                        <a href='#' className='support-number'><BsWhatsapp className='icon' /> + 91 783 499 9999</a>
                    </div>
                    <div className='powered-by'>
                        <img src='https://sportsexch.com/images/bg/betfair.png'></img>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer