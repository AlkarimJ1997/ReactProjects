import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { extendedApiSlice } from "./features/posts/postsSlice";
import { usersApiSlice } from "./features/users/usersSlice";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Get posts and users from API on app load
store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </Router>
    </Provider>
);