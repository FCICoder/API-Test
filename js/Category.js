let content = document.getElementById("content");
let searching = document.getElementById("searching");
$('.spinning').css("opacity","1");

export async function res(){
$('.spinning').css("opacity","1");
$('.spinning').animate({opacity:"0"});

    getCategories();
 async function getCategories() {

        content.innerHTML = ""
        searching.innerHTML = "";
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        response = await response.json()    
        displayCategories(response.categories)
    }
     
    function displayCategories(arr) {
        let cartoona = "";
    
        for (let i = 0; i < arr.length; i++) {
            cartoona += `
            <div class="col-md-3">
                    <div  class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                        <img class="w-100" src="${arr[i].strCategoryThumb}" alt="..." srcset="">
                        <div class="meal-layer position-absolute text-center text-black p-2">
                            <h3>${arr[i].strCategory}</h3>
                            <p>${arr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                        </div>
                    </div>
            </div>

        `     
            content.innerHTML = cartoona;  
        }  

        for(let i =0; i<arr.length; i++){  
            $( ".meal" ).on( "click", function(e) {                
            if(e.target.innerText === arr[i].strCategory ){
                getCategoryMeals(arr[i].strCategory );
            }    
              } );
        }  
        
        
    }
    async function getCategoryMeals(category) {
        content.innerHTML = "";
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        response = await response.json()
        displayMeals(response.meals.slice(0, 20))
    } 
     

function displayMeals(arr){
    let cartoona = "";
    $('.spinning').css("opacity","1");
    $('.spinning').animate({opacity:"0"});
    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-md-3">
                <div  class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${arr[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `
        content.innerHTML = cartoona;
    }
    for(let i =0; i<arr.length; i++){  
        $( ".meal" ).on( "click", function(e) {
        if(e.target.innerText === arr[i].strMeal ){
            // console.log(arr[i]);
            getMealInstructions(arr[i].idMeal );
        }    
          } );
    }
}

    
async function getMealInstructions(mealID) {
    content.innerHTML = "";
    searching.innerHTML = "";
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    respone = await respone.json();
console.log(respone);
    displayMealInstructions(respone.meals[0]);
}


function displayMealInstructions(meal) {
    searching.innerHTML = "";
    let ingredients = ``;
    $('.spinning').css("opacity","1");
    $('.spinning').animate({opacity:"0"});
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }

    let tags = meal.strTags?.split(",")
    if (!tags) tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }

    let cartoona = `
    <div class="col-md-4">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                    alt="">
                    <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${ingredients}
                </ul>

                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>

                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>`

    content.innerHTML = cartoona;
}

}