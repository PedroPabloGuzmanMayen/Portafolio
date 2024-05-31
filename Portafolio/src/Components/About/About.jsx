import React from 'react'
import './About.css'

const About = () => {

    return (
        <div className = 'About'>
            <h1 className = 'mainTitle'>
                About me
            </h1>
            <p className = 'Description'>
                I'm a backend devoloper with experience in python and epxressjs. I'm also gOod at relational databases and I have experience with react and frontend development too. 
            </p>
            <h1 className = 'mainTitle'> If you want to know me better, these are some of my hobbies </h1>
            <ul className = 'list'>
                <li className = 'Description'>
                    I like to play nintendo games, especially Zelda games 🕹️
                </li>
                <li className = 'Description'>
                    I like to read thriller books 📚 
                </li>
                <li className = 'Description'>
                    I'm a fan of soccer, my favorite team is FC Barcelona and my favorite player is Lionel Messi ⚽
                </li>
                <li className = 'Description'>
                    I like Marvel movies and comics, my favorites Marvel movies are: Spider-Man: Across the Spider-Verse 🕷️, Avengers: Infinity War♾️, X-men: Days of Future Past 🦸
                </li>
                <li className = 'Description'>
                    I love penguins (for that reason I use it as an Avatar) 🐧
                </li>
            </ul>
            <p className = 'penguin'>
                <pre>
                    {`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣤⣤⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣴⠾⠛⠛⠉⢈⣴⣶⣷⣶⣿⣯⣟⢷⣖⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡾⢛⣁⠉⣳⡾⠟⠿⠿⢉⣣⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⣿⠧⢠⣶⡿⠋⠀⠐⠀⠀⢰⡲⣾⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⠽⢿⣶⣾⣿⠟⠇⠀⠀⠀⠀⣀⢠⣿⣿⡿⠟⠛⠛⠛⢿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠋⠁⠀⠀⠀⢹⣿⣇⡀⠀⠀⠀⠀⣮⣿⣿⠋⠀⠀⠀⠀⠀⠀⠙⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠏⠀⢀⡀⠀⠀⠀⠹⣿⣿⣧⠀⠀⢀⣸⡿⠁⠀⠀⢀⣀⡀⠀⠀⠀⢸⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⢰⣿⣿⣷⠆⠀⠀⣿⣿⣷⣶⣶⣿⣿⡇⠀⠀⢰⣿⣿⣿⡄⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⠘⠻⠿⠟⠀⠀⢰⠟⠁⠀⠈⠉⢻⣿⠁⠀⠀⠘⠻⠿⠟⠀⠀⠀⢀⣿⣿⡆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⠀⠀⠻⠤⡤⠤⠤⠤⣴⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⠇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠲⠾⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣶⣶⣶⡷⣾⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣀⣤⣤⠤⠴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡎⣳⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡾⣿⢿⣯⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠻⣿⠟⢦⣀⣀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠤⢔⠺⠿⠿⣷⣞⣻⣤⣤⣿⠄⠀⠀⠀⠀⠀⠀⠀
⠘⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡌⣾⠁⠀⠀⠉⠉⠉⠓⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⣡⡾⢃⡉⠳⣄⠀⠀⠀⠀⠀⠀
⠀⠘⢿⡟⠛⠋⠉⠉⠀⢹⣿⣾⣿⣿⣿⣿⣿⣿⣿⡜⣳⡶⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣾⣿⠋⣶⠀⠉⠒⠎⢳⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⠋⣿⣿⣿⣿⣿⣿⣿⠟⠀⠈⣝⢯⡖⢤⣤⣤⡄⠀⠀⠀⠀⢀⣠⠾⠟⠛⠁⠙⣧⠘⣷⡀⠀⠀⠀⠹⣆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⢿⡿⠿⠛⢛⡇⠀⠀⠀⠀⠀⠉⠀⠈⠁⠀⠀⠀⠀⠒⠋⠁⠀⠀⠀⠀⠀⠘⣇⠸⣿⣦⣄⠀⠀⠸⣆⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡆⠹⣾⣿⢿⣦⡀⠹⡆⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⡿⠀⠙⢿⡌⠻⣧⡀⠹⡆
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠸⡇⠀⠀⠉⠛⠃
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡇⠀⠀⠀⣷⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡟⠁⠀⠀⠀⣿⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⣿⡀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠋⠀⠀⢠⢆⠆⣽⢷⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⢫⣇⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠇⠀⠀⠀⢸⠜⣠⣧⣬⣧⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⣟⢷⠀⠻⣷⣄⠀⠀⠀⠀⢤⡀⠀⢀⡀⡀⠀⠸⣦⠀⢸⠀⠀⠀⠀⠘⣰⣿⣬⣿⠟⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣷⣷⣤⡀⠙⠷⠶⣶⣤⣀⣉⣂⣀⣀⣀⣀⣀⣹⣆⠸⠆⠀⠀⢀⣴⡿⠋⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣾⠉⣻⠟⢷⣶⣶⣿⣙⣶⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢛⡶⠶⣶⣿⣿⠟⢿⡏⠛⠲⣶⣶⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠺⠿⣿⣿⢟⢿⡴⠿⣇⡤⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠁⣼⣏⠉⡿⢤⣸⣇⡤⠶⠛⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠛⠛⠛⠛⠛⠓⠷⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠖⠛⠛⠛⠛⠛⠛⠋⠉⠀⠀⠀⠀⠀⠀
                    `}

                </pre>
            </p>
        </div>
    )

}

export default About