import React, { Suspense } from "react";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { ErrorBoundary, Footer, Navbar, Sidebar, ThemeSettings } from "./components";
import Tooltip from "./components/Tooltip";
import { useStateContext } from "./context/ContextProvider";
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Orders,
  Pie,
  Pyramid,
  Stacked,
} from "./pages";
import NotFound from "./pages/NotFound";

const LoadingSpinner = () => (
  <div className="flex min-h-[400px] items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-cyan-500" />
  </div>
);

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } =
    useStateContext();
  return (
    <div className={currentMode === "Light" ? "light" : "dark"}>
      <BrowserRouter>
        <div className="relative flex dark:bg-main-dark-bg">
          <div className="fixed bottom-4 right-4" style={{ zIndex: "1000" }}>
            <Tooltip content="Settings" position="Top">
              <button
                type="button"
                className="p-3 text-3xl text-white hover:bg-light-gray hover:drop-shadow-xl"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </Tooltip>
          </div>
          {activeMenu ? (
            <div className="fixed bg-white sidebar w-72 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`min-h-screen w-full bg-main-bg dark:bg-main-dark-bg ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed w-full navbar bg-main-bg dark:bg-main-dark-bg md:static ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Dashboard */}
                    <Route path="/" element={<Ecommerce />} />
                    <Route path="/ecommerce" element={<Ecommerce />} />

                    {/* Pages  */}
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/customers" element={<Customers />} />

                    {/* Apps */}
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/color-picker" element={<ColorPicker />} />

                    {/* Charts */}
                    <Route path="/line" element={<Line />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/financial" element={<Financial />} />
                    <Route path="/color-mapping" element={<ColorMapping />} />
                    <Route path="/pyramid" element={<Pyramid />} />
                    <Route path="/stacked" element={<Stacked />} />

                    {/* 404 */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </ErrorBoundary>

              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
