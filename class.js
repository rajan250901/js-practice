class student
{
    constructor(name, age, gender, rollno)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.rollno = rollno
    }
    printdetails()
    {
        console.log("Name of the student        : " + this.name);
        console.log("Age of the student         : " + this.age);
        console.log("Gender of the student      : " + this.gender);
        console.log("Roll number of the student : " + this.rollno);
    }
   marks(phy , chem, maths, eng , comp)
    {
        console.log("marks in all the 5 subjects");
        console.log("physics   : " +  phy);
        console.log("chemistry : " +  chem);
        console.log("maths     : " +  maths);
        console.log("english   : " +  eng);
        console.log("computer  : " +  comp);
        let total = phy+chem+maths+eng+comp;
        console.log("Total marks of the student : " + total);
        let percentage = (total*100)/500;
        return percentage;
    }
    grade(total)
    {
        if(total>90)
        {
            console.log("grade is : A+");
        }
        else if(total>=80 && total<90)
        {
            console.log("grade is : A");
        }
        else if(total>=70 && total<80)
        {
            console.log("grade is : B+");
        }
        else if(total>=60 && total<70)
        {
            console.log("grade is : B");
        }
        else
        {
            console.log("grade is : C");
        }

    }
}
let stud1 = new student("RAJAN KUMAR SINGH", 21, "MALE" , 1911114);
stud1.printdetails();
let percent = stud1.marks(72 , 82, 91,74, 93);
console.log(" overall percentage of the student is  :  " + percent + " %");
stud1.grade(percent);
let stud2 = new student("ROMAN REIGN", 19, "MALE" , 1911120);
stud2.printdetails();
percent = stud1.marks(70 , 62, 51 , 54, 99);
console.log(" overall percentage of the student is  :  " + percent + " %");
stud2.grade(percent);