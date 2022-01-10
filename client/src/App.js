import { Route, Routes } from 'react-router-dom'
import Post from './components/Post';
import PostPage from './pages/PostPage';
import AddOrEditPost from './pages/AddOrEditPost';

function App() {
  return (
    <div>
      <h2>Travel Site</h2>
      <Routes>
        <Route path="/" element={< Post />} />
        <Route path="/postPage/:id"
          element={< PostPage />} />
        <Route path="/addPostPage"
          element={< AddOrEditPost />} />
        <Route path="/editPostPage/:id"
          element={< AddOrEditPost />} />
      </Routes>
    </div>
  )
}

export default App;
