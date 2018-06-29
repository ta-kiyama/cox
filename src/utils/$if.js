import generateEffectProps from "../generateEffectProps";

const $if = (err) => {
	if(err instanceof Error) throw err;
	return err;
};

export default generateEffectProps((options) => $if)();
