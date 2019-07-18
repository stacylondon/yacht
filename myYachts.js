module.exports.getYacht = () => {
  const chalk = require('chalk');
  const fs = require( 'fs' );
  const path = require( 'path' );

  fs.readdir( './yachts', { 'encoding': 'utf8', 'withFIleTypes': true }, ( err, files ) => {
    if (err) {
      throw err;
    } else {
      fs.readFile( path.join( './yachts/', files[randomNumber(0,files.length)] ), ( err, data ) => {
        if (err) {
          throw err;
        } else {
          console.log(chalk.blue.bold(data.toString()));
          console.log('\n');
          console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
          console.log(chalk.white.bgBlue.bold('    You\'re not invited on my yacht.     '));
          console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
        }
      } );
    }
  } );

  function randomNumber( low, high ) {
    let min = Math.ceil( low );
    let max = Math.floor( high );

    return Math.floor(Math.random() * (max - min)) + min;
  };
};


