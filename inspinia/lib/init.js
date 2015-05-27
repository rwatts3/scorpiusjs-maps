Options.init('homePath')
Options.init('siteName');

ReactiveTemplates.request('tabs', 'orionInspiniaTabs');

ReactiveTemplates.set('layout', 'orionInspiniaLayout');
ReactiveTemplates.set('outAdminLayout', 'orionInspiniaOutAdminLayout');

ReactiveTemplates.set('links', 'orionInspiniaSidebar');
ReactiveTemplates.set('login', 'orionInspiniaLogin');
ReactiveTemplates.set('registerWithInvitation', 'orionInspiniaRegisterWithInvitation');

ReactiveTemplates.set('myAccount.index', 'orionInspiniaAccountIndex');
ReactiveTemplates.set('myAccount.password', 'orionInspiniaAccountPassword');
ReactiveTemplates.set('myAccount.profile', 'orionInspiniaAccountProfile');

ReactiveTemplates.set('accounts.index', 'orionInspiniaAccountsIndex');
ReactiveTemplates.set('accounts.update.roles', 'orionInspiniaAccountsUpdateRoles');
ReactiveTemplates.set('accounts.invite', 'orionInspiniaAccountsInvite');

ReactiveTemplates.set('configUpdate', 'orionInspiniaConfigUpdate');
ReactiveTemplates.set('dictionaryUpdate', 'orionInspiniaDictionaryUpdate');

// Set the default entity templates
Options.set('collectionsDefaultIndexTemplate', 'orionInspiniaCollectionsIndex');
Options.set('collectionsDefaultCreateTemplate', 'orionInspiniaCollectionsCreate');
Options.set('collectionsDefaultUpdateTemplate', 'orionInspiniaCollectionsUpdate');
Options.set('collectionsDefaultDeleteTemplate', 'orionInspiniaCollectionsDelete');

// Pages
ReactiveTemplates.set('pages.index', 'orionInspiniaPagesIndex');
ReactiveTemplates.set('pages.create', 'orionInspiniaPagesCreate');
ReactiveTemplates.set('pages.update', 'orionInspiniaPagesUpdate');
ReactiveTemplates.set('pages.delete', 'orionInspiniaPagesDelete');