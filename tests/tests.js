var app = new Backpack();

QUnit.test("Backpack.forceFallback", function(assert) {
  app.forceFallback();
  assert.equal($('#mi_size_container').length,  0, "removes element");
});