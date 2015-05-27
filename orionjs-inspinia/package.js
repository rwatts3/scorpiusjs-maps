Package.describe({
  name: 'rwatts:orionjs-inspinia',
  summary: 'A Powerful Admin Theme built for Orion using Inspinia',
  version: '0.0.1',
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
    'zimme:iron-router-active@1.0.4',
    "fortawesome:fontawesome@4.3.0"
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
    'lib/views/sidebar/sidebar.html',
    'lib/views/sidebar/sidebar.js',
    'lib/views/accounts/login.html',
    'lib/views/accounts/register-with-invitation.html',
    'lib/views/accounts/index.html',
    'lib/views/accounts/password.html',
    'lib/views/accounts/profile.html',
    'lib/views/accounts/profile.js',
    'lib/views/accounts/accounts.html',
    'lib/views/accounts/roles.html',
    'lib/views/accounts/invite.html',
    'lib/views/config/update.html',
    'lib/views/config/update.js',
    'lib/views/dictionary/update.html',
    'lib/views/dictionary/update.js',
    'lib/views/collections/index.html',
    'lib/views/collections/index.js',
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

    //INSPINIA - Images
    'lib/public/._favicon.ico' , 
    'lib/public/favicon.ico' , 
    'lib/public/patterns/congruent_pentagon.png' , 
    'lib/public/patterns/header-profile-skin-1.png' , 
    'lib/public/patterns/header-profile-skin-2.png' , 
    'lib/public/patterns/header-profile-skin-3.png' , 
    'lib/public/patterns/header-profile.png' , 
    'lib/public/patterns/otis_redding.png' , 
    'lib/public/patterns/shattered.png' , 
    'lib/public/patterns/triangular.png' ,

    //INSPINIA - Stylesheets
    'lib/stylesheets/style.less' , 
    'lib/stylesheets/animatecss/animate.css' , 
    'lib/stylesheets/globals/badgets_labels.import.less' , 
    'lib/stylesheets/globals/base.import.less' , 
    'lib/stylesheets/globals/buttons.import.less' , 
    'lib/stylesheets/globals/chat.import.less' , 
    'lib/stylesheets/globals/custom.import.less', 
    'lib/stylesheets/globals/elements.import.less' , 
    'lib/stylesheets/globals/media.import.less' , 
    'lib/stylesheets/globals/mixins.import.less' , 
    'lib/stylesheets/globals/navigation.import.less' , 
    'lib/stylesheets/globals/pages.import.less' , 
    'lib/stylesheets/globals/rtl.import.less' , 
    'lib/stylesheets/globals/sidebar.import.less' , 
    'lib/stylesheets/globals/skins.import.less' , 
    'lib/stylesheets/globals/spinners.import.less' , 
    'lib/stylesheets/globals/theme-config.import.less' , 
    'lib/stylesheets/globals/top_navigation.import.less' , 
    'lib/stylesheets/globals/typography.import.less' , 
    'lib/stylesheets/globals/variables.import.less',

    //INSPINIA - Plugins
    'lib/plugins/awesome-bootstrap-checkbox-master/awesome-bootstrap-checkbox.css' , 
    'lib/plugins/blueimp/blueimp-gallery-indicator.css' , 
    'lib/plugins/blueimp/blueimp-gallery-video.css' , 
    'lib/plugins/blueimp/blueimp-gallery.min.css' , 
    'lib/plugins/blueimp/jquery.blueimp-gallery.min.js',
    'lib/plugins/metisMenu/jquery.metisMenu.js',
    'lib/plugins/pace/pace.min.js', 
    'lib/plugins/slimscroll/jquery.slimscroll.min.js' 

    ], 'client');

  api.export('orion');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('orionjs:core');
});
