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
  	if (temp.indexOf(preferences[i]) !== -1) {
  		continue;
  	}
  	var couple = [];
  	let first = preferences[i];
  	couple.push(first);
  	let second = i + 1;
  	if (preferences.indexOf(second) === -1 || 
  		preferences.indexOf(preferences.indexOf(second)) === -1 ||
  		second === first) {
  		continue;
  	}
  	couple.push(second);
  	var third = preferences[first - 1];

	if (couple.indexOf(third) === -1 &&
		couple.indexOf(preferences.indexOf(third) + 1) !== -1 &&
		third !== undefined) {
		numCouples++;
		temp.push(first);
		temp.push(second);
		temp.push(third);
	} 
  }

  return numCouples;

};
