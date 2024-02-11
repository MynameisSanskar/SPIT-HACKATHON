import "./conversation.css" 

export default function Conversation(){
    return(
        <div>
        <div>
          <h1 className="p-5 bg-gray-300 text-3xl font-bold" style={{height:82}}>Chats</h1>
        </div>

        <div className="conversation">
            <img className="convImage" src="https://cdn-icons-png.freepik.com/256/4712/4712235.png?ga=GA1.1.1255800410.1704448219&semt=ais" alt="" />
            <span className="convText">TextBot</span>
        </div>
        <div className="conversation">
            <img className="convImage" src="https://cdn-icons-png.freepik.com/256/12383/12383833.png?ga=GA1.1.1255800410.1704448219&semt=ais" alt="" />
            <span className="convText">ImageBot</span>
        </div>
        <div className="conversation">
            <img className="convImage" src="https://cdn-icons-png.freepik.com/256/1766/1766965.png?ga=GA1.1.1255800410.1704448219&semt=ais" alt="" />
            <span className="convText">BlogBot</span>
        </div>
        </div>
    )
}