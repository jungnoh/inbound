import { Matcher, Referrer } from '../../types';

const facebook: Matcher = async (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('facebook.com') !== -1) {
    return {
      type: 'social',
      network: 'facebook'
    };
  } else {
    return null;
  }
};

export default facebook;
