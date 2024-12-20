import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import KickStarterProjectInfo from './components/KickStarterProjectsInfo'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <KickStarterProjectInfo />
    </QueryClientProvider>
  )
}

export default App
