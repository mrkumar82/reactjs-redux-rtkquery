import React from 'react';
import { usePostsQuery } from '../../services/api';
import { Link } from 'react-router-dom';

const Posts = () => {
  const { data, error, isLoading, isSuccess } = usePostsQuery();
  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong</h2>}

      {isSuccess && (
        <div>
          {data?.map((post) => {
            return (
              <div key={post.id}>
                <h2>
                  <Link to={`/detail/${post.id}`}>{post.title}</Link>
                </h2>
                <p>{post.body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Posts;
