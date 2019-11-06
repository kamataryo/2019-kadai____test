// 3がつく数字の時にメッセージを表示する

const max = parseInt(process.argv[2])

for (let n = 1; n <= max; n = n + 1) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log('fizz buzz')
    } else if (n % 3 === 0) {
        console.log('fizz')
    } else if (n % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(n)
    }
}