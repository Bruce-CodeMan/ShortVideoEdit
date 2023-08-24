/*
 * @Date: 2023-08-24 10:24:47
 * @Author: Bruce Hsu
 * @Description: 
 */
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid"

// Custom Imports
import { IPages } from "@/utils/types";

const Pages = ({ goToPage, currentPage, showPrevious, showNext, pages }: IPages) => {
  return (
    <div className="fixed bottom-10 w-[80%] flex items-center justify-between border-t border-gray-600 px-4 sm:px-6">
      {/* Left Arrow - Start */}
      <div className="-mt-px flex w-0 flex-1">
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          onClick={() => goToPage(currentPage - 1)}
        >
          { showPrevious && (
            <>
              <ArrowLongLeftIcon 
                className="mr-3 h-5 w-5 text-gray-400" 
                aria-hidden="true" 
              /> Previous
            </>
            )}
            
          </a>
        </div>
        {/* Left Arrow - End */}

          {/* Middle Pages - Start */}
          <div className="hidden md:-mt-px md:flex">
            {
              [...Array(pages)].map((_, i) => (
                <a
                  href="#"
                  onClick={() => goToPage(i+1)}
                  className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium 
                            ${currentPage === i+1 ? 'text-indigo-600 border-indigo-500':'text-gray-500 border-transparent'} `}
                >
                  {i+1}
                </a>
              ))
            }
            
            
          </div>
          {/* Middle Pages - End */}

          {/* Right Arrow - Start */}
          <div className="-mt-px flex w-0 flex-1 justify-end">
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              onClick={() => goToPage(currentPage + 1)}
            >
              
              { showNext && (
                <>Next
                  <ArrowLongRightIcon 
                    className="ml-3 h-5 w-5 text-gray-400" 
                    aria-hidden="true" 
                  />
                </>
                
              )}
              
            </a>
          </div>
          {/* Right Arrow - End */}
    </div>
  )
}

export default Pages;