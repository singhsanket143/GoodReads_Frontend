
import Input from './Input'
import {Link,useNavigate} from "react-router-dom";
import {useState ,useContext} from 'react'

import SectionContext from '../helpers/sectionContext'


function SidebarItem(props) {
  const {section,setSection} = useContext(SectionContext)
  return (
    <li section={props.name} className="mr-3 flex-1">
                     <a  href="#" section={props.name} onClick={function(e){ setSection(e.target.closest('li').getAttribute('section')) }} className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                        <i className="fas fa-link pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">{props.name}</span>
                     </a>
    </li>
    
  );
}

export default SidebarItem;
