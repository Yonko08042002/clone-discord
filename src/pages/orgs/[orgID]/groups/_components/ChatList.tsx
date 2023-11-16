import { Input } from "@/components/ui/input";
import { Gift, PlusCircle, Smile, Sticker, Videotape } from "lucide-react";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";

const MESSAGES = [
  {
    id: 1,
    sender: {
      name: "TinNguyen",
      avatar: "https://bom.so/Tkos14",
    },
    createdAt: "09/11/2023 19:44",
    message: "Hey,How are you?",
  },
  {
    id: 2,
    sender: {
      name: "SonTran",
      avatar: "https://bom.so/Tkos14",
    },
    createdAt: "09/11/2023 19:44",
    message: "I'm fine",
  },
  {
    id: 3,
    sender: {
      name: "SonTran",
      avatar: "https://bom.so/Tkos14",
    },
    createdAt: "09/11/2023 19:44",
    message: "I'm fine",
  },
  {
    id: 4,
    sender: {
      name: "SonTran",
      avatar: "https://bom.so/Tkos14",
    },
    createdAt: "09/11/2023 19:44",
    message: "I'm fine",
  },
  {
    id: 5,
    sender: {
      name: "SonTran",
      avatar: "https://bom.so/Tkos14",
    },
    createdAt: "09/11/2023 19:44",
    message: "I'm fine",
  },
  {
    id: 6,
    sender: {
      name: "SonTran",
      avatar: "https://bom.so/Tkos14",
    },
    createdAt: "09/11/2023 19:44",
    message: "I'm fine",
  },
  {
    id: 7,
    sender: {
      name: "SonTran",
      avatar: "https://bom.so/Tkos14",
    },
    createdAt: "09/11/2023 19:44",
    message: "I'm fine",
  },
  {
    id: 8,
    sender: {
      name: "SonTran",
      avatar: "https://bom.so/Tkos14",
    },
    createdAt: "09/11/2023 19:44",
    message: "I'm fine",
  },
  {
    id: 9,
    sender: {
      name: "SonTran",
      avatar: "https://bom.so/Tkos14",
    },
    createdAt: "09/11/2023 19:44",
    message: "I'm fine",
  },
  {
    id: 10,
    sender: {
      name: "SonTran",
      avatar: "https://bom.so/Tkos14",
    },
    createdAt: "09/11/2023 19:44",
    message: "I'm fine",
  },
  {
    id: 11,
    sender: {
      name: "SonTran",
      avatar: "https://bom.so/Tkos14",
    },
    createdAt: "09/11/2023 19:44",
    message: "I'm fine",
  },
  {
    id: 12,
    sender: {
      name: "SonTran",
      avatar: "https://bom.so/Tkos14",
    },
    createdAt: "09/11/2023 19:44",
    message: "I'm fine",
  },
];
export default function Chatlist() {
  const chatListRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState(MESSAGES);

  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current?.value.trim() !== "") {
      flushSync(() => {
        setMessages([
          ...messages,
          {
            id: messages.length + 1,
            sender: {
              name: "John Doe",
              avatar: "https://bom.so/Tkos14",
            },
            createdAt: "2022-01-01T00:00:00.000Z",
            message: inputRef.current!.value,
          },
        ]);
      });

      inputRef.current!.value = "";
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
          <div key={message.id} className="flex gap-5 my-4">
            <img
              src={message.sender.avatar}
              alt={message.sender.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p>
                <span className="text-blue-700 font-bold">
                  {message.sender.name}
                </span>
                <span className="text-primary/40 text-sm">
                  {new Date(message.createdAt).toLocaleDateString()}
                </span>
              </p>
              <p>{message.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute w-full ">
        <PlusCircle className="absolute w-6 h-6 top-3 left-6" />
        <Input
          placeholder="Send message..."
          className="pl-14 pr-40"
          onKeyUp={handleChange}
        />
        <div className="absolute top-3 right-6 flex justify-between gap-3">
          <Gift className=" w-6 h-6 cursor-pointer" />
          <Sticker className=" w-6 h-6 cursor-pointer" />
          <Videotape className=" w-6 h-6 cursor-pointer" />
          <Smile className=" w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
