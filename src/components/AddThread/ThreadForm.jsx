import React, { useState } from 'react';
import Proptypes from 'prop-types';
import useInput from '../../hooks/useInput';
import Button from '../common/Button';
import TitlePage from '../common/TitlePage';

export default function ThreadForm(props) {
  const { handleOnSubmit } = props;
  const [title, handleChangeTitle, handleResetTitle] = useInput();
  const [category, handleChangeCategory, handleResetCategory] = useInput();
  const [body, handleChangeBody, handleResetBody] = useInput();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = async (e) => {
    setIsLoading(false);
    e.preventDefault();
    await handleOnSubmit({ title, category, body });
    setIsLoading(true);
    handleResetTitle();
    handleResetCategory();
    handleResetBody();
  };
  return (
    <div className="bg-white shadow-md w-full p-4">
      <TitlePage>Add New Thread</TitlePage>

      <form onSubmit={handleSubmitForm} className="text-[14px] space-y-2">
        <div>
          <label htmlFor="title">
            Title
            <input value={!title ? '' : title} placeholder="Title..." required onChange={handleChangeTitle} className="border-gray-400 block w-full border-[1px] rounded-md p-4 bg-white" id="title" type="text" />
          </label>
        </div>
        <div>
          <span>
            Body
          </span>
          <textarea
            required
            onChange={handleChangeBody}
            value={!body ? '' : body}
            className="border-primary border-[1px] h-[100px] w-full rounded-md p-4 mb-2"
            placeholder="Body..."
          />
        </div>
        <div>
          <label htmlFor="title">
            Category
            <input value={!category ? '' : category} placeholder="Category..." required onChange={handleChangeCategory} className="border-gray-400 block w-full border-[1px] rounded-md p-4 bg-white mb-10" id="title" type="text" />
          </label>
        </div>
        <div>
          <Button loading={isLoading} type="submit">Submit</Button>
        </div>

      </form>
    </div>
  );
}

ThreadForm.propTypes = {
  handleOnSubmit: Proptypes.func.isRequired,
};
