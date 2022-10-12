const things = [exports, require, module, __filename, __dirname];

for (var v = 0; v < things.length; v++) {
  console.log(typeof things[v]);
  console.log(things[v]);
}
