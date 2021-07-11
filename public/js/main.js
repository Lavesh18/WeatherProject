const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const datahide  = document.querySelector('.middle_layer');




const getInfo = async(event)=>{
    event.preventDefault();
    let url = `api.openweathermap.org/data/2.5/weather?q=pune&appid=dc61ae7be6527e0a5060770cc084e006`;
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `plz write a city name before search`;
        datahide.classList.add('data_hide');



    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=dc61ae7be6527e0a5060770cc084e006`
        const response  = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = `${arrData[0].main.temp}°C`;
        
        const tempMode =  arrData[0].weather[0].main;

        //weather condition check
        if(tempMode == "Clear")
        {
            temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color: #eccc68;'></i>";
        }
        else if(tempMode == "Clouds"){
            temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color: #ef1f2f6;'></i>";
        }
        else if(tempMode == "Rain"){
            temp_status.innerHTML = "<i class = 'fas fa-rain' style = 'color: #a4b0be;'></i>";
        }
        else{
            temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color: #ef1f2f6;'></i>";
        }
        datahide.classList.remove('data_hide');


        //console.log(data);

        }catch{
            city_name.innerText = `plz enter a valid city name`;
            datahide.classList.add('data_hide');

        }
        
    }


}


submitBtn.addEventListener('click',getInfo);