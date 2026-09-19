let faculty = "Computer Science";
let studyProgram = "System Information";

console.log("--- tanpa switch ---");

if (studyProgram.toLowerCase() === faculty.toLowerCase() || 
    studyProgram.toLowerCase() === "system information") {
    console.log("Program Study :", studyProgram);
    console.log("Boleh Daftar Course!!");

} else if(studyProgram.toLowerCase() === "Informatics"){
    console.log("Study Program :", studyProgram);
    console.log("Boleh Daftar Course!!");

} else {
    console.log("Gak match, gak boleh daftar!");
}

// --- switch case ---
console.log("--- switch case ---");
switch(faculty){
    case "Computer Science":
        console.log("Asal Fakultas :", faculty)
        console.log("Boleh Ikut Course!!");
        break;

    default:
        console.log("Tidak boleh Ikut Course !!")
}