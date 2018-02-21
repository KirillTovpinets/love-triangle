/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
 // let count = getLoveTrianglesCount([2, 3, 1]);
 //  console.log(count); // 1

//[1, 2,  3,   4, 5,  6, 7,  8,  9, 10, 11,12, 13, 14, 15,16,17,18,19,20, 21]
//[6, 14, 12, 21, 3, 20, 7, 15, 16, 16, 14, 4, 11, 13, 18, 2, 1, 8, 3, 1, 12]
module.exports = function getLoveTrianglesCount(preferences = []) {

	var numCouples = 0;
	var temp = [];
  for (var i = 0; i < preferences.length; i++) {
  	var couple = [];
  	let first = preferences[i];
  	let second = i + 1;
  	let indexOfSecond = preferences.indexOf(second);
  	var third = preferences[first - 1];
  	let indexOfThird = first - 1;

  	couple.push(first);
	couple.push(second);

	if ((indexOfSecond+1) !== third) {
		continue;
	}
  	if (indexOfSecond === -1 || 
  		preferences.indexOf(indexOfSecond + 1) === -1 ||
  		second === first ||
  		temp.indexOf(first) !== -1 || temp.indexOf(i + 1) !== -1) {
  		continue;
  	}
	if (couple.indexOf(third) === -1 &&
		couple.indexOf(indexOfThird + 1) !== -1 &&
		third !== undefined) {
		numCouples++;
		temp.push(first);
		temp.push(second);
		temp.push(third);
	} 
  }

  return numCouples;

};
