const dogCategories = [
    "Small Dogs",
    "Medium Dogs",
    "Large Dogs"
]

const SmallDogs = [
    {name: "French Bulldog"},
    {name: "Boston Terrier"},
    {name: "Maltese"},
    {name: "Pomeranian"},
    {name: "Chihuahua"},
    {name: "Pug"},
    {name: "Shih Tzu"},
]

const MediumDogs = [
    {name: "Australian Shepherd"},
    {name: "Dalmation"},
    {name: "Akita"},
    {name: "Chow Chow"},
    {name: "American Bulldog"},
    {name: "Cocker Spaniel"},
]

const LargeDogs = [
    {name: "Labrador Retriever"},
    {name: "Great Dane"},
    {name: "Rottweiler"},
    {name: "Boxer"},
    {name: "Doberman"},
    {name: "Golden Retriever"},
]

function getAllDogBreeds () {
  var allCategories = [SmallDogs, MediumDogs, LargeDogs];  
  var finalArray = [];
  for (let i=0; i<allCategories.length; i++) {
    let currentCategory = allCategories[i];
    for (let j=0; j<currentCategory.length; j++) {
        let currentBreed = currentCategory[j];
        finalArray.push(currentBreed);
    }
  }
  return finalArray;
}

const allDogBreeds = getAllDogBreeds();

export {dogCategories, SmallDogs, MediumDogs, LargeDogs, allDogBreeds}