import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage name="zaid" message="This is zaid live youtube stream 🚀" />
      <ChatMessage name="zaid" message="This is zaid live youtube stream 🚀" />
      <ChatMessage name="zaid" message="This is zaid live youtube stream 🚀" />
      <ChatMessage name="zaid" message="This is zaid live youtube stream 🚀" />
      <ChatMessage name="zaid" message="This is zaid live youtube stream 🚀" />
    </div>
  );
};

export default LiveChat;
