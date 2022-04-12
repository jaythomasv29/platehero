import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import CreatePostPage from './pages/CreatePostPage/CreatePostPage';
import HomePage from './pages/HomePage/HomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import PostPage from './pages/PostPage/PostPage';

import './App.css'

function App() {
  return (
    <Routes>
    <Route path='/' element={<Navbar />}>
      <Route index element={<HomePage />}/>
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/create' element={<CreatePostPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/posts/:postId' element={<PostPage />} />
    </Route>

  </Routes>
  );
}

export default App;
