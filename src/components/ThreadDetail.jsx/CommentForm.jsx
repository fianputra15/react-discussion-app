import React, { useState } from 'react';
import Proptypes from 'prop-types';
import Button from '../common/Button';
import useInput from '../../hooks/useInput';

export default function CommentForm(props) {
  const { handleStoreComment } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [threadComment, handleChangeThreadComment, handleResetComment] = useInput();

  const handleSubmitForm = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const payload = {
      threadComment,
    };
    await handleStoreComment(payload);
    setIsLoading(false);
    handleResetComment();
  };
  return (
    <div className="mt-4 bg-white p-4  shadow-md ">
      <form onSubmit={handleSubmitForm}>
        <textarea
          onChange={handleChangeThreadComment}
          value={!threadComment ? '' : threadComment}
          data-testid="thread-comment"
          className="border-primary border-[1px] h-[100px] w-full rounded-md p-4 mb-2"
          placeholder="Write your comments here..."
        />
        <div>
          <Button loading={isLoading} type="submit" className="py-2 px-2">Submit</Button>
        </div>
      </form>
    </div>
  );
}

CommentForm.propTypes = {
  handleStoreComment: Proptypes.func.isRequired,
};
