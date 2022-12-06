<a name="readme-top"></a>

<!--
HOW TO USE:
This is an example of how you may give instructions on setting up your project locally.

Modify this file to match your project and remove sections that don't apply.

REQUIRED SECTIONS:
- Table of Contents
- About the Project
  - Built With
  - Live Demo
- Getting Started
- Authors
- Future Features
- Contributing
- Show your support
- Acknowledgements
- License

After you're finished please remove all the comments and instructions!
-->

<div align="center">

  <img src="https://github.com/microverseinc/readme-template/raw/master/murple_logo.png" alt="logo" width="140"  height="auto" />
  <br/>

  <h3><b>README</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 [Next Portfolio] <a name="about-project"></a>

> This is a portfolio that I use to highlight my most relevant projects using different tech stacks. This project was built using SanityIO, NextJS, and Tailwind CSS. Since the content is managed using a secure backend in SanityIO, when you clone the project you won't be able to replicate the existing content.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://nextjs.org">NextJS</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.sanity.io">Sanity IO</a></li>
  </ul>
</details>

<details>
<summary>CSS Framework</summary>
  <ul>
    <li><a href="https://tailwindcss.com">Tailwind CSS</a></li>
  </ul>
</details>

<details>
<summary>Animations</summary>
  <ul>
    <li><a href="https://www.framer.com/motion/">Framer Motion</a></li>
  </ul>
</details>

<details>
<summary>Language</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org">TypeScript</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Scroll Animations**
- **Sanity Managed Content**
- **Responsive Design**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://dv-next-portfolio.vercel.app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- Git
- NPM
- Vercel CLI (Only if you are deploying in Vercel as well)
- Sanity


### Setup

Clone this repository to your desired folder:

```sh
  git clone https://github.com/indigodavid/next-portfolio.git
  cd next-portfolio/
```


### Install

Install this project with:

```sh
  npm install
```

You also need to setup the folowing environmental variables. In your local copy run:

```sh
  touch .env.local
```

And set the following information according to your needs:

    NEXT_PUBLIC_SANITY_DATASET=production
    NEXT_PUBLIC_SANITY_PROJECT_ID=<your Sanity project ID>
    NEXT_PUBLIC_BASE_URL=<Your deployed project url or http://localhost:3000 for local tests>
    NEXT_PUBLIC_THEME_COLOR=<The web-safe color your want to set in your project, if you want the color I used it is #23c5eb>

### Usage

To run the project, execute the following command:

```sh
  npm run dev
```
<!--
Example command:
### Run tests

To run tests, run the following command:


```sh
  bin/rails test test/models/article_test.rb
```
--->

### Deployment

You can deploy this project using:


```sh
  vercel login
  vercel deploy --prebuilt
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **David Vera**

- GitHub: [![GitHub Badge](https://img.shields.io/badge/-indigodavid-white?logo=GitHub&logoColor=181717&style=plastic)](https://github.com/indigodavid)
- Twitter: [![Twitter Badge](https://img.shields.io/badge/-indigo1987-white?logo=Twitter&logoColor=1DA1F2&style=plastic)](https://twitter.com/indigo1987)
- LinkedIn: [![LinkedIn Badge](https://img.shields.io/badge/-davidveracastillo-white?logo=LinkedIn&logoColor=1DA1F2&style=plastic)](https://linkedin.com/in/davidveracastillo/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Customized animations**
- [ ] **Improved UX elements**
- [ ] **Light Mode and Dark Mode**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> Write a message to encourage readers to support your project

If you like this project DM me at david.verac@hotmail.com.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank [Sonny Sangha](https://github.com/sonnysangha) whose tutorial Youtube inspired this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

- **I cloned you repository but cannot load the information**

  - You need to create a Sanity IO application based on [Sonny Sangha's tutorial](https://www.youtube.com/watch?v=urgi2iz9P6U&t=9316s). Then, you need to include your own information on the environmental variables.

- **Can I change the color of the theme?**

  - Yes, you need to add a web-safe color as the environment variable named NEXT_PUBLIC_THEME_COLOR.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
