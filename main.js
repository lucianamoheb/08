var mealsRow =document.getElementById('mealsRow')
var image= document.getElementById('pics')
var rateNum =document.getElementById('rate-num')
var rateReview =document.getElementById('rate-review')
var level =document.getElementById('level')
var cusinie =document.getElementById('cusinie')
var title =document.getElementById('title')
var subtitle =document.getElementById('subtitle')
var note =document.getElementById('note')
var ingStep =document.getElementById('ingstep')
var instStep =document.getElementById('inststep')
var caloriesNum =document.getElementById('calories-num')
var carboNum =document.getElementById('carbo-num')
var fiberNum =document.getElementById('fiber-num')
var proteinNum =document.getElementById('protein-num')
var fatNum =document.getElementById('fat-num')
var sodiumNum =document.getElementById('sodium-num')
var tipsStep =document.getElementById('tipsstep')

const mealsData =[
{
image:'images/photo-1546069901-ba9599a7e63c.jpeg',
ratingNum:'4.5',
rateReview: '(156 reviews)',
level:'easy',
cusinie:'Mediterranean',
title:'Mediterranean Quinoa Bowl',
subtitle:'Healthy bowl with quinoa, vegetables, and tahini dressing',
note:'This recipe requires more than 45 minutes to prepare. Plan accordingly!',

ingStep:[
'1 cup quinoa',
'Cherry tomatoes, halved',
'Cucumber, diced',
'Red onion, sliced',
'Kalamata olives',
'Feta cheese, crumbled',
'Fresh parsley',
'Tahini dressing'
],

instStep: [
'Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.',
'While quinoa cooks, prepare all vegetables and set aside.',
'For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.',
'Fluff cooked quinoa with a fork and let cool slightly.',
'Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.',
'Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.'
],

caloriesNum:'480 kcal',
carboNum:'58g',
fiberNum:'10g',
proteinNum:'18g',
fatNum:'20g',
sodiumNum:'540mg',
tipsStep:[
'Rinse quinoa well to remove bitter coating',
'Let quinoa cool before adding fresh ingredients',
'Make extra tahini dressing - it keeps well in the fridge',
'Add grilled chicken or chickpeas for extra protein'
],
},

{
image:'images/photo-1633504581786-316c8002b1b9.jpeg',
ratingNum:'4.8',
rateReview: '(356 reviews)',
level:'easy',
cusinie:'Seafood',
title:'Shrimp Scampi',
subtitle:'Garlicky shrimp in white wine butter sauce',
note:'This recipe requires more than 45 minutes to prepare. Plan accordingly!',
ingStep:[
'400g large shrimp, peeled',
'300g linguine pasta',
'6 cloves garlic, minced',
'1/2 cup white wine',
'4 tablespoons butter',
'2 tablespoons olive oil',
'Fresh parsley, chopped',
'Lemon juice and zest',
'Red pepper flakes'
],

instStep: [
'Cook linguine according to package directions. Reserve 1 cup pasta water.',
'Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.',
'Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.',
'Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.',
'Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.',
'Garnish with parsley, lemon zest, and serve immediately.'
],

caloriesNum:'520 kcal',
carboNum:'54g',
fiberNum:'3g',
proteinNum:'36g',
fatNum:'18g',
sodiumNum:'620mg',
tipsStep:[
"Don't overcook shrimp - they cook very quickly",
"Use good quality white wine for best flavor",
"Toss pasta in sauce for maximum flavor absorption",
"Add extra lemon for bright, fresh taste"
],
},


{
image:'images/photo-1529692236671-f1f6cf9683ba.jpeg',
ratingNum:'4.7',
rateReview: '(412 reviews)',
level:'easy',
cusinie:'American',
title:'BBQ Pulled Pork',
subtitle:'Slow-cooked tender pork in smoky barbecue sauce',
note:'This recipe requires more than 45 minutes to prepare. Plan accordingly!',
ingStep:[
'1kg pork shoulder',
'1 cup BBQ sauce',
'1/2 cup apple cider vinegar',
'2 tablespoons brown sugar',
'1 tablespoon paprika',
'1 tablespoon garlic powder',
'Burger buns',
'Coleslaw for serving'
],

instStep: [
'Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.',
'Place pork in slow cooker with apple cider vinegar and 1/2 cup water.',
'Cook on low for 8 hours or high for 4 hours until meat is very tender.',
'Remove pork and shred with two forks. Discard excess fat.',
'Return shredded pork to slow cooker, mix with BBQ sauce.'
],

caloriesNum:'620 kcal',
carboNum:'52g',
fiberNum:'3g',
proteinNum:'48g',
fatNum:'22g',
sodiumNum:'1180mg',
tipsStep:[
"Use pork shoulder for best results - it stays moist",
"Let pork rest before shredding for juicier meat",
"Make your own BBQ sauce for better flavor",
"Leftovers freeze well for up to 3 months"
],
},

{
image:'images/photo-1568901346375-23c9450c58cd.jpeg',
ratingNum:'4.6',
rateReview: '(421 reviews)',
level:'easy',
cusinie:'American',
title:'Classic Beef Burger',
subtitle:'Juicy homemade burger with all the fixings',
note:'This recipe requires more than 45 minutes to prepare. Plan accordingly!',
ingStep:[
'500g ground beef (80/20)',
'4 burger buns',
'4 slices cheddar cheese',
'Lettuce leaves',
'Tomato slices',
'Red onion, sliced',
'Pickles',
'Burger sauce or condiments'
],

instStep: [
'Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.',
'Season patties generously with salt and pepper on both sides.',
'Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.',
'Add cheese slices in the last minute of cooking and cover to melt.',
'Toast burger buns lightly on the grill or in a pan.',
'Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.'
],

caloriesNum:'650 kcal',
carboNum:'42g',
fiberNum:'2g',
proteinNum:'38g',
fatNum:'35g',
sodiumNum:'920mg',
tipsStep:[
"Don't press down on burgers while cooking - keeps them juicy",
"Make indent in center to prevent burger from puffing up",
"Let patties rest for 2-3 minutes before serving",
"Toast buns for better texture and flavor"
],
},

{
 image:'images/photo-1547592166-23ac45744acd.jpeg',
ratingNum:'4.7',
rateReview: '(267 reviews)',
level:'Intermediate',
cusinie:'Mediterranean',
title:'French Onion Soup',
subtitle:'Rich beef broth with caramelized onions and melted cheese',
note:'This recipe requires more than 45 minutes to prepare. Plan accordingly!',
ingStep:[
'4 large onions, thinly sliced',
'4 tablespoons butter',
'1 liter beef broth',
'1/2 cup white wine',
'Fresh thyme',
'Baguette slices',
'200g Gruyère cheese, grated'
],

instStep: [
'Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.',
'Add white wine and deglaze the pot, scraping up brown bits.',
'Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.',
'Meanwhile, toast baguette slices until golden.',
'Ladle soup into oven-safe bowls. Top with toasted bread and cheese.',
'Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.'
],

caloriesNum:'380 kcal',
carboNum:'36g',
fiberNum:'4g',
proteinNum:'18g',
fatNum:'18g',
sodiumNum:'980mg',
tipsStep:[
"Patience is key - don't rush the onion caramelization",
"Use good quality beef broth for best flavor",
"Gruyère can be substituted with Swiss cheese",
"Watch carefully when broiling to avoid burning"
],   
}

]


function ingredients(ingredientsarray){
    var list='';
    for(var item=0; item< ingredientsarray.length;item++){
        list+=`
        <div class="layout d-flex justify-content-start align-items-center gap-3 pt-2 ps-4">

  <div class="num rounded-circle  text-white d-flex justify-content-center align-items-center " >${item+1}</div>
  <div class="text " >${ingredientsarray[item]}</div>
</div>
        `;
    }
    return list;
}


function instructions(instructionsarray){
    var list ='';
    for(var item=0;item<instructionsarray.length;item++){
        list+=`
        <div class="layout d-flex flex-nowrap justify-content-start align-items-center gap-3 pt-4 ps-4">
  <div class="num rounded-3 p-3 text-white d-flex justify-content-center align-items-center">${item+1}</div>
  <div class="text" >${instructionsarray[item]}</div>
</div>
        `;
    }
    return list;
}


function tips(tipsarray){
    var list='';
    for(var item =0;item<tipsarray.length;item++){
        list+=`
        <div class="tips-card p-2 my-3 d-flex justify-content-start gap-2 rounded-3">
<i class="fa-solid fa-circle-check align-content-center"></i>
<p >${tipsarray[item]}</p>
</div>
        `
    };
    return list;
}


function display(){

    var randomIndex = Math.floor(Math.random()*mealsData.length)
    var currentMeal = mealsData[randomIndex];
    var box='';

        box=`<div class="col-lg-5 position-relative" >
                <img src="${currentMeal.image}" alt="" class=" rounded-start-4 " id="pics">

                <div class="rate px-3 py-2 bg-white rounded-5 position-absolute">
                  <i class="fa-solid fa-star text-warning"></i>
                  <span class="num" id="rate-num">${currentMeal.rateNum}</span>
                  <span class="reviews" id="rate-review">${currentMeal.rateReview}</span>
                </div>

                <div class="details bg-white p-3 rounded-4 d-flex justify-content-around align-items-center position-absolute translate-middle-x start-50">
                  <div class="prep-time">
                    <i class="fa-solid fa-clock ms-3"></i>
                    <p class="text-1 m-0 p-0">Prep Time</p>
                    <p class="text-center">20 min</p>
                  </div>
                  <div class="cook-time">
                   <i class="fa-solid fa-fire-burner ms-3"></i>
                    <p class="text-1 m-0 p-0 ">Cook Time</p>
                    <p class="text-center">35 min</p> 
                  </div>
                  <div class="servings">
                  <i class="fa-solid fa-users ms-3"></i>
                  <p class="text-1 m-0 p-0">Servings</p>
                  <p class="text-center">2 people</p>
                  </div>
                </div>
            </div>

            <div class="col-lg-7  pt-5 ps-5 overflow-y-scroll  bg-white">

              <div class="level-cuisine d-flex justify-content-start align-items-start gap-2">
                <div class="level" id="level"><span>${currentMeal.level}</span></div>
                <div class="cusinie" id="cusinie"><span>${currentMeal.cusinie}</span></div>
              </div>

              <div class="head-icons d-flex justify-content-between align-items-start">
                <div class="head">
              <h1 class="mt-3" id="title">${currentMeal.title}</h1>
              <p id="subtitle">${currentMeal.subtitle}</p>
            </div>

            <div class="icons d-flex justify-content-start align-items-center gap-3 pe-5">
              <div class="icon-1"><i class="fa-solid fa-bookmark"></i></div>
              <div class="icon-2"><i class="fa-solid fa-share-nodes"></i></div>
            </div>
            </div>

            <div class="note d-flex justify-content-start align-items-center gap-2 rounded-2 px-2 py-3 me-5">
              <div class="icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
              <div class="text">
                <p>Extended Preparation Time</p>
                <span id="note">${currentMeal.note}</span>
              </div>
            </div>

            

<!-- Nav tabs -->
<ul class="nav nav-tabs d-flex justify-content-around align-items-start me-5 mt-4" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="Ingredients-tab" data-bs-toggle="tab" data-bs-target="#Ingredients-tab-pane" type="button" role="tab" aria-controls="Ingredients-tab-pane" aria-selected="true">
      <i class="fa-solid fa-book-open"></i>
      Ingredients</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="Instructions-tab" data-bs-toggle="tab" data-bs-target="#Instructions-tab-pane" type="button" role="tab" aria-controls="Instructions-tab-pane" aria-selected="false">
      <i class="fa-solid fa-book-open"></i>
      Instructions
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="Nutrition-tab" data-bs-toggle="tab" data-bs-target="#Nutrition-tab-pane" type="button" role="tab" aria-controls="Nutrition-tab-pane" aria-selected="false">
<i class="fa-solid fa-chart-pie"></i>
      Nutrition
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="Tips-tab" data-bs-toggle="tab" data-bs-target="#Tips-tab-pane" type="button" role="tab" aria-controls="Tips-tab-pane" aria-selected="false">
      <i class="fa-solid fa-lightbulb"></i>
      Chef's Tips
    </button>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content  mt-4  me-5 " id="myTabContent">

  <!---------------- tab pane 1----------------- -->
  <div class="tab-pane tab1 px-2 py-2 rounded-4 fade show active f" id="Ingredients-tab-pane" role="tabpanel" aria-labelledby="Ingredients-tab" tabindex="0">


<div class="steps-ing  ">

  ${ingredients(currentMeal.ingStep)}



</div>
 
</div>
  <!-- ------------tab pane 2-------------------- -->
  <div class="tab-pane fade " id="Instructions-tab-pane" role="tabpanel" aria-labelledby="Instructions-tab" tabindex="0">

<div class="steps-ins overflow-y-scroll ">
 
${instructions(currentMeal.instStep)}



</div>
  </div>
  <!-- ----------------tab pane 3-------------------- -->
  <div class="tab-pane fade" id="Nutrition-tab-pane" role="tabpanel" aria-labelledby="Nutrition-tab" tabindex="0">
    

<div class="container">
<div class="row g-3">

  <div class="col-md-6">

    <!-- card1 -->
   
<div class="card1 cards px-3 rounded-3 sizes d-flex justify-content-between align-items-center">
  <div class="icon px-3 py-2 d-flex justify-content-start align-items-center gap-3 ">
    <i class="fa-solid fa-fire d-flex justify-content-center align-items-center rounded-3"></i>
  <span class="type">Calories</span>
  </div>

  <div class="num"> 
    <span id="calories-num" >${currentMeal.caloriesNum}</span>
  </div>
</div>

<!-- card2 -->

<div class="card2 cards px-3 rounded-3 sizes d-flex justify-content-between align-items-center">
  <div class="icon px-3 py-2 d-flex justify-content-start align-items-center gap-3 ">
    <i class="fa-solid fa-wheat-awn d-flex justify-content-center align-items-center rounded-3"></i>
  <span class="type">Carbohydrates</span>
  </div>

  <div class="num"> 
    <span id="carbo-num" >${currentMeal.carboNum}</span>
  </div>

</div>

<!-- card3  -->

<div class="card3 cards px-3 rounded-3 sizes d-flex justify-content-between align-items-center">
  <div class="icon px-3 py-2 d-flex justify-content-start align-items-center gap-3 ">
    <i class="fa-brands fa-pagelines d-flex justify-content-center align-items-center rounded-3"></i>
  <span class="type">Fiber</span>
  </div>

  <div class="num"> 
    <span id="fiber-num" >${currentMeal.fiberNum}</span>
  </div>

</div>


<!-- ------ -->
  </div>
<!-- -------------------------- -->
<div class="col-md-6">

    <!-- card1 -->
<div class="card1 cards px-3 rounded-3 sizes d-flex justify-content-between align-items-center">
  <div class="icon px-3 py-2 d-flex justify-content-start align-items-center gap-3 ">
    <i class="fa-solid fa-dumbbell d-flex justify-content-center align-items-center rounded-3"></i>
  <span class="type">Protein</span>
  </div>

  <div class="num"> 
    <span id="protein-num" >${currentMeal.proteinNum}</span>
  </div>

</div>
<!-- card2 -->

<div class="card2 cards px-3 rounded-3 sizes d-flex justify-content-between align-items-center">
  <div class="icon px-3 py-2 d-flex justify-content-start align-items-center gap-3 ">
    <i class="fa-solid fa-droplet d-flex justify-content-center align-items-center rounded-3"></i>
  <span class="type">Fat</span>
  </div>

  <div class="num"> 
    <span id="fat-num" >${currentMeal.fatNum}</span>
  </div>

</div>
<!-- card3  -->

<div class="card3 cards px-3 rounded-3 sizes d-flex justify-content-between align-items-center">
  <div class="icon px-3 py-2 d-flex justify-content-start align-items-center gap-3 ">
    <i class="fa-solid fa-cube d-flex justify-content-center align-items-center rounded-3"></i>
  <span class="type">Sodium</span>
  </div>

  <div class="num"> 
    <span id="sodium-num">${currentMeal.sodiumNum}</span>
  </div>

</div>
<!-- ---------- -->
  </div>

  <!-- ----------- -->
  </div>



 </div>


      </div>

    


  <!-- ---------------tab pane 4-------------------- -->
  <div class="tab-pane fade " id="Tips-tab-pane" role="tabpanel" aria-labelledby="Tips-tab" tabindex="0">

${tips(currentMeal.tipsStep)}


  </div>
  <!-- --------------- -->
</div>

<!-- ------------------------------------------ -->

<button type="button" class="px-3 py-2 rounded-3 text-white btn-rec" id="randomBtn">
  <i class="fa-solid fa-arrows-rotate text-white" ></i>
  Try Another Recipe</button>

             </div>`;
    

   mealsRow.innerHTML=box; 
   document.getElementById('randomBtn').addEventListener('click',display);
}
display()
