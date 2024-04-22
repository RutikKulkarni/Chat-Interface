import Message from './Message';

const ChatPanel = ({ chatHistory }) => {
  return (
    <div className="flex-grow p-4 overflow-y-auto">
      {chatHistory.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default ChatPanel;
