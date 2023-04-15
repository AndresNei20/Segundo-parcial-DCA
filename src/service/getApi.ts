export async function getApi() {
    try {
        const data = await fetch('https://api.chucknorris.io/jokes/categories').then(res => res.json() )
        console.log(data);
        return data

    } catch (error) {
        console.log(error)
    }
}