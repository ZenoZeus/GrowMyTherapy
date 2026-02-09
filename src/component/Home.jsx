import React from 'react'
import PillNav from './PillNav';
import logo from '../public/logo.svg';
import F1 from './F1';
import F2 from './F2';
import F3 from './F3';
import F4 from './F4';
import F5 from './F5';
import F6 from './F6';
import F7 from './F7';
import F8 from './F8';
import F9 from './F9';
import Ouroffice from './Ouroffice';


const Home = () => {
  return (
    <>
    <div className='font-[Nunito] font-semibold '>
      
    <PillNav className='bg-[#5B7FA6] '></PillNav>
    <F1></F1>
    <F2 className="bg-[#8FA9C4]"></F2>
    <F3></F3>
    <F4></F4>
    <F5></F5>
    <Ouroffice></Ouroffice>
    <F6></F6>
    <F7></F7>
    <F8></F8>
    <F9></F9>

    </div>
    </>
  )
}

export default Home



