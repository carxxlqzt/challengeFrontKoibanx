import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { Home } from './Components/Home';
function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App">
    
    <QueryClientProvider client={queryClient}>
     <Home/>
     </QueryClientProvider>
    </div>
  );
}

export default App;
