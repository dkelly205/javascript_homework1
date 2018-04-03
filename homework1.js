// Go through each sample code and work out what the output will be and explain what happened.
//
// Episode 1
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

this gives my name is Keith because var name = Keith is a global variable and can be used in the printName function





// Episode 2
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

this gives 3 because score has been set to 3 inside result function.  When we define a local variable it takes priority in the function over the global variable.  This is called shadowing


// Episode 3
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}


listAnimals();

this gives

0: Ducks
1: Dogs
2: Lions


when we forget to use var, instead of creating a new local variable, the global variable is reassigned.



// Episode 4
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

allSuspects();  will return all suspects but replace suspectThree Keith with Harvey as it the local variable will take priority in the function over the global variable
console.log( 'Suspect three is:' + suspectThree ); will return Suspect three is: Keith because variables created inside functions have function scope, so they can be seen anywhere inside the function but nowhere else




// Episode 5
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

returns
Poirot because name has been reassigned to Poirot



// Episode 6
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

returns the murderer is rick
because rick is the global variable and is available outside the function.
marc is a local variable so only available inside the outerFunction, valerie has reassigned the local variable value to valerie instead of marc, so again it is still the local variable.




Episode 7 - Make up your own episode/s!
Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.

var hero = "Batman";
var test = function(){
  hero = "Superman";

  var innerTest = function(){
    hero = "Spiderman";
  }
  innerTest();
}
test();
console.log('the hero is ', hero);

this returns the hero is spiderman
