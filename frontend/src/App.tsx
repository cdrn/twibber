import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostPanel from "./components/PostPanel";
import CreatePostPanel from "./components/CreatePostPanel";

function App() {
  return (
    <div className="h-screen">
      <h1 className="text-lg my-10">Twibber</h1>
      <CreatePostPanel onSubmit={() => {}} />
      <PostPanel
        username="JohnDoe"
        handle="johndoe"
        content="Hello, Twibber!"
        timestamp={new Date().toISOString()}
        likes={1}
        reposts={1}
      />
    </div>
  );
}

export default App;
