/*
Little and simple Testing Unit, for a simple use in small personal applications
Copyright 2015, Clement Artaud
*/

function it(should, operator, val, testFunc){
	var str = should + ' : ';
	var funcReturn = null;
	try {
		funcReturn = testFunc.call();
		var result = null;
		switch(operator){
			case 'equal':
				result = (funcReturn == val) ? 'OK' : 'Err';
				break;
			case 'lowerthan':
				result = (funcReturn <= val) ? 'OK' : 'Err';
				break;
			case 'greaterthan':
				result = (funcReturn >= val) ? 'OK' : 'Err';
				break;
			case null:
				result = 'OK';
				break;
			default:
				result = 'NoSel';
				break;
		}
		
		if(result == 'Err') throw new Error('Function does not match the required value : asked '+operator+' '+val+', returned '+funcReturn);
		else if(result == 'NoSel') throw new Error('Wrong selector in query');
		str += result;
	}
	catch(err) {
		str += 'Error : '+err.message;
	}
	finally {
		console.log(str);
	}
}