import React from "react";
import AppRouter from "./router/AppRouter.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
