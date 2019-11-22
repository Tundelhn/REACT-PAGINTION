import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pagination from './Components/Pagination';
import Posts from './Components/Posts';
const App = () => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostSPerpage] = useState(10);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPost(res.data);
      setLoading(false);
    };
    fetchPost();
  }, []);
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.splice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className="container mt-5">
      <h1 className="display-4 mb-3 text-center bg-secondary p-3 text-white">
        React Pagination
      </h1>
      <Posts posts={currentPost} loading={loading} />
      <Pagination
        paginate={paginate}
        postsPerPage={postsPerPage}
        totalPost={posts.length}
      />
    </div>
  );
};

export default App;
