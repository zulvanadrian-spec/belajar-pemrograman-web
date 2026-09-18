let faculty = "computer sience".toLowerCase;
let studyProgram = "informatics".toLowerCase;


if (faculty === "Computer Sience".toLowerCase){
    console.log("Boleh Daftar Course!!");
    
} else if(studyProgram === "Informatics".toLowerCase){
    console.log("Boleh Daftar Course!!");

}
 else if(studyProgram === "System Informations".toLowerCase){
    console.log("Boleh Daftar Course!!");

} else {
    console.log("Tidak diperbolehkan Ikut Course");
}

// --- switch case ---
switch(studyProgram){
    case "Informatics".toLowerCase:
        console.log("Boleh Daftar Course!!");
        break;

    case "System Information".toLowerCase:
        console.log("Boleh Daftar Course!!");
        break;
    
    default:
        console.log("Tidak diperbolehkan Ikut Course");

}
