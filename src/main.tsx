import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BlogList from "./pages/blog-list";
import BlogPost from "./pages/blog-post";
import "./index.css";
import Home from "./App";
import Layout from "./components/layout";
import ProjectList from "./pages/project-list";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>

            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/blog" element={<BlogList/>}/>
                    <Route path="/projects" element={<ProjectList/>}/>
                    <Route path="/blog/:slug" element={<BlogPost/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);