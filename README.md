# Unsplash Img Search with React

Welcome to my image search site, built with React and powered by the Unsplash API! This dynamic platform allows you to effortlessly search for high-quality images and photos from Unsplash’s vast library. The user interface is designed with CSS styling, ensuring a sleek, responsive, and visually appealing experience across devices.

Whether you're looking for inspiration, specific visuals, or simply browsing, my site offers a seamless, fast, and enjoyable way to explore the world of photography.

[![CodeFactor](https://www.codefactor.io/repository/github/codelikeagirl29/unsplash-react/badge)](https://www.codefactor.io/repository/github/codelikeagirl29/unsplash-react)

> see live site [here](https://unsplash-react-nine.vercel.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ce8a306e-f188-4fd4-9c67-b71e2bb919c4/deploy-status)](https://app.netlify.com/sites/unsplash-search-site/deploys)

## Screenshot

![Vite-React](https://github.com/user-attachments/assets/1369a962-7353-4bfc-b091-28f8c13ae329)


## API Reference

The official docs on Unsplash can be found [here](https://unsplash.com/documentation)

In order to use this with my site, I created an ```.env``` file, and then ```VITE_API_KEY=<API KEY HERE>``` and per Vite's requirement, in ```App.jsx``` where needed, the code is ``` import.meta.env.VITE_API_KEY```

#### Search photos

```http
  GET /search/photos
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string`   | Search terms

#### Get item

```http
  GET /photos/:id
```


### Using React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
