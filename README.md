# Developing Calories Max

---

### Description

"Personally, I've always struggled to stick to my diet because I have to think about my meals and keep them under a certain calorie intake. Since dieting is a lifestyle, calorie deficit combined with regular exercise is essential.

Introducing CaLories Max, we're here to make your dieting journey a whole lot tastier and easier. Say goodbye to boring meal plans and hello to a world of yummy recipes tailored to your calorie needs."

### User Story

---

<img src="images/Wireframe-caloriesMax.jpg"/>
# Diet Planner from scracth!

Put in the Calories you like and be presented with loads of recipes to choose from!

Follow this link to explore world of delicous food! :https://calories-max.vercel.app

## User Story

---

<img src="images/caloriesMaxHomepg.jpg"/>

1. Home Page
   Get started on your food adventure with a friendly home page. We'll greet you warmly and help you find your way around with a simple menu. Ready to explore? Just hit the "Let's Get Started" button!

2. Recipe Page
   User can input a desired calorie amount in the search bar. Click the 'Get Meal' button and user will be presented with several recipes that are according to the calorie amount entered by the user. Recipes are pulled from the Spoonacular API with the parameters of the given calorie amount.

3. Recipe Details
   When the user selects a recipe, they will be directed to the Recipe Details page. the user will be able to find information of the recipe which included Name, Image, Ingredients and Cooking Instructions. At the bottom will be the 'Add to Favourite Button" These infromation again is taken from Spoonacular API with the pre-selected parameters displayed.

4. Favourite Button
   When the user fancies the recipe, they may click the 'Add to Favourite' button and a message saying " Recipe Saved to Favourites!' will appear. The 'liked' recipes are added to the Airtable where it will update the Favourite List. The user may explore their personal favourite list from the navigation bar.

5. Favourite List
   In the Favourite List, user will find their personal list of recipes which they have 'liked' by clicking the 'Add to Favourite' button. There is a drop down option named 'EXPAND INSTRUCTIONS' and the instructions will show when clicked on. Next to it will be the 'Delete Recipe' which will remove the selected recipe from the Favourite List.

6. Daily Specials
   Daily Specials was created to allow users to have a randomized recipe be presented to them. User then will be able to select recipes they like and add them to their Favourite List for future reference.

7. Meal Planner
   Meal Planner is created in a Schedule format, where users may log their dietary consumption wih the flexbility to choose Date/Day, Meal (Breakfast, lunch, dinner), Name of Dish, and Details (e.g Calorie intake etc.)

Another function of the Meal Planner is to enable users to include custom diet recipes for their future reference as well!

## Tech Stack Ultilised

---

HTML, CSS, Javascipt (React and inbuilt Fetch API)
Powered by airTable API & Spoonacular API
Clothed by Material UI
