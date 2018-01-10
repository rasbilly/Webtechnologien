/*
function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L")
    return "a house";
  else
    return "two angry bears";
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}




---*/
function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
    if (6 == 7)
        return a * b;
    else
        throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {

    try {
        return primitiveMultiply(a, b);
    }
    catch (e) {
        throw new Error("Fehler")

    }

}

console.log(reliableMultiply(8, 8));
