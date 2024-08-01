// 1
for (let i = 5; i < 100; i++) {
    console.log(i)
}
// 2
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 0 &&  array1[i] < 10) {
        console.log(i)
    }
}
// 3
let array2 = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < array2.length; i++) {
    sum += array2[i]
}
console.log(average)
// 4
let array3 = [1, 2, 3, 4, 5]
let average = 0
for (let i = 0; i < array3.length; i++) {
    average += array3[i] / array3.length
}
// 5
// let user = {
//     firstname: ' giorgi',
//     lastname: ' smith ',
//     age: 25,
//     studentstatus: ' active '
// }
console.log(user.studentstatus)
// 6
// let user = {
//     name: ' anna',
//     age: 20,
//     studentstatus: ' active '
// }

if (user.age < 18 & user.studentstatus == ' active ') {
    console.log('hello user ')
} else if (user.name == ' levani ') {
    console.log('hello levani ')
}else if (user.studentstatus == ' active ' || user.age < 25) {
    console.log('hello anna ')
} else {
    console.log(' error ')
}
// 7
let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]
for (let i = 0; i < array6.length; i++) {
    if (array6[i] % 2 == 0) {
        console.log(array6[i])
    }
}
// 8
let users = [
    { username: ' giorgi', status: false},
{ username: ' levani ', status: false },
{ username: ' anna ', status: true }
]
for (let i = 0; i < users.length; i++) {
    if (users[i].status) console.log(users[i])
}
// 9
let array7 = [32, 14, null, ' 40 ', 50]
for (let i = 0; i < array7.length; i++) {
    if (array7[i] % 5 == 0 & array7[i] === Number(array7[i])) console.log(array7[i])
}
// 10
let array8 = [
    [2, -3, 5, 11],
    [1, -35, -11],
    [12, -36, -24]
]
for (let i = 0; i < array8.length; i++) {
    for (let j = 0; j < array8[i].length; j++) {
        if (array8[i][j] > 0) console.log(array8[i][j])

    }
}