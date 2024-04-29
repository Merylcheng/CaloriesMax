# Developing Calories Max

---

### Description

"Personally, I've always struggled to stick to my diet because I have to think about my meals and keep them under a certain calorie intake. Since dieting is a lifestyle, calorie deficit combined with regular exercise is essential.

Introducing CaLories Max, we're here to make your dieting journey a whole lot tastier and easier. Say goodbye to boring meal plans and hello to a world of yummy recipes tailored to your calorie needs."

### User Story

---

<img src="images/Wireframe-caloriesMax.png"/>

Put in the Calories you like and be presented with loads of recipes to choose from!

Follow this link to explore world of delicous food! :https://calories-max.vercel.app

## User Story

---

<img src="images/caloriesMaxHomepg.png"/>

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

### Future Developments

---

Here’s some future ideas that can be integrated:

- User Profiles: Allow users to create profiles where they can save their dietary preferences, allergies, and other relevant information to tailor recipe recommendations even further.
- Nutritional Information: Enhance recipe details to include nutritional information such as calories, macronutrients, and micronutrients, providing users with a comprehensive overview of the meal's health benefits.
- Recipe Rating and Reviews: Implement a rating and review system where users can rate recipes they've tried and leave comments or suggestions for other users. This can help build a community around sharing recipe experiences.
- Integration with Fitness Trackers: Allow users to sync their calorie intake data with popular fitness tracking apps or devices, providing them with a seamless way to monitor their overall health and fitness goals.
- Advanced Search Filters: Expand the search functionality to include filters for dietary restrictions (e.g., vegetarian, vegan, gluten-free), meal types (e.g., breakfast, lunch, dinner, snacks), and cuisine preferences.
- Ingredient Substitutions: Provide suggestions for ingredient substitutions based on dietary restrictions or ingredient availability, ensuring that users can still enjoy recipes even if they're missing certain ingredients.
- Cooking Videos: Incorporate cooking tutorial videos for selected recipes to assist users in preparing meals more effectively and confidently.
- Community Features: Introduce social features such as forums or discussion boards where users can share tips, tricks, and recipe modifications with each other, fostering a sense of community and support among users on their dieting journey.

## Tech Stack Ultilised

---

HTML, CSS, Javascipt (React and inbuilt Fetch API)
Powered by airTable API & Spoonacular API
Clothed by Material UI
