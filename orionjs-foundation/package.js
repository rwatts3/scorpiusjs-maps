Package.describe({
  name: 'orionjs:bootstrap',
  summary: 'A simple theme for orion',
  version: '1.0.0',
  git: 'https://github.com/orionjs/orion'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'meteor-platform',
    'orionjs:core@1.0.0',
    'less',
    'iron:layout@1.0.7',
    'aldeed:autoform@5.1.2',
    'aldeed:tabular@1.1.0',
    'useraccounts:bootstrap@1.8.1',
    'zimme:iron-router-active@1.0.4'
    ]);

  api.imply([
    'orionjs:core',
    'iron:layout',
    'aldeed:autoform',
    'useraccounts:bootstrap',
    'zimme:iron-router-active'
    ]);

  api.addFiles([
    'lib/init.js',
    'lib/tabular.js'
    ]);

  api.addFiles([
    'lib/views/layout/layout.html',
    'lib/views/layout/layout.js',
    'lib/views/layout/layout.less',
    'lib/views/sidebar/sidebar.html',
    'lib/views/sidebar/sidebar.less',
    'lib/views/accounts/login.html',
    'lib/views/accounts/register-with-invitation.html',
    'lib/views/accounts/index.html',
    'lib/views/accounts/password.html',
    'lib/views/accounts/profile.html',
    'lib/views/accounts/profile.js',
    'lib/views/accounts/accounts.less',
    'lib/views/accounts/accounts.html',
    'lib/views/accounts/roles.html',
    'lib/views/accounts/invite.html',
    'lib/views/config/update.html',
    'lib/views/config/update.js',
    'lib/views/dictionary/update.html',
    'lib/views/dictionary/update.js',
    'lib/views/collections/index.html',
    'lib/views/collections/index.js',
    'lib/views/collections/index.less',
    'lib/views/collections/create.html',
    'lib/views/collections/create.js',
    'lib/views/collections/update.html',
    'lib/views/collections/update.js',
    'lib/views/collections/delete.html',
    'lib/views/pages/index.html',
    'lib/views/pages/create.html',
    'lib/views/pages/update.html',
    'lib/views/pages/delete.html',
    'lib/views/pages/pages.js',
    ], 'client');

  api.export('orion');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('orionjs:core');
});
