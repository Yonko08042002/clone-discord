import { Message } from "@/lib/type";

interface Props {
  message: Message;
}

export default function MessageItem({ message }: Props) {
  return (
    <div key={message.id} className="flex gap-5 my-4">
      <img
        src={message.sender.avatar}
        alt={message.sender.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p>
          <span className="text-blue-500 font-bold">{message.sender.name}</span>
          <span className="ml-2 text-primary-foreground/40 text-sm">
            {new Date(message.createdAt).toLocaleDateString()}
          </span>
        </p>
        <p className="text-primary-foreground">{message.message}</p>
      </div>
    </div>
  );
}
