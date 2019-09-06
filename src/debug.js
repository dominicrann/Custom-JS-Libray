/* eslint no-console: 0 */  // --> OFF
let config = {};
function consoleLog(t) {
	console.log(t);
}

function consoleTable(table) {
	console.table(table);
}


function SetConfig(config){
	config.autoFloor = config.autoFloor ? config.autoFloor : false;
	config.debug = config.debug ? config.debug : false;


}






module.exports = {
	consoleLog: consoleLog,
	consoleTable: consoleTable,
	SetConfig,
	Config,
};