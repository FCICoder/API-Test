// let content = document.getElementById("content");

//  async function getCategoryMeals(category) {
//     content.innerHTML = ""
//     $(".inner-loading-screen").fadeIn(300)

//     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
//     response = await response.json()


//     displayMeals(response.meals.slice(0, 20))
//     $(".inner-loading-screen").fadeOut(300)

// }

// export function displayMeals(arr) {
//     let cartoona = "";

//     for (let i = 0; i < arr.length; i++) {
//         cartoona += `
//         <div class="col-md-3">
//                 <div onclick="getMealDetails('${arr[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
//                     <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
//                     <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
//                         <h3>${arr[i].strMeal}</h3>
//                     </div>
//                 </div>
//         </div>
//         `
//     }

//     content.innerHTML = cartoona
// }