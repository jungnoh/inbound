import { Matcher } from '../../types';

const internal: Matcher = async (href, referrer) => {
	if (href.host && referrer.host && href.host === referrer.host) {
		return {
			type: 'internal'
		};
	} else {
		return null;
	}
};

export default internal;
