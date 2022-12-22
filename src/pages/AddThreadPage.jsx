import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadForm from '../components/AddThread/ThreadForm';
import Wrapper from '../components/common/Wrapper';
import { HOME_PAGE } from '../constants/path';
import { asyncAddThread } from '../states/threads/action';

export default function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitThread = ({ title, body, category }) => {
    const payload = {
      title,
      body,
      category,
    };
    dispatch(asyncAddThread(payload));
    navigate(HOME_PAGE);
  };

  return (
    <Wrapper width="100%" className="ml-4">
      <ThreadForm handleOnSubmit={handleSubmitThread} />
    </Wrapper>
  );
}
