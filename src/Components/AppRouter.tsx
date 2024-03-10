import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../Routes/routes";
import { useAuth } from "../hooks/AuthContext";
import { MyRoutes } from "../Routes/consts";

const AppRouter: React.FC = () => {
  const { isAuthenticated } = useAuth(); // Получаем состояние аутентификации из AuthContext

  return (
    <Routes>
      {publicRoutes.map(
        (
          { path, Component } //публичные
        ) => (
          <Route key={path} path={path} element={<Component />} />
        )
      )}

      {privateRoutes.map(
        (
          { path, Component } //приватные
        ) => (
          <Route
            key={path}
            path={path}
            element={
              isAuthenticated ? <Component /> : <Navigate to={MyRoutes.MAIN} />
            } //если нет авторизации, то отправляем на начальную страницу
          />
        )
      )}
    </Routes>
  );
};

export default AppRouter;
