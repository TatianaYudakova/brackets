module.exports = function check(str, bracketsConfig) {
  let bracketsConfigObject = {};
  let closeBracketsArray = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
  	bracketsConfigObject[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  for (let i = str.length-1; i >= 0; i--) {
  	if (str[i] in bracketsConfigObject && closeBracketsArray.includes(bracketsConfigObject[str[i]])) {
  		if (closeBracketsArray.length !== 0 && closeBracketsArray[closeBracketsArray.length-1] === bracketsConfigObject[str[i]]) {
  			closeBracketsArray.pop();
  		} else {
  			return false;
  		}
   	} else {
		closeBracketsArray.push(str[i]);
  	}
  }
  
  return closeBracketsArray.length === 0;
}