import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Movies from "./pages/Movies";
import Header from "./components/Header";
import { useState } from "react";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  const [searchTerm, setSearchTerm] = useState("all");
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Movies searchTerm={searchTerm} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
