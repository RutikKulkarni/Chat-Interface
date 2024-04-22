import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from '../store/actions/chatActions';
import ChatPanel from '../components/ChatPanel';
import PromptInput from '../components/PromptInput';

const IndexPage = () => {
  const dispatch = useDispatch();
  const chatHistory = useSelector(state => state.chat.history);
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendMessage(prompt));
    setPrompt('');
  };

  return (
    <div className="flex h-screen">
      <ChatPanel chatHistory={chatHistory} />
      <div className="flex-grow">
        <PromptInput
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default IndexPage;
