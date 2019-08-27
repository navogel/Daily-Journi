let journalArray = [];

let journalEntry = {
	date: undefined,
	mood: undefined,
	concepts: undefined,
	text: undefined
};

function addEntry(newEntry) {
	journalArray.push(journalEntry);
	console.log(journalArray);
}

