import React, { useState } from "react";

interface CreatePostPanelProps {
  onSubmit: (content: string) => void;
}

const CreatePostPanel: React.FC<CreatePostPanelProps> = ({ onSubmit }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent("");
    }
  };

  return (
    <div className="bg-gray-700 rounded-lg shadow p-4 mb-4 flex justify-center items-center space-x-4">
      <input
        className="w-full bg-gray-600 text-white rounded-lg p-2 resize-none"
        placeholder="Twib"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded h-10"
      >
        Post
      </button>
    </div>
  );
};

export default CreatePostPanel;
