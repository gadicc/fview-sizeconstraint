Package.describe({
  name: 'gadicohen:fview-sizeconstraint',
  summary: "set renderable scale, padding, max-size, min-size and aspect-ratio",
  version: '1.0.0',
  git: 'https://github.com/gadicc/fview-sizeconstraint.git',
});

Package.on_use(function(api) {
	if (api.versionsFrom)
	  api.versionsFrom('1.0');

  api.use('mjn:famous@0.3.0_5', 'client', { weak: true });
  api.use('raix:famono@0.9.14', { weak: true });
  api.use('gadicohen:famous-views@0.1.24');

  api.add_files(
  	[
	  	'lib/pre.js',
	  	'lib/famous-sizeconstraint/SizeConstraint.js',
	  	'lib/post.js'
		],
		'client'
	);
});

/*
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gadicohen:fview-lagometer');
  api.addFiles('gadicohen:fview-lagometer-tests.js');
});
*/
