it('Should return an error', null, null, function(){
	return truc.much;
});

it('Should say OK', null, null, function(){
	return 'everything is good';
});

it('Should print OK with equal', 'equal', 3, function(){
	return 3;
});

it('Should print an error with equal cause no match', 'equal', 3, function(){
	return 6;
});

