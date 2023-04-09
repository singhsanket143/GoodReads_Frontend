
import SidebarItem from './SidebarItem'
import { useState, useContext } from 'react'
import SectionContext from '../helpers/sectionContext'



function Sidebar() {
   const { section, setSection } = useContext(SectionContext)

   const [newShelfName, setNewShelfName] = useState('')
   const [sidebarItems, setSidebarItems] = useState([
      { name: 'All', href: '/home', current: true },
      { name: 'Read', href: '/dashboard', current: false },
      { name: 'Currently Reading', href: '/browse', current: false },
   ])

   console.log(section)
   function createNewShelf() {
      setSidebarItems([...sidebarItems, { name: newShelfName }]);
      console.log(sidebarItems)

   }
   function changeSection() {

   }

   return (

      <div className=" ">
         <div className="md:relative mx-auto lg:float-right lg:px-6">
            <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
               {
                  sidebarItems.map((item) => (
                     <SidebarItem name={item.name}

                     >
                     </SidebarItem>
                  ))
               }


            </ul>
            <br></br>
            <input onChange={function (e) { setNewShelfName(e.target.value) }}
               label="Add a Bookshelf" type="text" placeholder="Add a bookshelf" name="bookshelf"
               className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            <br></br>
            <button onClick={createNewShelf} type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
               Add
            </button>

         </div>
      </div>

   );
}

export default Sidebar;
