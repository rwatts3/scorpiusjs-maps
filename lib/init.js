Options.init('homePath')
Options.init('siteName');

ReactiveTemplates.request('tabs', 'orionFoundationTabs');

ReactiveTemplates.set('layout', 'orionFoundationLayout');
ReactiveTemplates.set('outAdminLayout', 'orionFoundationOutAdminLayout');

ReactiveTemplates.set('links', 'orionFoundationSidebar');
ReactiveTemplates.set('login', 'orionFoundationLogin');
ReactiveTemplates.set('registerWithInvitation', 'orionFoundationRegisterWithInvitation');

ReactiveTemplates.set('myAccount.index', 'orionFoundationAccountIndex');
ReactiveTemplates.set('myAccount.password', 'orionFoundationAccountPassword');
ReactiveTemplates.set('myAccount.profile', 'orionFoundationAccountProfile');

ReactiveTemplates.set('accounts.index', 'orionFoundationAccountsIndex');
ReactiveTemplates.set('accounts.update.roles', 'orionFoundationAccountsUpdateRoles');
ReactiveTemplates.set('accounts.invite', 'orionFoundationAccountsInvite');

ReactiveTemplates.set('configUpdate', 'orionFoundationConfigUpdate');
ReactiveTemplates.set('dictionaryUpdate', 'orionFoundationDictionaryUpdate');

// Set the default entity templates
Options.set('collectionsDefaultIndexTemplate', 'orionFoundationCollectionsIndex');
Options.set('collectionsDefaultCreateTemplate', 'orionFoundationCollectionsCreate');
Options.set('collectionsDefaultUpdateTemplate', 'orionFoundationCollectionsUpdate');
Options.set('collectionsDefaultDeleteTemplate', 'orionFoundationCollectionsDelete');

// Pages
ReactiveTemplates.set('pages.index', 'orionFoundationPagesIndex');
ReactiveTemplates.set('pages.create', 'orionFoundationPagesCreate');
ReactiveTemplates.set('pages.update', 'orionFoundationPagesUpdate');
ReactiveTemplates.set('pages.delete', 'orionFoundationPagesDelete');