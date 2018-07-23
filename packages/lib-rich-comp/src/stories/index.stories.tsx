import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';

interface WelcomeProps {
  showApp: () => void;
}
const Welcome = ({ showApp }: WelcomeProps) => <div onClick={showApp}>linkto app</div>;

interface ButtonProps {
  onClick: () => void;
}
const Button = ({ onClick }: ButtonProps) => <button onClick={onClick}>click me</button>;

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
