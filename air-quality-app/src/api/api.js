const API ={
    
    cityList(){
        const url = 'https://api.openaq.org/v1/cities?country=GB&limit=3000';
        return fetch(url)
                .then(response => response.json())
                .then(result => {
                    return result.results
                })
                .catch(err =>
                    console.log('Fetch Error on load : ', err)
                  )
    },
    citySearch(city){
        const url = 'https://api.openaq.org/v1/latest?city='+city;
        return fetch(url)
                .then(response => response.json())
                .then(result=>{
                    // console.log(result.results[0]);
                    return result.results[0];
                   
                })
                .catch(err =>
                    console.log('Fetch Error on search : ', err)
                  );
    }


   }
   export default API;