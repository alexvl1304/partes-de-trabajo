import '../assets/css/index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../context/authContext';
import { AppRouter } from '../routes/router';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
