import { Login } from '../screens/login';
import { PublicPage } from '../screens/public';
import { UserPage } from '../screens/userPage';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth, RequireSignedOut } from '../context/authContext';
import { Cabecera } from '../screens/cabecera';
import { DetallesTrabajo } from '../screens/detalles-trabajo';

//componente que organiza las rutas de la aplicación, todas dentro de Cabecera. 
export function AppRouter() {
    return (
        <Routes>
            <Route element={<Cabecera />}>
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
                <Route
                    path="/trabajo/:id"
                    element={
                        <RequireAuth>
                            <DetallesTrabajo />
                        </RequireAuth>
                    }
                />
            </Route>
        </Routes>
    )
}

