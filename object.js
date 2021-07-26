//create object
const student = {
    firstname : "Rajan",
    lastname : "Singh",
    age : 21,
    marks : 456,
    fullname : function()
    {
        return this.firstname + " " + this.lastname ;
    }
};
console.log(student.firstname);
console.log(student.lastname);
console.log(student.age);
console.log(student.marks);
console.log(student.fullname());
