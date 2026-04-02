// FREE AGENTS LIST
const freeAgents = [
    "Tee Higgins",
    "Chris Jones",
    "Saquon Barkley",
    "Brian Burns",
    "Danielle Hunter",
    "Mike Evans",
    "Justin Madubuike",
    "Kirk Cousins",
    "Calvin Ridley",
    "Antoine Winfield Jr.",
    "Jaylon Johnson",
    "Christian Wilkins",
    "Baker Mayfield",
    "Leonard Williams",
    "Xavier McKinney",
    "Josh Jacobs",
    "Derrick Henry",
    "Chase Young",
    "Michael Pittman Jr.",
    "Jonathan Greenard",
    "Kyle Dugger",
    "Tyron Smith",
    "Patrick Queen",
    "Brian Allen"
];

// Add players to page (only runs if list exists)
const list = document.getElementById("freeAgentsList");

if (list) {
    freeAgents.forEach(player => {
        let li = document.createElement("li");
        li.textContent = player;
        list.appendChild(li);
    });
}


// CAP SPACE TABLE
const capData = [
    { team: "Chicago Bears", cap: "98,000,000" },
    { team: "Washington Commanders", cap: "85,000,000" },
    { team: "New England Patriots", cap: "75,000,000" },
    { team: "Arizona Cardinals", cap: "70,000,000" },
    { team: "Detroit Lions", cap: "60,000,000" },
    { team: "Indianapolis Colts", cap: "55,000,000" },
    { team: "Houston Texans", cap: "50,000,000" }
];

const table = document.getElementById("capTable");

if (table) {
    capData.forEach(entry => {
        let row = document.createElement("tr");

        let teamCell = document.createElement("td");
        teamCell.textContent = entry.team;

        let capCell = document.createElement("td");
        capCell.textContent = entry.cap;

        row.appendChild(teamCell);
        row.appendChild(capCell);

        table.appendChild(row);
    });
}