import { Routes, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { PrivateRoute } from "../../route/PrivateRoute";
import { RestrictedRoute } from "../../route/RestrictedRoute";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../redux/auth/authOperation";
import { lazy } from "react";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
} from "../../redux/auth/authSelector";
import { ScreensPage } from "../../page/ScreensPage/ScreensPage";
import { Loader } from "../Loader/Loader";

const WelcomePage = lazy(() => import("../../page/WelcomePage/WelcomePage"));
const AuthPage = lazy(() => import("../../page/AuthPage/AuthPage"));
const HomePage = lazy(() => import("../../page/HomePage/HomePage"));

function App() {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (accessToken) {
      dispatch(currentUser());
    }
  }, [dispatch, accessToken]);

  return (
    !isRefreshing &&
    !isLoading && (
      <>
        <Suspense fallback = {<Loader/>}>
          <Routes>
            <Route
              path="/home"
              element={
                <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
              }
            />
            <Route path=":boardId/:title" element={<ScreensPage />} />
            <Route
              path="/welcome"
              element={
                <RestrictedRoute redirectTo="/" component={<WelcomePage />} />
              }
            />
            <Route
              path="/auth/:id"
              element={
                <RestrictedRoute redirectTo="/" component={<AuthPage />} />
              }
            />
            <Route
              path="*"
              element={
                <RestrictedRoute
                  redirectTo="/home"
                  component={<WelcomePage />}
                />
              }
            />
          </Routes>
        </Suspense>
        {isLoading && <Loader/>}
      </>
    )
  );
}

export default App;
