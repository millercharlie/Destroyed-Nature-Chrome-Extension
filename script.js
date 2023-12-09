console.log("JavaScript file successfully loaded");

const tabs = await chrome.tabs.query({
    currentWindow: true,
    active: true
});

const beefFacts = ["Each year, an area of rainforest larger than New York is cleared for cattle grazing", "Cattle production waste pollutes water resources and contributes to soil degradation", "Over two-thirds of global agricultural land is used for livestock, intensifying desertification and deforestation", "Livestock farming, primarily for beef, is a leading cause of soil erosion worldwide", "Ruminant livestock, including cattle, account for up to 18% of global methane emissions"];
const fishFacts = ["Fish farming contributes to water contamination with waste products, pesticides, and veterinary drugs, affecting entire aquatic ecosystems", "To produce 1 kg of high-protein fishmeal for farmed fish, it takes 4.5 kg of smaller ocean fish, significantly impacting marine life", "Mangrove forests and other critical coastal ecosystems are being destroyed to create space for fish and shrimp farms", "Fish farms can spread diseases and pests like sea lice to wild fish populations, causing severe damage to native species"];

const allFacts = [beefFacts, /*plasticFacts,*/ fishFacts];

var type = tabs[0].url.toString();
var fact;

console.log("Current url: " + type);

if (type.includes("beef") || type.includes("jerky") || type.includes("steak")) {
    console.log("beef fact was called");
    fact = beefFacts[Math.floor(Math.random() * beefFacts.length)];
}
// else if (type.includes("plastic") || type.includes("bottle") || type.includes("trash") || type.includes("garbage")) {
//     console.log("plastic fact was called");
//     fact = plasticFacts[Math.floor(Math.random() * plasticFacts.length)];
// }
else if (type.includes("fish") || type.includes("fillet") || type.includes("seafood")) {
    console.log("fish fact was called");
    fact = fishFacts[Math.floor(Math.random() * fishFacts.length)];
}
else {
    var index = Math.floor(Math.random());
    if (index === 0) {
        console.log("beef fact was called (random)");
        fact = beefFacts[Math.floor(Math.random() * beefFacts.length)];
    }
    // else if (index === 1) {
    //     console.log("plastic fact was called (random)");
    //     fact = plasticFacts[Math.floor(Math.random() * plasticFacts.length)];
    // }
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
