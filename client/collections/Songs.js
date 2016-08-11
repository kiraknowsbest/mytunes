// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {
    this.url = 'https://api.parse.com/1/classes/songs/';
    this.fetch();
  }
});