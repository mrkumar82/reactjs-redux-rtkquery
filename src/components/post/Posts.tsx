import React from 'react';
import {
  usePostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from '../../services/api';
import { Link } from 'react-router-dom';
import { Post } from '../../models/post.model';
const Posts = () => {
  const { data, error, isLoading, isSuccess } = usePostsQuery();
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const post = {
    id: '44',
    title: 'Custom title',
    body: 'Custom body',
  };
  const updatepost = {
    id: '95',
    title: 'Custom title Updated',
    body: 'Custom body Updated',
  };

  const addPostHandler = async () => {
    await addPost(post);
  };
  const updatePostHandler = async () => {
    await updatePost(updatepost);
  };
  const deletePostHandler = async () => {
    await deletePost('50');
  };

  return (
    <div>
      <button onClick={addPostHandler}>Add Post</button>
      <button onClick={updatePostHandler}>Update Post</button>
      <button onClick={deletePostHandler}>Delete Post</button>
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
