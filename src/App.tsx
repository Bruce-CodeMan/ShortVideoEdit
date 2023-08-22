/*
 * @Date: 2023-08-22 15:24:05
 * @Author: Bruce Hsu
 * @Description: 
 */
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
    }
  ]

  return (
    <div className="bg-gradient-to-br from-blue-300 via-purple-200 to-pink-300 flex flex-col min-h-screen"> 
      <div className="h-3/10 min-h-[300px] w-full flex items-center justify-center">
        <button className="bg-white p-4 rounded-lg text-4xl tracking-widest">AI一键生成视频</button>
      </div>
      <div className="flex-grow grid grid-cols-5 gap-4 w-full mx-auto justify-center items-center">
        {
          data.map((item) => (
            <div 
              className="w-20 h-[35px] bg-white"
              key={item.key}
            ></div>
          ))
        }
      </div>
    </div>
  )
}

export default App
