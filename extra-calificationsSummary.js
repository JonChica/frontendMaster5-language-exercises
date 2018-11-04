var students = [
    { name: 'Juan', califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34] },
    { name: 'Álvaro', califications: [4.49, 1.52, 7.00, 8.30, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01] },
    { name: 'María', califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.80, 9.30] },
    { name: 'Jorge', califications: [4.60, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69] },
    { name: 'Mónica', califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48] },
];
var summarizeClassRoom = function (studentList) {
    var result = [];
    for (var _i = 0, studentList_1 = studentList; _i < studentList_1.length; _i++) {
        var studentItem = studentList_1[_i];
        var student = {
            name: studentItem.name,
            highestCalification: Math.max.apply(Math, studentItem.califications),
            averageCalification: (studentItem.califications.reduce(function (a, b) { return a + b; }, 0) / studentItem.califications.length).toPrecision(3)
        };
        result.push(student);
    }
    return result;
};
console.log(summarizeClassRoom(students));
// [
//   { name: 'Juan', highestCalification: 9.71, averageCalifications: '5.37' },
//   { name: 'Álvaro', highestCalification: 8.3, averageCalifications: '5.58' },
//   { name: 'María', highestCalification: 9.3, averageCalifications: '3.92' },
//   { name: 'Jorge', highestCalification: 9.07, averageCalifications: '5.38' },
//   { name: 'Mónica', highestCalification: 9.72, averageCalifications: '4.42' }
// ]
