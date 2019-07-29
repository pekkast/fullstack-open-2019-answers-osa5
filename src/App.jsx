import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import AddBlog from './components/AddBlog';
import Blog from './components/Blog';
import Notification from './components/Notification';
import blogsService from './services/blogs';
import authService from './services/auth';
import cacheService from './services/cache';

const App = () => {
  const userCacheId = 'loggedInUser';
  const [user, setUser] = useState(null);
  const [signup, setSignup] = useState(false);
  const [blogs, setBlogs] = useState(null);
  const [note, setNote] = useState(null);

  useEffect(
    () => { blogsService.getAll().then(blogs => setBlogs(blogs)) },
    [] // run only once
  );

  useEffect(
    () => {
      const authUser = cacheService.getItem(userCacheId);
      if (authUser) {
        setUser(authUser);
        blogsService.setToken(authUser.token);
      }
    },
    [] // run only once
  );

  const showNotification = (text, error) => {
    setNote({ text, error });
    setTimeout(() => setNote(null), 2000);
  };

  const addBlog = async (title, author, url) => {
    const success = await blogsService.addOne(title, author, url);
    if (success) {
      // Lazy load
      setBlogs(blogs.concat([{ id: 'temporary', title, author, url }]));
      blogsService.getAll().then(blogs => setBlogs(blogs));
      showNotification(`Lisättiin blogi ${title} by ${author}`);
    } else {
      showNotification('Paha kurki. Olisiko urli tyhjä?', true);
    }
    return success;
  };

  const handleLogin = async (username, password) => {
    const authUser = await authService.login(username, password);
    setUser(authUser);

    if (authUser) {
      blogsService.setToken(authUser.token);
      cacheService.setItem(userCacheId, authUser);
      showNotification('Kirjautuminen onnistui');
    } else {
      showNotification('Jotain häikkää käyttäjätunnuksessa tai salasanassa', true);
    }
  };

  const handleLogout = () => {
    setUser(null);
    cacheService.setItem(userCacheId, null);
  };

  const handleSignup = async (username, password, name) => {
    const success = await authService.signup(username, password, name);
    if (success) {
      setSignup(false);
    }
  };

  const BlogList = ({ blogs }) => blogs && blogs.map(b => <Blog key={b.id} blog={b} />);

  const AuthForm = ({ signup }) => {
    if (signup) {
      return (
        <div>
          <SignupForm handleSubmit={handleSignup} /><br />
          <a href="#login" onClick={e => { e.preventDefault(); setSignup(false)} }>Login?</a>
        </div>
      );
    }

    return (
      <div>
        <LoginForm handleSubmit={handleLogin} /><br />
        <a href="#signup" onClick={e => { e.preventDefault(); setSignup(true) }}>Signup?</a>
      </div>
    );
  };

  const UserInfo = ({ user }) => user && <div>{user.name} logged in <button onClick={handleLogout}>Logout</button></div>;

  if (user) {
    return (
      <div className="App">
        <Notification note={note} />
        <UserInfo user={user} />
        <AddBlog handleSubmit={addBlog} />
        <h2>Blogit</h2>
        <BlogList blogs={blogs} />
      </div>
    );
  }
  return (
    <div className="App">
      <Notification note={note} />
      <AuthForm signup={signup} />
    </div>
  );
}

export default App;
