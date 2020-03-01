import { Matcher, Referrer } from '../../types';

const instagram: Matcher = async (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('instagram.com') !== -1) {
    return {
      type: 'social',
      network: 'instagram'
    };
  } else {
    return null;
  }
};

export default instagram;
