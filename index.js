const figlet = require('figlet');
const myYachts = require('./myYachts');

figlet('Yachts', function(err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
  myYachts.getYacht();
});
