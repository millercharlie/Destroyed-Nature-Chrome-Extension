console.log("JavaScript file successfully loaded");

const tabs = await chrome.tabs.query({
    currentWindow: true,
    active: true
});

const beefFacts = ["hello", "there", "how", "are", "you", "doing", "?", "This product consumed 500 gallons of water."];
const plasticFacts = ["it", "is", "nice", "to", "see", "you"];
const fishFacts = ["conrad", "sergio", "charlie"];

const allFacts = [beefFacts, plasticFacts, fishFacts];

var type = tabs[0].url.toString();
var fact;

console.log("Current url: " + type);

if (type.includes("beef") || type.includes("jerky") || type.includes("steak")) {
    console.log("beef fact was called");
    fact = beefFacts[Math.floor(Math.random() * beefFacts.length)];
}
else if (type.includes("plastic") || type.includes("bottle") || type.includes("trash") || type.includes("garbage")) {
    console.log("plastic fact was called");
    fact = plasticFacts[Math.floor(Math.random() * plasticFacts.length)];
}
else if (type.includes("fish") || type.includes("fillet") || type.includes("seafood")) {
    console.log("fish fact was called");
    fact = fishFacts[Math.floor(Math.random() * fishFacts.length)];
}
else {
    var index = Math.floor(Math.random() * 2);
    if (index === 0) {
        console.log("beef fact was called (random)");
        fact = beefFacts[Math.floor(Math.random() * beefFacts.length)];
    }
    else if (index === 1) {
        console.log("plastic fact was called (random)");
        fact = plasticFacts[Math.floor(Math.random() * plasticFacts.length)];
    }
    else {
        console.log("fish fact was called (random)");
        fact = fishFacts[Math.floor(Math.random() * fishFacts.length)];
    }
    console.log(fact);
}

if (!console.toString().includes("random")) {
    // popup automatically
}

document.getElementById("fact").innerHTML = fact;
