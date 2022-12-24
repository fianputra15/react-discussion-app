/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
import Button from '../components/common/Button';

const story = {
  title: 'Button',
  component: Button,
};

export default story;

function TemplateStory(args) {
  return <Button {...args} />;
}

const WithBgSuccess = TemplateStory.bind({});
WithBgSuccess.args = {
  children: 'Success',
  type: 'submit',
  bgColor: 'primary',
};

const WithBgSecondary = TemplateStory.bind({});
WithBgSecondary.args = {
  children: 'Secondary',
  type: 'submit',
  bgColor: 'secondary',
};

const WithBgTransparent = TemplateStory.bind({});
WithBgTransparent.args = {
  children: 'Transparent',
  type: 'submit',
  bgColor: 'transparent',
};

const WithBgLight = TemplateStory.bind({});
WithBgLight.args = {
  children: 'Light',
  type: 'submit',
  bgColor: 'light',
};

export {
  WithBgSecondary,
  WithBgLight,
  WithBgTransparent,
  WithBgSuccess,
};
