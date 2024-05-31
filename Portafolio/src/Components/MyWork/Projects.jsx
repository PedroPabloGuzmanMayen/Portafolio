import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects'>
      <h1 className='title'>Projects</h1>
      <ul className='list'>
        <li className='item'>
          <p className = 'postgreSQL'>
            <pre>
                    {`
                    > |   ____  ______  ___    |
                    > |  /    )/      \/   \   |
                    > | (     / __    _\    )  |
                    > |  \    (/ o)  ( o)   )  |
                    > |   \_  (_  )   \ )  /   |
                    > |     \  /\_/    \)_/    |
                    > |      \/  //|  |\\      |
                    > |          v |  | v      |
                    > |            \__/        |
                    `}
            </pre>
          </p>
          <p className = 'description'>
            <a href='https://github.com/cor22982/Proyecto_Restaurante.git'>
              Restaurant management system: A system that allows the user to manage a restaurant. The database was created using PostgreSQL, the backend was created using Node.js and Express.js, and the frontend was created using React.js. In this project I made major contributions to the backend and for the database design.
            </a>
          </p>
        </li>
        <li className='item'>
          <p className = 'js'>
            <pre>
                    {`
    ████████████████████████
    ████████████████████████
    ████████████████████████
    ████████████████████████
    ████████████████████████
    ██████████  ████    ████
    ██████████  ██  ████████
    ██████████  ████    ████
    ██████████  ████████  ██
    ██████████  ██  ████  ██
    ██████    ██████    ████
    ████████████████████████
                    `}
            </pre>
          </p>
          <p className = 'description'>
            <a href='https://github.com/PedroPabloGuzmanMayen/Lab6_Web.git'>
              API for blog: In this project I made an API for getting data from a blog database. The database was made using MariaDB and the API was developed using Node.js and Express.js. I made every part of the project.
            </a>
          </p>
        </li>
        <li className = 'item'>
            <p className = 'python'>
              <pre>
                {`
⠀⠀⠀⠀⠀⠀⠀⢀⣤⣴⣶⣶⣶⣶⣶⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣾⠟⠛⢿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣄⣀⣼⣿⣿⣿⣿⣿⣿⣿⠀⢀⣀⣀⣀⡀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⣿⣿⣿⣿⣿⠀⢸⣿⣿⣿⣿⣦⠀
⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢸⣿⣿⣿⣿⣿⡇
⢰⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⠿⠿⠋⠀⣼⣿⣿⣿⣿⣿⡇
⢸⣿⣿⣿⣿⣿⡿⠉⢀⣠⣤⣤⣤⣤⣤⣤⣤⣴⣾⣿⣿⣿⣿⣿⣿⡇
⢸⣿⣿⣿⣿⣿⡇⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀
⠘⣿⣿⣿⣿⣿⡇⠀⣿⣿⣿⣿⣿⠛⠛⠛⠛⠛⠛⠛⠛⠛⠋⠁⠀⠀
⠀⠈⠛⠻⠿⠿⠇⠀⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣧⣀⣀⣿⠇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀
                `}

              </pre>
            </p>
            <p className = 'description'>
                <a href='https://github.com/PedroPabloGuzmanMayen/Proyecto-2---Algoritmos-y-Estructuras-de-datos.git'>
                Recommender system: In this project I made a recommedation system for university careers. I designed a graph database using Neo4j, and I used Python to make the recommendation system. I made every part of the project.
                </a>
            </p>
                        

        </li>

      </ul>
    </div>
  )
}

export default Projects

