import BookImg from './../images/book.jpg'
import Profile from './../images/profile.png'

function SocialCard() {
  return (
    <div className="SocialCard flex justify-center">
      
<div class="flex flex-col justify-start mb-12 mt-4 max-w-xl gap-4 p-4 bg-white shadow-xl rounded-xl dark:bg-gray-800 md:flex-row">
    <div class="relative">
        <img src={BookImg} class="w-full rounded-xl md:w-auto md:max-h-40"/>
        <span class="absolute px-2 py-1 text-xs text-white rounded bg-gray-700/50 right-2 bottom-2">
            7 min
        </span>
    </div>
    <div class="flex flex-col justify-between">
        <div class="flex items-start justify-between my-2 text-gray-700 dark:text-white md:m-0">
            <p class="text-xl leading-5">
                The Daily Book of positive Quotations
            </p>
            
        </div>
        
        <div class="flex items-start my-2 md:m-0">
            <div class="relative">
                <a href="#" class="relative block">
                    <img alt="profile" src={Profile} class="mx-auto object-cover rounded-full h-10 w-10 "/>
                </a>
                <svg width="10" height="10" fill="currentColor" class="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z">
                    </path>
                </svg>
            </div>
            <div class="flex flex-col items-start justify-center ml-2">
                <span class="flex items-center text-sm text-gray-600 dark:text-gray-200">
                    Jagdish Mallige
                    <span class="block w-2 h-2 ml-1 bg-green-500 rounded-full">
                    </span>
                </span>
                <div class="flex items-center my-2 text-s text-gray-500 dark:text-gray-400 md:m-0">
                Finisihed Reading the book
            
            </div>
                <span class="text-xs text-gray-400">
                    1 week ago
                </span>
                
            </div>
            
        </div>
        <div class="flex justify-space ml-2">
            <button class="m-2 px-2 text-white bg-red-400 rounded-full w-1/4 hover:bg-red-600">
                Like
            </button>
            <button class="m-2 px-1 text-white bg-red-400 rounded-full w-1/4 hover:bg-red-600">
                Comment
            </button>
        </div>
    </div>
</div>

    </div>
  );
}

export default SocialCard;
