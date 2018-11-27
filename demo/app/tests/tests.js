var Cast = require('nativescript-cast').Cast;
var cast = new Cast();

describe('greet function', function() {
  it('exists', function() {
    expect(cast.greet).toBeDefined();
  });

  it('returns a string', function() {
    expect(cast.greet()).toEqual('Hello, NS');
  });
});
