var names = ["John", "Sam", "James", "George", "Jack", "Robert", "Clint", "Joe", "Leo", "Ron"];
console.log("Array of Names: " + names);

for (var i in names){
	if (names[i][0]==="j" || names[i][0]==="J"){
		console.log("Hello " + names[i])
	}
	else{
		console.log("Goodbye " + names[i])
	}
};
