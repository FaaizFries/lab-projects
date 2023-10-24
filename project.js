// easy going
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
// get even
for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}
// fizz buzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
// wild wild life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] += 1; 

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";

// Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy[0] = "Gameboy";

// Print out the modified arrays to verify the changes
console.log(wolfy);
console.log(sharky);
console.log(plantee);
console.log(porgee);
console.log(dart);

// yell at the ninja turtles
const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const turtle of turtles) {
  const upperCaseName = turtle.toUpperCase();
  console.log(upperCaseName);
}
// methods revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'));
favMovies.sort();
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
let unshiftResult = favMovies.unshift("Avatar");
const djangoIndex = favMovies.indexOf("Django Unchained");
favMovies.splice(djangoIndex, 1, "Avatar");
const middleIndex = Math.floor(favMovies.length / 2);
const secondHalf = favMovies.slice(middleIndex);
console.log(secondHalf);
console.log(favMovies);
console.log(favMovies.indexOf('Fast and Furious'));
// where is waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];
                      
// Remove Eggbert using splice
const indexToRemove = whereIsWaldo.indexOf("Eggbert");
if (indexToRemove !== -1) {
  whereIsWaldo.splice(indexToRemove, 1);
}

// Change "Neff" to "No One"
whereIsWaldo[2][2] = "No One";

// Access and console.log "Waldo"
const waldoLocation = whereIsWaldo[3][1][1];
console.log(waldoLocation);

console.log(whereIsWaldo);
// exicted kitten
for (let i = 1; i <= 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
  
    if (i % 2 === 0) {
      const randomMessage = Math.floor(Math.random() * 3);
  
      switch (randomMessage) {
        case 0:
          console.log("...human... why you taking pictures of me...?");
          break;
        case 1:
          console.log("...the catnip made me do it...");
          break;
        case 2:
          console.log("...why does the red dot always get away...?");
          break;
      }
    }
  }
  // find the median
  const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];

  nums.sort((a, b) => a - b);
  
  let median;
  const middle = Math.floor(nums.length / 2);
  
  if (nums.length % 2 === 0) {
    median = (nums[middle - 1] + nums[middle]) / 2;
  } else {
    median = nums[middle];
  }
  console.log(median);

////
////
///


                

