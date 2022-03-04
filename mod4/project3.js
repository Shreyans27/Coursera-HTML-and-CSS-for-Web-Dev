var names = ["Yaakov", "John", "Jen", "jason", "paul", "frank", "larry", "paula", "laura", "jim"];
console.log("Array of Names: " + names);

for (var i in names){
	if (names[i][0]==="j" || names[i][0]==="J"){
		console.log("Good Bye " + names[i])
	}
	else{
		console.log("Hello " + names[i])
	}
};
