import AppNavigation from "./src/navigation";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient= new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation/>
    </QueryClientProvider>
  )
}