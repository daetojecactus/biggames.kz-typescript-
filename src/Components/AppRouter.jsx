import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../routes";
import { useAuth } from "../hooks/AuthContext";
import { MAIN_ROUTE } from "../utils/consts";

const AppRouter = () => {
  const { isAuthenticated } = useAuth(); // Получаем состояние аутентификации из AuthContext

  return (
    <Routes>
      {publicRoutes.map(
        (
          { path, Component } //публичные
        ) => (
          <Route key={path} path={path} element={Component} exact />
        )
      )}

      {privateRoutes.map(
        (
          { path, Component } //приватные
        ) => (
          <Route
            key={path}
            path={path}
            element={isAuthenticated ? Component : <Navigate to={MAIN_ROUTE} />} //если нет авторизации, то отправляем на начальную страницу
            exact
          />
        )
      )}
    </Routes>
  );
};

export default AppRouter;
