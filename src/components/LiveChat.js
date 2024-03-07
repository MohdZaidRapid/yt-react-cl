import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const clearInteval = setInterval(() => {
      // API Polling
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 2000);

    return () => clearInterval(clearInteval);
  }, []);
  return (
    <div className="w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg  overflow-y-scroll">
      {/* don't use indexes as keys */}
      {chatMessages?.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
