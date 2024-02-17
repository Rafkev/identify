// Function to generate a random alphanumeric ID of a specified length
function generateRandomID(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomID = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomID += characters.charAt(randomIndex);
    }
    return randomID;
}

// Function to generate and assign student IDs
function assignStudentIDs(studentList, idLength) {
    const generatedIDs = new Set(); // Set to store generated IDs
    studentList.forEach(student => {
        let newID;
        do {
            newID = generateRandomID(idLength);
        } while (generatedIDs.has(newID)); // Ensure uniqueness
        generatedIDs.add(newID); // Add new ID to the set
        student.id = newID; // Assign the ID to the student object
    });
}

// Example usage:
const students = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" },
    { name: "David" }
];

// Assign IDs to students
assignStudentIDs(students, 8); // Specify the desired length of the IDs

// Display students with their assigned IDs
students.forEach(student => {
    console.log(`${student.name}: ${student.id}`);
});
