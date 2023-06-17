const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// Filters through the fruits arr and checks each fruit string to see if it includes the input characters. Returns a new array of matching results.
function search(str) {
  if (!str) {
    return [];
  }
  return fruits.filter(function (fruit) {
    return fruit.toLowerCase().includes(str.toLowerCase());
  });
}

// Function calls clearSuggestions function and appends a new li for each result from the search function. This function does not return anything the suggestions are added to the DOM and displayed on the page in realtime.
function showSuggestions(results, inputVal) {
  clearSuggestions();
  results.forEach((result) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = boldSuggestion(result, inputVal);
    suggestions.append(newLi);
  });
}

// Breaks each fruit string down into three substrings: beforeMatch, afterMatch, and match. Then Wraps matching inputVal in fruit string with a bold tag.
// (Apple, app) => <b>App</b>le
function boldSuggestion(fruit, inputVal) {
  const startIndex = fruit.toLowerCase().indexOf(inputVal);
  const endIndex = startIndex + inputVal.length;
  const beforeMatch = fruit.substring(0, startIndex);
  const afterMatch = fruit.substring(endIndex);
  const match = fruit.substring(startIndex, endIndex);
  return beforeMatch + "<b>" + match + "</b>" + afterMatch;
}

// Clears the suggestions ul
function clearSuggestions() {
  suggestions.innerHTML = "";
}

// searchHandler takes results from search function and uses them in the showSuggestions function whenever an input event occurs.
function searchHandler(e) {
  const searchStr = e.target.value;
  const results = search(searchStr);
  showSuggestions(results, searchStr);
}

// useSuggestion populates the input field with the clicked li result and then calls the clearSuggestions function.
function useSuggestion(e) {
  const suggestion = e.target.innerText;
  input.value = suggestion;
  clearSuggestions();
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
