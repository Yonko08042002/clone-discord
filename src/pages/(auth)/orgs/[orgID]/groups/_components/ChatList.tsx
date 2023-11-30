import { Input } from "@/components/ui/input";
import { Gift, PlusCircle, Sticker, Videotape } from "lucide-react";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import EmojiPicker from "./EmojiPicker";
import Message from "./MessageItem";
const MESSAGES = [
  {
    id: 1,
    sender: {
      id: 1,
      name: "TinNguyen",
      avatar: "https://bom.so/Tkos14",
    },
    createdAt: "09/11/2023 19:44",
    message: "Hey,How are you?",
  },
];
export default function Chatlist() {
  const chatListRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState(MESSAGES);

  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && content.trim() !== "") {
      flushSync(() => {
        setMessages([
          ...messages,
          {
            id: messages.length + 1,
            sender: {
              id: 1,
              name: "John Doe",
              avatar: "https://bom.so/Tkos14",
            },
            createdAt: "2022-01-01T00:00:00.000Z",
            message: content,
          },
        ]);
      });
      setContent("");
      chatListRef.current?.scrollTo({
        top: chatListRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div
        className="flex flex-col h-[calc(100vh-8rem)] overflow-y-auto"
        ref={chatListRef}
      >
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="absolute w-full text-primary-foreground">
        <PlusCircle className="absolute w-6 h-6 top-3 left-6" />
        <Input
          value={content}
          placeholder="Send message..."
          className="pl-14 pr-40"
          onChange={(e) => setContent(e.target.value)}
          onKeyUp={handleChange}
        />
        <div className="absolute top-3 right-6 flex justify-between gap-3 ">
          <Gift className=" w-6 h-6 cursor-pointer" />
          <Sticker className=" w-6 h-6 cursor-pointer" />
          <Videotape className=" w-6 h-6 cursor-pointer" />
          <EmojiPicker
            onEmojiClick={({ emoji }) => {
              setContent((prev) => prev + emoji);
            }}
          />
        </div>
      </div>
    </div>
  );
}
