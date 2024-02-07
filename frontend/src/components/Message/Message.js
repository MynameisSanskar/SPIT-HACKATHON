import "./Message.css"

export default function Message({own}){
        return(<div>
  <div className={own ? "message own":"message"}>
        <div className="messageTop">
        <img className="mssgImg" src="https://cdn-icons-png.freepik.com/256/8943/8943377.png?ga=GA1.1.1255800410.1704448219&semt=ais" alt="" />
        <p className="mssgText">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      
            </div>
    )
}
