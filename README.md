# Javascript Projects

This repository contains a collection of projects that I have worked on while learning React, primarily from following tutorials.

Projects are presented in alphabetical order and include

-   Landing Pages
-   Games
-   React Courses
-   Miscellaneous Projects

## Removing Boilerplate Code

`npm uninstall @testing-library/jest-dom @testing-library/react @testing-library/user-event web-vitals`

## Summary of React Hooks (including Custom Hooks)

### useState

useState is a hook that allows you to add state to functional components.

```javascript
const [count, setCount] = useState(0);
```

If you want to update the state, you can use the setCount function.

```javascript
setCount(count + 1);
```

If you want to update the state based on the previous state, you can use the function form of setCount.

```javascript
setCount(prevCount => prevCount + 1);
```

If you have an expensive calculation for your initial state, you can pass a function to useState that will only be called on the initial render.

```javascript
const [count, setCount] = useState(() => {
	console.log('initializing count');
	return 0;
});
```

## Projects

### Chakra UI Tutorial

Made with React and Chakra UI.

![Chakra UI](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/1.png)

### Form Validation

Form Validation using React Hooks.

![Form Validation](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/2.png)

### Full React Course P2

Blog App using React.

![Blog App](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/3.png)

### Landing Page with Custom Sections

Landing Page with custom sections using React and Styled Components.

![Landing Page](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/4.png)
![Pricing](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/5.png)

### Landing Page NFT Collection

Landing Page for NFTs using React and Smooth Scroll.

![NFT Landing Page](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/6.png)
![Swiping Cards](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/7.png)
![Carousel](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/8.png)

### Landing Page Restaurant

Restaurant Landing Page using React and Styled Components.

![Restaurant](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/9.png)

### Landing Page with Custom Sections v2

Landing Page with custom sections using React and Styled Components.

![Landing Page](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/10.png)
![Pricing](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/11.png)
![Footer](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/12.png)

### Landing Page with Custom Sections v3

Bank Single-Page Landing Page using React and Smooth Scroll.

![Bank Landing Page](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/13.png)

### Landing Page with Cards

Exotic Destination Landing Page

![Cards](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/14.png)

### React Accordion Dropdown

Accordion made with React.

![Accordion](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/15.png)

### React Image Slider Carousel

Image Carousel made with React.

![Carousel](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/16.png)

### React Sidebar v2

Sidebar made with React.

![Sidebar](https://raw.githubusercontent.com/AlkarimJ1997/ReactProjects/assets/images/17.png)
