export async function getActiveTabURL() {
    const tabs = await chrome.tabs.query({
        currentWindow: true,
        active: true
    });
  
    return tabs[0];
}


function loadFact() {

    var beefFacts = ["hello", "there", "how", "are", "you", "doing", "?"];
    var plasticFacts = ["it", "is", "nice", "to", "see", "you"];
    var fishFacts = ["conrad", "sergio", "charlie"];

    var type = getActiveTabURL();

    switch (type) {
        case "beef":
            fact = beefFacts[Math.random(0, beefFacts.length - 1)];
        case "plastic":
            fact = plasticFacts[Math.random(0, beefFacts.length - 1)];
        case "fish":
            fact = fishFacts[Math.random(0, beefFacts.length - 1)];
    }
    
    document.getElementById("fact").innerHTML = fact;
}