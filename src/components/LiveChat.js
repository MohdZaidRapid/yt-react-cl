import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
    
  useEffect(() => {
    const clearInteval = setInterval(() => {
      // API Polling
      console.log("API Polling");
    }, 2000);

    return () => clearInterval(clearInteval);
  }, []);
  return (
    <div className="w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage name="zaid" message="This is zaid live youtube stream 🚀" />
    </div>
  );
};

export default LiveChat;
