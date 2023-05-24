import Wallet from '../img/wallet.png';
import SlimMom from '../img/slim-mom.png';
import Weather from '../img/weather.png';
import Filmoteka from '../img/filmoteka.png';
import Tasks from '../img/tasks.png';
import Youtube from '../img/youtube-clone.png';
import Cocktails from '../img/Cocktails.png';
import FruitGame from '../img/fruit-game2.png';
import Fit from '../img/fit.png';
import Shoe from '../img/Shoe.png';
import Hounter from '../img/Hounter.png';

export const projects = [
  {
    id: 0,
    title: 'Shoe haven',
    description:
      'Shoe haven is a commercial project built using React, Commerce.js and Stripe.js',
    preview_image: Shoe,

    code: 'https://github.com/LinaEno/store',
    site: 'https://store-zeta.vercel.app/',
  },
  {
    id: 10,
    title: 'Hounter',
    description:
      'Hounter is a simple adaptive web application for a real estate agency built using React, styled-components and react-slick. ',
    preview_image: Hounter,

    code: 'https://github.com/LinaEno/Test-task',
    site: 'https://test-task-linaeno.vercel.app/',
  },
  {
    id: 1,
    title: 'Wallet',
    description:
      'Wallet is a React application built with React Redux, Redux toolkit, React Hook Form, Yup for validation, react-i18next, and styled-components. It is an application that allows you to keep track of your income and expenses. You can log your expenses and track your monthly expenses and income with a visual graph. Additionally, it features a currency exchange rate page to keep track of different currency rates.',
    preview_image: Wallet,

    code: 'https://github.com/LinaEno/react-project',
    site: 'https://linaeno.github.io/react-project/',
  },
  {
    id: 2,
    title: 'Slim Mom',
    description:
      'Slim Mom is a web app built using React, Redux, React Hook Form, Yup for validation, and styled-components. It helps users count their daily calorie intake by filling in a form based on their current and desired weight. Then, users can add the food they eat each day to the table, and the app calculates how many calories were consumed and how many more can still be eaten. The app also includes a chart that shows users daily calorie intake, and how it compares to their daily goal.',
    preview_image: SlimMom,

    code: 'https://github.com/LinaEno/slim-mom',
    site: 'https://linaeno.github.io/slim-mom/',
  },
  {
    id: 3,
    title: 'Weather API',
    description:
      'Weather App is a React-based web application that allows users to view detailed weather information for their city. The app uses axios for API requests and includes a background video player. Users can view weather information for up to 5 days in advance and navigate between tabs to access different types of weather data',
    preview_image: Weather,

    code: 'https://github.com/LinaEno/Weather-App',
    site: 'https://linaeno.github.io/Weather-App/',
  },
  {
    id: 4,
    title: 'Youtube Clone',
    description:
      'Youtube clone is a simple web application built using React, @mui/material, axios, react-player, and react-router-dom. It allows users to search for videos and channels on Youtube by title and view the results on the app. The app also allows users to watch videos directly on the app using the React Player component. The interface is simple and intuitive, making it easy for users to navigate and find the content they are looking for on Youtube.',
    preview_image: Youtube,

    code: 'https://github.com/LinaEno/youtube_clone',
    site: 'https://linaeno.github.io/youtube_clone/',
  },
  {
    id: 5,
    title: 'Filmoteka',
    description:
      'The project is called Filmoteka and it was made using vanilla JavaScript. I used GSAP and Axios as well. It is a website with a collection of movies where you can search for popular movies, filter by ratings and genres, or search for movies by title. You can also add movies to your favorites or mark them as watched, which will be saved in local storage.',
    preview_image: Filmoteka,

    code: 'https://github.com/LinaEno/js-project-cyborgs',
    site: 'https://linaeno.github.io/js-project-cyborgs/index.html',
  },
  {
    id: 6,
    title: 'Gym fit',
    description:
      'Gym fit is a React-based project that uses @mui/material, react-horizontal-scrolling-menu, and axios technologies. It features a variety of exercises for different muscle groups that can be searched by name or by selecting a specific body part (such as chest, back, or legs). Each exercise has a preview, and when selected, displays a full description, along with similar exercises for the same muscle groups and links to real videos featuring those exercises on YouTube.',
    preview_image: Fit,

    code: 'https://github.com/LinaEno/gym_fit',
    site: 'https://linaeno.github.io/gym_fit/',
  },
  {
    id: 7,
    title: 'Tasks manager',
    description:
      'Task Manager is a web application built with React, Emotion/Styled, and Redux Toolkit, among other technologies. It features user authentication and registration, with support for user profile pictures. The app allows users to manage their tasks, including the ability to view task history and active tasks. A chart is included to visualize the percentage of completed tasks compared to active ones. The app is also localized with i18next and is integrated with Firebase to store task data. Additionally, the app is responsive and can be used on different devices.',
    preview_image: Tasks,

    code: 'https://github.com/LinaEno/daily-task-manager',
    site: 'https://linaeno.github.io/daily-task-manager/',
  },
  {
    id: 8,
    title: 'Fruit game',
    description:
      'The game is called "Fruits Game" and is built using React. The game board consists of an 8x8 grid with six different types of fruits appearing randomly. The objective of the game is to match three or four fruits of the same type in a row, earning points as the matched fruits disappear and new ones appear on the board.',
    preview_image: FruitGame,

    code: 'https://github.com/LinaEno/fruit-game',
    site: 'https://linaeno.github.io/fruit-game/',
  },
  {
    id: 9,
    title: 'Cocktails',
    description:
      'This project was made using vanilla JavaScript. On this site, you can find your favorite cocktails or ingredients, save them to your favorites, or pick up something new for yourself using a convenient search.',
    preview_image: Cocktails,

    code: 'https://github.com/LinaEno/Cocktails',
    site: 'https://linaeno.github.io/Cocktails/',
  },
];
