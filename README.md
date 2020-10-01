# OrbitApp
Weather app I built to learn React Native

## Setup

#### Assumptions
1. You have node installed
2. You have xcode/Android Studio setup with simulators ready to use

### Quickstart
1. Clone this repo
2. `yarn`
3. `yarn ios/android`

## Features
### Location
Location services will use your current location. The initial API request will retrieve you current city and display the weather data for you.


### Search
You can also search for a location on the search screen.
As you type, you will be shown suggested results.

After selecting a result, you'll be taken to the weather page with the chosen location.
Going back to the search screen will show your recent searches in a pills.


### Timezones
All times will be shown in the relevant timezones for that location


### Themes
If it is night time in the location, the theme will switch to the night theme.
On the hourly weather blocks, anything before sunset will be light themed and anything after sunset will be night themed.


### Interactive UI
Horizontal scrolling for the hourly weather.
Bottom sheet for the next 7 days worth of weather.

---------

### APIs used
[Meta Weather](https://www.metaweather.com) for search
[Open weather](https://openweathermap.org/api) for weather data


## Screenshots
### Main screen
<img width="563" alt="Screen Shot 2020-10-01 at 3 18 56 PM" src="https://user-images.githubusercontent.com/32842898/94828776-b9959b00-0401-11eb-8239-31dc2a64fbb5.png">

### Bottom sheet
<img width="563" alt="Screen Shot 2020-10-01 at 3 18 59 PM" src="https://user-images.githubusercontent.com/32842898/94828796-be5a4f00-0401-11eb-9784-575457981c9d.png">

### Night theme
<img width="563" alt="Screen Shot 2020-10-01 at 3 19 21 PM" src="https://user-images.githubusercontent.com/32842898/94828801-c0241280-0401-11eb-8b16-6c0332e57a3a.png">

### Recent searches
<img width="563" alt="Screen Shot 2020-10-01 at 4 20 08 PM" src="https://user-images.githubusercontent.com/32842898/94829000-fbbedc80-0401-11eb-9959-76371574f68d.png">

### Search results
<img width="563" alt="Screen Shot 2020-10-01 at 4 20 29 PM" src="https://user-images.githubusercontent.com/32842898/94829039-07120800-0402-11eb-9376-e519cd3769f7.png">
