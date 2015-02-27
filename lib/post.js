var SizeConstraint;

FView.ready(function() {
	libDefine(myRequire, {}, module);
	SizeConstraint = module.exports;

	FView.registerView('SizeConstraint', SizeConstraint, {
    add: function(child) {
      this.view.add(child);
    }
  });
});
