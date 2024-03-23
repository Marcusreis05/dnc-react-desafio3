import React from 'react'
import "./index.scss"
import logo from '../../assets/icons/logo.svg'

const Header = () => {
  return (
    <div className='header' id='home'>
        <h1 className='header__title1'>Organização</h1>
        <h1 className='header__title2'>Tarefas</h1>
        <img src={logo} alt="" width='110px' />
    </div>
  )
}

export default Header;