Ext.define('SqlitePopulated.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {

        refs: {
            main: 'main'
        },

        control: {
            main: {
                initialize: 'onInitialize'
            }
        }
    },

    onInitialize: function (view) {
        var me = this,
            list = view.down('list'),
            store = list.getStore();

        if (window.sqlitePlugin) {
            try {
                //window.sqlitePlugin.importPrepopulatedDatabase({ file: "Chinook.sqlite", "importIfExists": true });
                var db = window.sqlitePlugin.openDatabase({ name: "Chinook.sqlite" });
                db.executeSql("SELECT ArtistId, Name FROM Artist;", [], function (res) {
                    var data = [];
                    for (var index = 0; index < res.rows.length; index++) {
                        data.push(res.rows.item(index));
                    }
                    store.setData(data);

                }, function (e) {
                    alert(e.message);
                });
            }
            catch (e) {
                alert(e.message);
            }
        }
        else {
            console.error('SQLite disabled!');
        }
    }
});