import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import "./index.css"; // Tailwind styles

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/blog" element={<BlogList/>}/>
                <Route path="/blog/:slug" element={<BlogPost/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);