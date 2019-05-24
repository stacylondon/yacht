const chalk = require('chalk');
const figlet = require('figlet');

figlet('Yachts', function(err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
  console.log(chalk.blue.bold(`
                __/___            
          _____/______|           
  _______/_____\\_______\\_____     
  \\              < < <       |    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));

  console.log('\n');
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
  console.log(chalk.white.bgBlue.bold('    You\'re not invited on my yacht.     '));
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
});
