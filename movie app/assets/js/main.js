const URL_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1`;


// tao 1 function getApi()
const getApi = async (URL_API) => {
    // console.log(URl);

    const reponsive = await axios.get(URL_API);
    console.log(reponsive.data.results);
};

getApi(URL_API);