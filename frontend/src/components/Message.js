import ChatMessage from './ChatWindow';

const Message = ({ message }) => {
  return (
    <div className="flex justify-end">
      <div className="max-w-2/3">
        <ChatMessage message={message.prompt} />
        <ChatMessage message={message.response} />
      </div>
    </div>
  );
};

export default Message;