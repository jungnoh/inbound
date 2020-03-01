import { Matcher } from '../../types';

const direct: Matcher = async (href, referrer) => {
	if (!referrer.href || (referrer.protocol && referrer.protocol == 'about:')) {
    return {type: 'direct'};
  } else {
    return null;
  }
};

export default direct;
