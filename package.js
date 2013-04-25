Package.describe({
  summary: 'RubyJS node module wrapper for Meteor'
});

Package.on_use(function(api) {
  api.add_files(['lib/rubyjs-npm.js'], 'server');
});

Npm.depends({ 'rubyjs': '0.7.2' });