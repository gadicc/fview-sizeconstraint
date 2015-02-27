Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  this.redirect('/siteDemo');
});

Router.route('siteDemo');
Router.route('photoDemo');
Router.route('scaleDemo');
Router.route('paddingDemo');

FView.ready(function() {
  famous.polyfills;
  famous.core.famous;
  
  FView.registerView('ImageSurface', famous.surfaces.ImageSurface);
});