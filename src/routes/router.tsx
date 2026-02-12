import { Login } from '../screens/login';
import { PublicPage } from '../screens/public';
import { UserPage } from '../screens/userPage';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth, RequireSignedOut } from '../context/authContext';
import { Cabezera } from '../screens/cabezera';

//componente que organiza las rutas de la aplicación, todas dentro de Cabecera. 
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

