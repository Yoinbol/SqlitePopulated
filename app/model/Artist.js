Ext.define('SqlitePopulated.model.Artist', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'ArtistId', type: 'integer' },
            { name: 'Name', type: 'string' }
        ]
    }
});