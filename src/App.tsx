/*
 * @Date: 2023-08-22 15:24:05
 * @Author: Bruce Hsu
 * @Description: 
 */
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid"

function App() {

  const data = [
    {
      key: "1",
      name: "Bruce"
    },
    {
      key: "2",
      name: "Lee"
    },
    {
      key: "3",
      name: "xxx"
    },
    {
      key: "4",
      name: "yyy"
    },
    {
      key: "5",
      name: "zzz"
    },
    {
      key: "6",
      name: "b"
    },
    {
      key: "7",
      name: "a"
    },
    {
      key: "8",
      name: "7"
    },
    {
      key: "9",
      name: "0"
    }
  ]

  return (
    <div className="bg-gradient-to-br from-blue-300 via-purple-200 to-pink-300 flex flex-col min-h-screen"> 
      <div className="h-3/10 min-h-[300px] w-full flex items-center justify-center">
        <button className="bg-white p-4 rounded-lg text-4xl tracking-widest">AI一键生成视频</button>
      </div>
      <div className="flex-grow w-full flex flex-col items-center">
        <div className="grid grid-cols-4 gap-4 mx-auto">
          {
            data.map((item) => (
              <div 
                className="flex w-64 h-32 bg-white justify-center items-center rounded-lg"
                key={item.key}
              ></div>
            ))
          }
        </div>
        { data.length > 12 && (
          <div className="mt-12 w-[80%] flex items-center justify-between border-t border-gray-600 px-4 sm:px-6">
          {/* Left Arrow - Start */}
          <div className="-mt-px flex w-0 flex-1">
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              Previous
            </a>
          </div>
          {/* Left Arrow - End */}

          {/* Middle Pages - Start */}
          <div className="hidden md:-mt-px md:flex">
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              1
            </a>
            {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
              aria-current="page"
            >
              2
            </a>
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              3
            </a>
            <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
              ...
            </span>
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              8
            </a>
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              9
            </a>
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              10
            </a>
          </div>
          {/* Middle Pages - End */}

          {/* Right Arrow - Start */}
          <div className="-mt-px flex w-0 flex-1 justify-end">
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Next
              <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            </a>
          </div>
          {/* Right Arrow - End */}
          </div>
        ) }
      </div>
      
    </div>
  )
}

export default App
