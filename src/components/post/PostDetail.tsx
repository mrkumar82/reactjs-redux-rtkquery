import React from 'react';
import { usePostQuery } from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetail = (props) => {
  let { id } = useParams();
  let navigate = useNavigate();

  const { data, error, isLoading, isSuccess } = usePostQuery(`${id}`);
  const gotoHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Post Detail</h2>
      {isLoading && <h2>Loading</h2>}
      {error && <h2>Error fetching the data</h2>}
      <h3>{isSuccess && data?.title}</h3>
      <p>{isSuccess && data?.body}</p>
      <button onClick={gotoHome}>Go back</button>
    </div>
  );
};

export default PostDetail;
