import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './components/Profile'
import Goals from './components/Goals'
import Journeys from './components/Journeys'
import Paths from './components/Paths'
import { AuthContext } from './context/AuthContext'
import { UiContext } from './context/UiContext'

function App() {


  return (
    <AuthContext>
      <UiContext>
        <Router>
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
        </Router>
      </UiContext>
    </AuthContext>

  )
}

export default App
