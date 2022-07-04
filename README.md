# Scope of the COTC Project & Why I want to create it:
## Background Information - The Problem;
With the release of Octopath Traveler: Champions of the Continent (COTC) being around the corner for the global English speaking audience, one of the main problems that I had was keeping track of the sheer overwhelming amount of gacha characters that are made available to the player. (Over 80+ unique characters ranging from different combat classes, affiliations and rarity levels).

Therefore, in order to solve this problem and keep track of the characters that I have in a single location. I want to create a project that will contain all of the characters available in COTC, and allow users to sort by classes, affiliation and rarity levels, and to drop them into "Currently Owned" lists which are stored locally.

## The Grand Scope
The end-result of this project that I hope to achieve is being able to create:
1. REST API - That contains all of the objects in JSON form for each individual character that contains their class, affiliation and rarity levels. => This is to reduce the need for the user to download the JSON localy and is great practice in creating my own REST API and creating GET/PUT/POST/DELETE requests.
2. Web Application with Search Functionality (For each individual character), sorting based on class/affiliation/rarity, and storing the characters selected by the user locally into a "Currently Owned" list.

## Step 1 - Create a Traveler Class & Store in JSON File
As there are over 100+ characters in COTC, creating a Traveler Class and manually inputting the characters name in to parse through into a main JSON file will be the most efficient.
For this, I want to have a basic HTML page setup so that I can just put in the name of the character, class, affiliation and rarity level, and then upon clicking a "Submit" button, it will be stored in a JSON file. 

```
function Traveler(affiliation, class, rating) {
this.affiliation = affiliation;
this.class = affiliation;
this.rating = rating;
}

kurtz = new Traveler(fame, thief, 4);
```

## Step 2 - Access JSON File Objects
References:
https://www.pluralsight.com/guides/get-javascript-objects-from-a-json-file
https://attacomsian.com/blog/nodejs-write-json-object-to-file

After having a webpage that allows me to create new instances of the Traveller class and store it as a seperate object within the main JSON file, I will need to then be able to access the JSON File Objects (E.g. I want to retrieve the Traveler "Kurtz" - I would make a fetch request for the Kurtz object within the JSON file and return it on the screen.)

