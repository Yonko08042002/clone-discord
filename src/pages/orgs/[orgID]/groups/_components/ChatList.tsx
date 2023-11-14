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
    id: 1,
    sender: {
      name: "SonTran",
      avatar: "https://bom.so/Tkos14",
    },
    createdAt: "09/11/2023 19:44",
    message: "I'm fine",
  },
];
export default function Chatlist() {
  return (
    <div>
      <div className="flex gap-5 flex-col h-3/4">
        {MESSAGES.map((message) => (
          <div key={message.id} className="flex gap-5">
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
    </div>
  );
}
