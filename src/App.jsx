import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { createContext, useState } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './components/Profile'
import Goals from './components/Goals'
import Journeys from './components/Journeys'
import Paths from './components/Paths'
import { AuthContext, UiContext } from './context'


function App() {
  const [user, setUser] = useState({});
  const [ui, setUi] = useState({});

  return (
    <AuthContext value={{ user, setUser }}>
      <UiContext value={{ ui, setUi }}>
        <Router> <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<ProtectedRoute />}>
              <Route path="profile" element={<Profile />} />
              <Route path="goals" element={<Goals />} />
              <Route path="journeys" element={<Journeys />} />
              <Route path="paths" element={<Paths />} />
            </Route>
          </Routes>
        </Router></Router>
      </UiContext>
    </AuthContext>

  )
}

export default App
