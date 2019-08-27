let journalArray = [];

let journalEntry = {
	date: undefined,
	mood: undefined,
	concepts: undefined,
	text: undefined
};

fuction addEntry(newEntry) {
	journalArray.push(journalEntry);
	console.log(journalArray);
}