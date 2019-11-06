// 正解
setTimeout(
    () => {
        console.log('Hello!')
        setTimeout(
           () => {
                console.log('Bye!')
            },
            2000
        )
    },
    3000
)
