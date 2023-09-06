import React,{useState} from 'react'
import "../components/Sidebar.css"
//importing icons
import
{
    FaTh,
    FaThList,
    FaFolderPlus,
    FaBars
}from "react-icons/fa" 
import {IoCreate} from "react-icons/io5"
import { AiOutlineOrderedList} from "react-icons/ai"
import { NavLink } from 'react-router-dom'


const Sidebar = ({children}) => {

    const[isOpen, setIsOpen] =useState(true);
    const toggle =()=> setIsOpen(!isOpen);
    const menuItem=[

        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Questionnaire",
            name:"Questionnaire",
            icon:<AiOutlineOrderedList/>
        },
        {
            path:"/Create",
            name:"Create",
            icon:<IoCreate/>
        }
    ]
  return (
    <div className='container'>
        <div className='sidebar' style={{width:isOpen ?"300px" :"130px",}}>
            <div className='top_section'>
                    <h1 className='logo' style={{display:isOpen ?"block" :"none"}}>Logo</h1>
                    <div  className='bars' >
                        <FaBars onClick={toggle}/>
                    </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active" style={{width:isOpen ?"200px" :"20px",marginLeft:"50px"}}>
                          <div  className='icon'>{item.icon}</div>
                          <div  className='link_text' style={{display:isOpen ?"block" :"none" }}>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar