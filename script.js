const jokes = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const generateJokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }

        const res = await fetch("https://icanhazdadjoke.com/", setHeader)
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }

    catch (err) {
        console.log(`Error:${err}`);
    }

}


generateJokes();
