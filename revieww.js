//Review from lecture page 68 
//arrow functions
multiply = (a,b) => a*b
//equivalent to:
/*
multiply2 = function(a,b){
    return a*b
}
*/
square = a => multiply(a,a)

bigger = (a,b) => {
    return a>=b ? a:b
}
console.log(bigger(1,3))

//IIFE: Immediately Invoked Function Expression is a JavaScript function that runs as soon as it is defined

!(function(){
    console.log('I called myself')
})()

!(function(){
    console.log('I called myself too')
}())

//arrays in JS 
//Introducing array.push 
students = [
    {grade:93, name:'DeShea'},
    {grade:96, name:'Devin'},
    {grade:90.0, name:'Phylicia'}
]

ids = []
for (let i=0; i < students.length; i++) {
    ids.push(students[i].grade)
}
console.log(ids)

//concept of map: apply some function F to every value in the array
//map()method creates a new array with the results of calling a provided function on every
//element in the calling array
var grades = students.map(function(student){
    return student.grade 
});
console.log('map grades ' + grades)
var grades = students.map(student => student.grade)
console.log('map grades ' + grades) //simplified way 

//Reduce
//the reduce() method executes a reducer function that you provide on each member of the 
//array resulting in a single output value
sum = grades.reduce((sum, grade) => sum += grade, 0)
console.log(sum) //sum up starting from 0; if 1 -> sum is 280 
average = grades.reduce((sum, grade) => sum += grade, 0)/grades.length
console.log(average)

highestGrade = students.reduce((highScorer, student) => {
    return (highScorer.grade || 0)> student.grade ? highScorer : student; 
});//??????????
console.log(highestGrade) // { grade: 96, name: 'Devin' } 