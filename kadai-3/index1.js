// 生まれた日を入力
const day = parseInt(process.argv[2])

if (day % 4 === 0) {
    console.log('あなたはaaaaな性格です')
} else if(day % 4 === 1) {
    console.log('あなたはbbbな性格です')
} else if(day % 4 === 2) {
    console.log('dddd')
} else {
    console.log('あなたはcccな性格です')
}