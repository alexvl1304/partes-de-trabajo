import { Login } from '../scripts/login';
import { PublicPage } from '../screens/public';
import { ProtectedPage } from '../screens/protected';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth, RequireSignedOut } from '../context/authContext';

export function AppRouter() {
    return (
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
    )
}