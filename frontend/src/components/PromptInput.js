const PromptInput = ({ value, onChange, onSubmit }) => {
    return (
      <form className="p-4" onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter your prompt..."
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white rounded-lg p-2">
          Send
        </button>
      </form>
    );
  };
  
  export default PromptInput;
  