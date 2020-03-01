import { Matcher } from '../../types';

const link: Matcher = async (href, referrer) => {
  // if the link has a valid host and link then its a link
  if (referrer.host && referrer.href && (!referrer.protocol || referrer.protocol != 'about:')) {
    return {
      type: 'link',
      from: referrer.href,
      link: href.href
    };
  } else {
    return null;
  }
};

export default link;
