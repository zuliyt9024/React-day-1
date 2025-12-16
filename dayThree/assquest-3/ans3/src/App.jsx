
import React from "react";
import MessageCard from "./Components/MessageCard";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <MessageCard
        title="Welcome"
        message="Welcome to React learning journey!"
      />

      <MessageCard
        title="Success"
        message="You have successfully created a reusable component."
      />

      <MessageCard
        title="Reminder"
        message="Practice props and components daily."
      />

      <MessageCard
        title="Motivation"
        message="Consistency beats talent. Keep going!"
      />
    </div>
  );
}

export default App;
