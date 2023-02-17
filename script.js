rest_url = 'https://restcountries.com/v3.1/all'
weather_url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=f64d650a5e40e3b57e89bfc70b18ce4e'
API_key = 'f64d650a5e40e3b57e89bfc70b18ce4e'


async function rest_api() {
    let a = fetch('https://restcountries.com/v3.1/all');
    let out1 = await a;
    let prom = out1.json();
    let out11 = await prom;
    console.log(out11)

    let parent_main = document.querySelector('body');

    let parent = document.createElement('div');
    parent.classList.add("container");

    let heading = document.createElement('h1');
    heading.setAttribute('id', 'title');
    heading.classList.add("text-center");
    heading.innerText = "WEATHER REPORT";
    parent.append(heading);


    for (let i = 1; i < out11.length; i += 3) {
        try {


            let child = document.createElement('div');
            child.classList.add("row");

            

            let lat1 = out11[i].latlng[0];
            let lon1 = out11[i].latlng[1];

            let col1 = document.createElement('div');
            col1.classList.add("col-sm-6", "col-md-4", "col-lg-4", "col-xl-4");

            let card = document.createElement('div');
            card.classList.add("card", "h-100");

            let card_body = document.createElement('div');
            card_body.classList.add("card-body");
            card_body.setAttribute('lat', lat1);
            card_body.setAttribute('lon', lon1);

            let country_name = document.createElement('div');
            country_name.classList.add("card-header");
            country_name.innerText = out11[i].name.common;
            card_body.append(country_name);

            let flag = document.createElement('img');
            flag.setAttribute('src', out11[i].flags.png);
            flag.classList.add("card-img-top");

            let region = document.createElement('div');
            region.classList.add("card-text");
            region.innerText = `Region: ${out11[i].region}`


            let population = document.createElement('div');
            population.classList.add("card-text");
            population.innerText = `Population: ${out11[i].population}`


            let capital = document.createElement('div');
            capital.classList.add("card-text");
            capital.innerText = `Capital: ${out11[i].capital[0]}`

            let button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.classList.add("btn", "btn-secondary");
            button.setAttribute('onclick', 'weatherapi(this)');
            button.setAttribute('data-bs-toggle', 'modal');
            button.setAttribute('data-bs-target', '#staticBackdrop');
            button.innerText = 'Click for Weather';


            card_body.append(flag)
            card_body.append(region);
            card_body.append(population);
            card_body.append(capital);
            card_body.append(button);
            card.append(card_body);
            col1.append(card);
            child.append(col1);

            let space1 = document.createElement('br');


            let lat2 = out11[i + 1].latlng[0];
            let lon2 = out11[i + 1].latlng[1];

            let col2 = document.createElement('div');
            col2.classList.add("col-sm-6", "col-md-4", "col-lg-4", "col-xl-4");

            let card2 = document.createElement('div');
            card2.classList.add("card", "h-100");

            let card_body2 = document.createElement('div');
            card_body2.classList.add("card-body");
            card_body2.setAttribute('lat', lat2);
            card_body2.setAttribute('lon', lon2);

            let country_name2 = document.createElement('div');
            country_name2.classList.add("card-header");
            country_name2.innerText = out11[i + 1].name.common;
            card_body2.append(country_name2);

            let flag2 = document.createElement('img');
            flag2.setAttribute('src', out11[i + 1].flags.png);
            flag2.classList.add("card-img-top");

            let region2 = document.createElement('div');
            region2.classList.add("card-text");
            region2.innerText = `Region: ${out11[i + 1].region}`

            let population2 = document.createElement('div');
            population2.classList.add("card-text");
            population2.innerText = `Population: ${out11[i + 1].population}`

            let capital2 = document.createElement('div');
            capital2.classList.add("card-text");
            capital2.innerText = `Capital: ${out11[i + 1].capital[0]}`

            let button2 = document.createElement('button');
            button2.setAttribute('type', 'button');
            button2.classList.add("btn", "btn-secondary");
            button.setAttribute('onclick', 'weatherapi(this)');
            button2.setAttribute('data-bs-toggle', 'modal');
            button2.setAttribute('data-bs-target', '#staticBackdrop');
            button2.innerText = 'Click for Weather';


            card_body2.append(flag2);
            card_body2.append(region2);
            card_body2.append(population2);
            card_body2.append(capital2);
            card_body2.append(button2);
            card2.append(card_body2);
            col2.append(card2);
            child.append(col2)

            let space2 = document.createElement('br');



            let lat3 = out11[i + 2].latlng[0];
            let lon3 = out11[i + 2].latlng[1];

            let col3 = document.createElement('div');
            col3.classList.add("col-sm-6", "col-md-4", "col-lg-4", "col-xl-4");

            let card3 = document.createElement('div');
            card3.classList.add("card", "h-100");

            let card_body3 = document.createElement('div');
            card_body3.classList.add("card-body");
            card_body3.setAttribute('lat', lat3);
            card_body3.setAttribute('lon', lon3);

            let country_name3 = document.createElement('div');
            country_name3.classList.add("card-header");
            country_name3.innerText = out11[i + 2].name.common;
            card_body3.append(country_name3);

            let flag3 = document.createElement('img');
            flag3.setAttribute('src', out11[i + 2].flags.png);
            flag3.classList.add("card-img-top");

            let region3 = document.createElement('div');
            region3.classList.add("card-text");
            region3.innerText = `Region: ${out11[i + 2].region}`

            let population3 = document.createElement('div');
            population3.classList.add("card-text");
            population3.innerText = `Population: ${out11[i + 2].population}`

            let capital3 = document.createElement('div');
            capital3.classList.add("card-text");
            capital3.innerText = `Capital: ${out11[i + 2].capital[0]}`

            let button3 = document.createElement('button');
            button3.setAttribute('type', 'button');
            button3.classList.add("btn", "btn-secondary");
            button3.setAttribute('onclick', 'weatherapi(this)');
            button3.setAttribute('data-bs-toggle', 'modal');
            button3.setAttribute('data-bs-target', '#staticBackdrop');
            button3.innerText = 'Click for Weather';



            card_body3.append(flag3);
            card_body3.append(region3);
            card_body3.append(population3);
            card_body3.append(capital3);
            card_body3.append(button3);
            card3.append(card_body3);
            col3.append(card3);
            child.append(col3)

            let space3 = document.createElement('br');

          
            parent.append(child);
            parent_main.append(parent)

        }
        catch {

        }
    }

    let popUp = document.createElement('div');
    popUp.classList.add("modal", "fade");
    popUp.setAttribute('id', 'staticBackdrop');
    popUp.setAttribute('data-bs-backdrop', 'static');
    popUp.setAttribute('data-bs-keyboard', 'false')
    popUp.setAttribute('tabindex', '-1');
    popUp.setAttribute('aria-labelledby', 'staticBackdropLabel');
    popUp.setAttribute('aria-hidden', 'true')

    let dialog = document.createElement('div');
    dialog.classList.add("modal-dialog");

    let content = document.createElement('div');
    content.classList.add("modal-content");

    let head = document.createElement('div');
    head.classList.add("modal-header");

    let title = document.createElement('h1');
    title.classList.add("modal-title", "fs-5");
    title.setAttribute('id', 'staticBackdropLabel')
    title.innerText = 'WEATHER REPORT';

    let btn = document.createElement('button');
    btn.classList.add('btn-close');
    btn.setAttribute('type', 'button');
    btn.setAttribute('data-bs-dismiss', 'modal');
    btn.setAttribute('aria-label', 'close');

    let body = document.createElement('div');
    body.classList.add("modal-body");


    let foot = document.createElement('div');
    foot.classList.add("modal-footer");

    let btn1 = document.createElement('button');
    btn1.classList.add('btn', 'btn-dark');
    btn1.setAttribute('type', 'button');
    btn1.setAttribute('data-bs-dismiss', 'modal');
    btn1.innerText = 'Close';

    head.append(title);
    head.append(btn);
    foot.append(btn1);
    content.append(head);
    content.append(body);
    content.append(foot);
    dialog.append(content);
    popUp.append(dialog);
    parent_main.append(popUp);


}



rest_api()


async function weatherapi(e) {
    console.log(e);
    console.log(e.parentElement)

    let view = document.querySelector('#staticBackdrop .modal-body')

    let parent = e.parentElement;

    let lat = parent.getAttribute('lat')
    let lon = parent.getAttribute('lon')
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f64d650a5e40e3b57e89bfc70b18ce4e`;
    let b = fetch(url);
    let out2 = await b;
    let prom2 = out2.json();
    let out22 = await prom2;
    view.innerText = `Weather: ${out22.weather[0].description}
     Max Temperature: ${out22.main.temp_max} 
     Min Temperature: ${out22.main.temp_min}
     Humidity: ${out22.main.humidity}
     Sunrise: ${out22.sys.sunrise}
     Sunset: ${out22.sys.sunset}`;

}


