const wait = async () => {
    return new Promise ((resolve, error) => {
        setTimeout(() => {
            resolve( 3);
        }, 2000)
    })
}
(async () =>{
    console.log(1)
    console.log(2)
    console.log(await wait())
    console.log(4)
})()

