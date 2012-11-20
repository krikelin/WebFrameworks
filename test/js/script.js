/*
 *
 *
 */
alert("A");
/**
variable
= v:([a-zA-Z_][a-zA-Z0-9_]*) { // The first character must not be a number
 return { 
   type: "string",
   value: v.join("")
 } 
}

integer
= digits:[0-9]+ { 
  return { 
	type: "integer", 
	value: parseInt(digits.join(""), 10) 
  }
}

audio
= "@" id:[a-z] {
	return {
		"spotify:track:" + id
	}

**/