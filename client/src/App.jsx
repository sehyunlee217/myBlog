import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Public from './components/Public';
import About from './components/pages/about';
import PostGrid from './components/pages/PostGrid';
import Projects from './components/pages/projects';
import Creative from './components/pages/creative';
import CreatePost from './features/posts/CreatePost';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import { UserContextProvider } from './components/UserContext';

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />

          <Route path="about">
            <Route index element={<About />} />
          </Route>

          <Route path="posts">
            <Route index element={<PostGrid />} />
          </Route>

          <Route path="projects">
            <Route index element={<Projects />} />
          </Route>

          <Route path="creative">
            <Route index element={<Creative />} />
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

