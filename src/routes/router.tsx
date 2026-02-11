import { Login } from '../screens/login';
import { PublicPage } from '../screens/public';
import { UserPage } from '../screens/userPage';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { RequireAuth, RequireSignedOut } from '../context/authContext';
import { Cabezera } from '../screens/cabezera';

export function AppRouter() {
    return (
        <Routes>
            <Route element={<Cabezera />}>
                <Route path="/" element={<PublicPage />} />
                <Route
                    path="/login"
                    element={
                        <RequireSignedOut>
                            <Login />
                        </RequireSignedOut>
                    } />
                <Route
                    path="/user"
                    element={
                        <RequireAuth>
                            <UserPage />
                        </RequireAuth>
                    }
                />
            </Route>
        </Routes>
    )
}

