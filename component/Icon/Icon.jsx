import * as icons from './index';

const Icon = ({ name, ...rest }) => {
  const Image = icons[name];

  if (!Image) {
    throw new Error(
      `Icon ${name} does not exist, or is not imported in /components/Icon/index.js`
    );
  }

  return <Image {...rest} />;
};

export default Icon;
