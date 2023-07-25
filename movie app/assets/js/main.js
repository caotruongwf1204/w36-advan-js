const URL_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1`;

// truy cap phan tu
const filmElement = document.querySelector('#render-js');
// console.log(filmElement);



// tao 1 function getApi()
const getApi = async (URL_API) => {
    // console.log(URl);

    const reponsive = await axios.get(URL_API);
    // console.log(reponsive.data.results);
    showData(reponsive.data.results);
};

getApi(URL_API);



//function show data

const showData = (data) => {
    let HTML = ``
    data.forEach((item, index) => {
        // console.log(item, 'gia tri cua mang');

        HTML += `
        <div class="col-12 col-sm-6 col-md-3">
            <div class="card">
              <img src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/7/0/700x1000_.jpg" class="card-img-top" alt="...">

              <div class="card-body">
                <h5 class="card-title">TRANSFORMERS: QUÁI THÚ TRỖI DẬY</h5>
                <p class="rate">8.8</p>
              </div>
              <div class="overviews">
                <h4>overview</h4>
                <p>When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.</p>
              </div>
            </div>
          </div>`;
      filmElement.innerHTML = HTML;
    });
}