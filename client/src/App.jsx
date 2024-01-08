import { Routes, Route } from 'react-router-dom';

// Import Displayed Pages
import Layout from './pages/Layout';
import PostGrid from './pages/PostGrid';
import Projects from './pages/Projects';
import Public from './pages/Public';
import ArtGrid from './pages/ArtGrid';

// Import Feature pages
import Login from './features/auth/auth/Login';
import Register from './features/auth/auth/Register';

import CreatePost from './features/auth/posts/CreatePost';
import CreateArtPost from './features/auth/arts/CreateArt';

import PostEdit from './features/auth/posts/PostEdit';
import ArtEdit from './features/auth/arts/ArtEdit';

// Import Components
import { UserContextProvider } from './components/UserContext';
import PostPage from './pages/PostPage';
import ArtPostPage from './pages/ArtPostPage';

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />

          <Route path="posts">
            <Route index element={<PostGrid />} />
            <Route path=":_id" element={<PostPage />}></Route>
            <Route path=":_id/edit" element={<PostEdit />}></Route>
          </Route>

          <Route path="projects">
            <Route index element={<Projects />} />
          </Route>

          <Route path="arts">
            <Route index element={<ArtGrid />} />
            <Route path=":_id" element={<ArtPostPage />}></Route>
            <Route path=":_id/edit" element={<ArtEdit />}></Route>
          </Route>

          <Route path="auth">
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="create/post" element={<CreatePost />} />
            <Route path="create/art" element={<CreateArtPost />} />
          </Route>

        </Route>{/*end of public*/}
      </Routes>
    </UserContextProvider>

  );

}

export default App;

