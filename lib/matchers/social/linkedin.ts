import { Matcher } from '../../types';

const linkedin: Matcher = async (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('linkedin.com') !== -1) {
    return {
      type: 'social',
      network: 'linkedin'
    };
  } else {
    return null;
  }
};

export default linkedin;
