/*
 * @Date: 2023-08-22 15:24:05
 * @Author: Bruce Hsu
 * @Description: 
 */
import { useEffect, useState } from "react"

// Custom Imports
import { COUNT, PAGE_SIZE, RESOLUTION, SIZE } from "./utils/constants";
import { IMessage } from "./utils/types";
import Pages from "./components/Pages";
import ListSelect from "./components/ListBox";


const App = () => {

  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [messages, setMessages] = useState<IMessage[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isClick, setIsClick] = useState(true)
  // 画面的尺寸
  const [size, setSize] = useState(SIZE[0])
  // 画面的分辨率
  const [resolution, setResolution] = useState(RESOLUTION[0])
  // 生成视频的数量
  const [videoCount, setVideoCount] = useState(COUNT[0])


  // 计算分页数据
  const pages = Math.ceil(messages.length / PAGE_SIZE)
  const currentMessages = messages.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  )

  useEffect(() => {
    const newSocket = new WebSocket("ws://101.34.56.79:8765")

    newSocket.onopen = () => {
      console.log("Socket opened!")
    }

    newSocket.onmessage = (event) => {
      const data = JSON.parse(event.data)

      
      
      setMessages(prevMessages => {
        return [...prevMessages, data]
      })
    }

    newSocket.onclose = () => {
      console.log("Socket Closed!")
    }

    setSocket(newSocket)

    return () => {
      newSocket.close()
    }

  }, [])

  useEffect(() => {
    if(pages !== currentPage){
      setCurrentPage(pages)
    }
  }, [messages])

  const generateVideoHandler = () => {
    setIsClick(false)
    console.log(videoCount)
    socket?.send(JSON.stringify({
      "action": "start",
      "COUNT": videoCount.name,
      "SIZE": "16:9",
      "RESOLUTION": "720P"
    }))
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  // 是否显示分页的箭头，左右
  const showPrevious = currentPage !== 1
  const showNext = currentPage !== pages

  return (
    <div className="bg-gradient-to-br from-blue-300 via-purple-200 to-pink-300 flex flex-col min-h-screen"> 
      <div className="h-3/10 min-h-[300px] w-full flex flex-col items-center">
        <div className="flex items-center justify-center gap-8 mt-4 w-full">
          <ListSelect selected={size} setSelected={setSize} data={SIZE} label="尺寸"/>
          <ListSelect selected={resolution} setSelected={setResolution} data={RESOLUTION} label="分辨率"/>
          <ListSelect selected={videoCount} setSelected={setVideoCount} data={COUNT} label="视频数量"/>
        </div>
        <button 
          onClick={generateVideoHandler}
          className={` p-4 rounded-lg text-4xl tracking-widest mt-4 ${isClick ? 'bg-white' : 'bg-gray-400'}`}
          disabled={!isClick}
        >{ isClick? 'AI一键生成视频' : '正在生成视频中'}</button>
      </div>
      <div className="flex-grow w-full flex flex-col items-center">
        <div className="grid grid-cols-4 gap-8 mx-auto">
          {
            currentMessages.map((item) => (
              <div 
                className="flex w-64 h-32 justify-center items-center rounded-lg"
                key={item.title}
              >
                <video controls className="rounded-lg">
                  <source src={item.url} type="video/mp4"/>
                </video>
              </div>
            ))
          }
        </div>
        { messages.length > PAGE_SIZE && (
          <Pages goToPage={goToPage} showNext={showNext} showPrevious={showPrevious} pages={pages} currentPage={currentPage}/>
        ) }
      </div>
      
    </div>
  )
}

export default App
