/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
import { BrowserRouter } from 'react-router-dom';
import ThreadHead from '../components/Thread/ThreadHead';

const story = {
  title: 'ThreadHead',
  component: ThreadHead,
};

export default story;

function TemplateStory(args) {
  return <BrowserRouter><ThreadHead {...args} /></BrowserRouter>;
}

const WithThreadHeadDetail = TemplateStory.bind({});
const WithThreadHeadHome = TemplateStory.bind({});
WithThreadHeadDetail.args = {
  id: 'thread-08_nUU2fhu1P5nre',
  title: 'tess',
  avatar: 'https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random',
  name: 'Dimas',
  isDetail: true,
};
WithThreadHeadHome.args = {
  id: 'thread-08_nUU2fhu1P5nre',
  title: 'tess',
  avatar: 'https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random',
  name: 'Dimas',
  isDetail: false,
};

export {
  WithThreadHeadHome,
  WithThreadHeadDetail,
};
