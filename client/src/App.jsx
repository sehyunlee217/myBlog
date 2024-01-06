import { Routes, Route } from 'react-router-dom';

// Import Displayed Pages
import Layout from './pages/Layout';
import PostPage from './pages/PostPage';
import Projects from './pages/Projects';
import Public from './pages/Public';
import Arts from './pages/Arts';

// Import Feature pages
import Login from './features/auth/auth/Login';
import Register from './features/auth/auth/Register';

import CreatePost from './features/auth/posts/CreatePost';
import PostEdit from './features/auth/posts/PostEdit';

// Import Components
import { UserContextProvider } from './components/UserContext';
import PostGrid from './components/PostGrid';

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />

          {/* <Route path="about">
            <Route index element={<About />} />
          </Route> */}

          <Route path="posts">
            <Route index element={<PostGrid />} />
            <Route path=":_id" element={<PostPage />}></Route>
            <Route path=":_id/edit" element={<PostEdit />}></Route>
          </Route>

          <Route path="projects">
            <Route index element={<Projects />} />
          </Route>

          <Route path="arts">
            <Route index element={<Arts />} />
          </Route>

          <Route path="auth">
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="create" element={<CreatePost />} />
          </Route>

        </Route>{/*end of public*/}
      </Routes>
    </UserContextProvider>

  );

}

export default App;

