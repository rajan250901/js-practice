//remove a property from an object
const student = {
    firstname : "Rajan",
    lastname : "Singh",
    age : 21,
    fullname : function()
    {
        return this.firstname + " " + this.lastname ;
    }
};
console.log(student.firstname);
console.log(student.lastname);
console.log(student.age);
console.log(student.fullname());
delete student.age;
console.log(student.age);
