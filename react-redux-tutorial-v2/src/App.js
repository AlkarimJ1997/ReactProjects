import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import PostDetails from "./features/posts/PostDetails";
import EditPostForm from "./features/posts/EditPostForm";
import UsersList from "./features/users/UsersList";
import UserDetails from "./features/users/UserDetails";
import Layout from "./components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<PostsList />} />
                <Route path="post">
                    <Route index element={<AddPostForm />} />
                    <Route path=":postId" element={<PostDetails />} />
                    <Route path="edit/:postId" element={<EditPostForm />} />
                </Route>
                <Route path="user">
                    <Route index element={<UsersList />} />
                    <Route path=":userId" element={<UserDetails />} />
                </Route>

                {/* Catch all page with replace flag (for history) 
                    - replace with 404 ideally */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}

export default App;
