
function Sidebar(props) {
   

   function handleFilter(tabName,tabNum){
     console.log(props.selected)
      console.log(document.getElementsByTagName('li')[tabName])
   }

  return (
    
<div className=" ">
            <div className="md:relative mx-auto lg:float-right lg:px-6">
               <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
                  <li className="mr-3 flex-1" onClick={handleFilter('All',"1") }>
                     <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                        <i className="fas fa-link pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">All</span>
                     </a>
                  </li>
                  <li className="mr-3 flex-1" onClick={handleFilter('Read',"2") }>
                     <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                     <i className="fas fa-link pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Read</span>
                     </a>
                  </li>
                  <li className="mr-3 flex-1" onClick={handleFilter('Currently Reading','3') }>
                     <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-pink-600">
                     <i className="fas fa-link pr-0 md:pr-3 text-pink-500"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block">Currently Reading</span>
                     </a>
                  </li>
                  <li className="mr-3 flex-1" onClick={handleFilter('WishList','4')}>
                     <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                     <i className="fas fa-link pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Wishlist</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>

  );
}

export default Sidebar;
