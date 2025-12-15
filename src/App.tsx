"use client"

import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/ToogleTheme/theme-provider"
import HomePage from "@/Pages/HomePage"
import PageNotFound from "@/Layout/PageNotFound"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App