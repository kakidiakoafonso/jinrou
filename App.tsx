import Route from "./src/route/Route";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./src/redux/index";
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Route />
      </Provider>
    </QueryClientProvider>
  );
}
