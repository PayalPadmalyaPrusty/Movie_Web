let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');

left_btn.addEventListener('click', ()=>{
    cards.scrollLeft -=140;
})
left_btn.addEventListener('click', ()=>{
    cards.scrollLeft +=140;
})

let json_url = "movie.json";

fetch(json_url).then(Response => Response.json()).then((data) => {
    data.forEach((ele, i) => {
        let {name, imdb, date, sposter, bposter, genre, url} = ele;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
        <img src="${sposter}" alt="${name}" class="poster">
        <div class="rest_card">
            <img src="${bposter}" alt="">
            <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                    <p>${genre}, ${date}</p>
                    <h3><span>IMDB</span> <i class="bi bi-star-fill">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                    </i> ${imdb}</h3>
                </div>
            </div> 
        </div>
        `
        cards.appendChild(card);
    });

    document.getElementById('title').innerText = data[0].name;
    document.getElementById('gen').innerText = data[0].genre;
    document.getElementById('date').innerText = data[0].date;
    document.getElementById('rate').innerHTML = `
    <span>IMDB</span><i class="bi bi-star-fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg> ${data[0].imdb}`;

                      //search data Load
                      data.forEach(element =>{
                        let {name, imdb, date, sposter, genre, url} = element;
                        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
        <img src="${sposter}" alt="">
                    <div class="cont">
                        <h3>${name}</h3>
                        <p>${genre}, ${date}, <span>IMDB</span><i class="bi bi-star-fill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                        </i> ${imdb}</p>
                    </div>`

                    search.appendChild(card);
                      });

                      search_input.addEventListener('keyup', ()=> {
                        let filter = search_input.value.toUpperCase();
                        let a = search.getElementsByTagName('a');
                        for(let index = 0;index<a.length; index++){
                            let b = a[index].getElementsByClassName('cont')[0];
                            let TextValue = b.textContent || b.innerText
                            if(TextValue.toUpperCase().indexOf(filter) > -1){
                                a[index].style.display = "flex";
                                search.style.visibility = "visible";
                                search.style.opacity = 1;
                            }else{
                                a[index].style.display = "none";
                            }
                            if(search_input.value == 0){
                                search.style.visibility = "hidden";
                                search.style.opacity = 0;
                            }
                        }
                      })
                      let video = document.getElementsByTagName('video')[0];
                      let play = document.getElementById('play');
                      play.addEventListener('click', () =>{
                        if(video.paused){
                            video.play();
                            play.innerHTML = `
                            Pause <i class="bi bi-pause-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
                          </svg>`
                          }else{
                            play.innerHTML = `Play <i class="bi bi-play-fill"></i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                          </svg>`
                            video.pause();
                          }
                      });
        let series = document.getElementById('series'); 
        let movies = document.getElementById('movies'); 

        series.addEventListener('click', ()=>{
           cards. innerHTML = '';
           let series_array = data.filter(ele => {
            return ele.type === "series";
           });
           series_array.forEach((ele, i) => {
            let {name, imdb, date, sposter, bposter, genre, url} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre}, ${date}</p>
                        <h3><span>IMDB</span> <i class="bi bi-star-fill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                        </i> ${imdb}</h3>
                    </div>
                </div> 
            </div>
            `
            cards.appendChild(card);
        });
       
        movies.addEventListener('click', ()=>{
            cards. innerHTML = '';

            let movie_array = data.filter(ele => {
             return ele.type === "movie";
            });

            movie_array.forEach((ele, i) => {
             let {name, imdb, date, sposter, bposter, genre, url} = ele;
             let card = document.createElement('a');
             card.classList.add('card');
             card.href = url;
             card.innerHTML = `
             <img src="${sposter}" alt="${name}" class="poster">
             <div class="rest_card">
                 <img src="${bposter}" alt="">
                 <div class="cont">
                     <h4>${name}</h4>
                     <div class="sub">
                         <p>${genre}, ${date}</p>
                         <h3><span>IMDB</span> <i class="bi bi-star-fill">
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                               </svg>
                         </i> ${imdb}</h3>
                     </div>
                 </div> 
             </div>
             `
             cards.appendChild(card);
         });
        
 
         
 
         }) 
        

        }) 
                   
                      
});