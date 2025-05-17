import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Movies from "./components/Movies";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Movies />
    </QueryClientProvider>
  );
};

export default App;
