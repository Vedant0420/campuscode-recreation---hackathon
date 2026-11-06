import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Konami from './components/Konami'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Student from './pages/Student'

export default function App() {
  return (
    <BrowserRouter>
      <Konami />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<Student />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
