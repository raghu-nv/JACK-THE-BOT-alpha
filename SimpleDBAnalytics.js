var simpleAnalysticsDBAccess = (function(){

	var min_by_key = function(key,records){
		let matchingSet = [];
		for(let i=0;i<records.length;i++){
			if(records[i][key]!==undefined){
				matchingSet[records[i][key]] = i;
			}else{
				matchingSet[records[i][key]] = 0;
			}
		}
		let minimumKey = Object.keys(matchingSet).reduce((key, v) => matchingSet[v] < matchingSet[key] ? v : key);
		return records[matchingSet[minimumKey]];
	};


//	Test helper
	var assert_equal =function(actual, expected) {
		if (JSON.stringify(actual) != JSON.stringify(expected)) {
			console.log(`Assertion failed: ${JSON.stringify(actual)} does not match expected ${JSON.stringify(expected)}`)
			console.trace()
		}
	};

//	Tests
	var test_min_by_key=function() {
		let example1 = [{ a: 1, b: 2 }, { a: 2 }],
		example2 = [{ a: 2 }, { a: 1, b: 2 }],
		example3 = [{}],
		example4 = [{ a: -1 }, { b: -1 }]
		assert_equal(min_by_key("a", example1), example1[0])
		assert_equal(min_by_key("a", example2), example2[1])
		assert_equal(min_by_key("b", example1), example1[1])
		assert_equal(min_by_key("a", example3), example3[0])
		assert_equal(min_by_key("b", example4), example4[1])
		console.log("Finished: test_min_by_key")
	};

	test_min_by_key()
})();