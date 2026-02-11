import '../assets/css/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider, RequireAuth, RequireSignedOut, useAuth } from '../context/authContext';
import { Login } from './login';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route
            path="/login"
            element={
              <RequireSignedOut>
                <Login />
              </RequireSignedOut>
            } />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {

  const auth = useAuth();

  return (
    <>
      <h3>Protected</h3>

      <h4>{auth.user}</h4>

      <button onClick={() => auth.signout(() => window.location.reload())}>signout</button>
    </>
  );
}

export default App
