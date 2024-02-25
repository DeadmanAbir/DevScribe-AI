
import { useState } from "react"
function Messages() {
    const [messages, setMessages] = useState<string>("")

    //trpc call to save user message

    function addMessage() {
      // sendMessage({message})
    }
  return (
    <div>Mssages</div>
  )
}

export default Messages