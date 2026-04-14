import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Projects from './pages/ProjectsPage/Projects.jsx'
import Experience from './pages/ExperiencePage/Experience.jsx'
import Tools from './pages/ToolsPage/Tools.jsx'
import Thoughts from './pages/ThoughtsPage/Thoughts.jsx'
import Home from './pages/HomePage/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/experience",
        element: <Experience />
      },
      {
        path: "/tools",
        element: <Tools />
      },
      {
        path: "/thoughts",
        element: <Thoughts />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
