var students = [
    {
        name : "Prakhar",
        roll_no : 102,
        mob_no : 123456,
        city :"Lalanpur"
    },
    {
        name : "Shikhar",
        roll_no : 45,
        mob_no : 456789,
        city : "Noida"
    },
    {
        name : "Prashant",
        roll_no : 112,
        mob_no : 987654,
        city : "Kanpur"
    },
    {
        name : "Sameer",
        roll_no : 14,
        mob_no : 741852,
        city : "Kushinagar"
    },
    {
        name : "Pradumn",
        roll_no : 78,
        mob_no : 852369,
        city : "Unnao"
    }
]



for(var i = 0; i<=4 ; i++){
    console.log(students[i].name);
    console.log(students[i].city);

}

students.forEach( function(name,index){
    console.log(name,index);
}
);
