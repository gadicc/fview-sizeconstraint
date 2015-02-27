myRequire = function(what) {
	switch(what) {
    case 'famous/core/Entity': return famous.core.Entity;
    case 'famous/core/RenderNode': return famous.core.RenderNode;
    case 'famous/core/OptionsManager': return famous.core.OptionsManager;
		default:
			throw new Error('New require of ' + what);
	}
};

module = {};
libDefine = null;

define = function(func) {
	libDefine = func;
};
