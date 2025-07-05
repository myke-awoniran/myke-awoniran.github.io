import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BlogList from "./pages/blog-list";
import BlogPost from "./pages/blog-post";
import "./index.css";
import Home from "./App";
import Layout from "./components/layout";
import ProjectList from "./pages/project-list";
import BackgroundMusic from "./components/background-music";
import NotFound from "./components/not-found";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BackgroundMusic/>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/blog" element={<BlogList/>}/>
                    <Route path="/projects" element={<ProjectList/>}/>
                    <Route path="/blog/:slug" element={<BlogPost/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);