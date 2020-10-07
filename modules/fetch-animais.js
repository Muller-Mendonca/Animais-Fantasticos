export default function initFetchAnimais(){

}


async function fetchAnimais(url){
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();
}

fetchAnimais('./fetch-animais.js')