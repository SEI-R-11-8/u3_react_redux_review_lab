import { Route, Routes } from 'react-router-dom'
import Post from './components/Post';
import PostPage from './pages/PostPage';

function App() {
  return (
    <div>
      <h2>Travel Site</h2>
      <Routes>
        <Route path="/" element={ < Post /> } />
        <Route path="/postPage/:postId" element={ <PostPage /> } />
      </Routes>
      
    </div>
  );
}

export default App;
