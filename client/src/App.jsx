import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';
import About from './components/pages/about';
import PostGrid from './components/pages/PostGrid';
import Projects from './components/pages/projects';
import CreatePost from './features/posts/CreatePost';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import { UserContextProvider } from './components/UserContext';
import PostPage from './components/pages/PostPage';
import PostEdit from './components/pages/PostEdit';
import Arts from './components/pages/Arts';

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

