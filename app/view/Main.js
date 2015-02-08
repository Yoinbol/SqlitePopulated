Ext.define('SqlitePopulated.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List',
        'SqlitePopulated.model.Artist'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'list',
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Chinook DB'
                },

                store: {
                    model: 'SqlitePopulated.model.Artist'
                },

                itemTpl: '{ArtistId}: {Name}'
            }
        ]
    }
});
