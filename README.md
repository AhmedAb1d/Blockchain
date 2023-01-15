
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AhmedAb1d/Blockchain">
    <img src="https://raw.githubusercontent.com/AhmedAb1d/Blockchain/master/frontend/public/favicon.ico" alt="Logo" width="175" height="175">
  </a>

  <h3 align="center">Blockchain Simulation</h3>

  <p align="center">
    A simplified blockchain simulator app 
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#built-with">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
         <li><a href="#how-it-works">How-it-works</a></li>
      </ul>
    </li>
  </ol>
</details>



### Built With

This application is built using:

* [![React][React.js]][React-url]
* [![Python][Python.py]][Python-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

These are the prerequisites needed to run this project properly 

### Prerequisites

This is the list of tools you'll need on your device in order to run this project.
* [Python](https://www.python.org/downloads/)
* [Node Js](https://nodejs.org/en/)

### Installation

To install the project you need to follow the steps below:

1. Clone the repo
   ```sh
   git clone https://github.com/AhmedAb1d/Blockchain.git
   ```
2. Install NPM packages in the frontend folder
   ```sh
   cd frontend && npm install
   ```
3. Install Python packages in the backend folder
   ```sh
   cd backend && python pip install -r requirements.txt
   ```
4. Run the app
* Using <b>Flask</b> server and the static React  <b>build</b> folder 
   ```sh
   cd backend && py Server.py
   ```
   Run the following command in the frontend folder to generate a new static build 
    ```sh
   npm run build
   ```
* Using both <b>Node Js</b> and <b>Flask</b> servers
	```sh
   cd frontend && npm run dev
   ```

### How-it-works
* The app is simple, you just need to press the “ADD TRANSACTION” Button 2 times to mine a new block and add it to the blockchain.
The reload button in the top-right corner, is used to reset all the blocks and start over.
<div align="center">
  <a href="http://blockchain.battat.lol/">
    <img src="https://i.imgur.com/5AN1ZFT.png" alt="Logo">
  </a>
</div>

* You can also click on a block to learn more about it ( we used the word “newTransaction” for every transaction we add )
<div align="center">
  <a href="http://blockchain.battat.lol/">
    <img src="https://i.imgur.com/9bLFvHR.png" alt="Logo">
  </a>
</div>
		
 * <b>Block</b> contents : 
 	```sh
 	- Index [ To indicate the block order in the blockchain ]
    - A Hash [ Represents the current block Hash ]
    - Previous hash [ The previous block Hash ]
    - Nonce [ Is used ensure that each block has a unique hash ]
   ```


 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Python.py]: https://img.shields.io/badge/Python-282A3A?style=for-the-badge&logo=python&logoColor=5DA7DB
[Python-url]: https://www.python.org/
[Flask.py]: https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=C1C1C1
[Flask-url]: https://flask.palletsprojects.com/en/2.2.x/

