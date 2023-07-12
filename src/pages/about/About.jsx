import React from "react";
import "./About.css"

const About = () => {
  return (
    <div className="about-page">
        <section>
            <h2>About Shoplife</h2>
            <p>
                Welcome to my app! This application was built with passion and dedication, aiming to provide a seamless user experience and showcase the skills and knowledge I gained during the development process.
            </p>
            <p>
                The app is designed to Browse, shop and favorite products from several categories. It leverages various technologies and tools to deliver a robust and interactive user interface.
            </p>
        </section>
        <section>
            <h3>Key Features</h3>
            <ul>
                <li>Browse through products from 4 categories</li>
                <li>Add products to cart in any quantity</li>
                <li>Favorite products and view them in a seperate page</li>
            </ul>
        </section>
        <section>
            <h3>Technologies Used</h3>
            <ul>
                <li>React: opShlife app is built using the React library, allowing for efficient component-based development and state management.</li>
                <li>JavaScript (ES6+): The primary programming language used to write the application logic.</li>
                <li>HTML5 & CSS3: The building blocks for structuring and styling the user interface.</li>
                <li>FakeStore : Fakestore (FakeStore API) is an online database that provides information about products.</li>
            </ul>
        </section>
        <section>
            <h3>Key Learnings</h3>
            <p>
                Throughout the development of this app, I gained valuable insights and improved my skills in various areas, including:
            </p>
            <ul>
                <li>React component lifecycle and hooks</li>
                <li>Managing and manipulating application state</li>
                <li>Handling user authentication and authorization</li>
                <li>Working with APIs and fetching data</li>
                <li>Styling and layout techniques</li>
                <li>Debugging and troubleshooting</li>
                <li>Creating and accessing context</li>
                <li>And many more</li>
            </ul>
        </section>
            <p>
                Thank you for using my app and exploring the features I implemented. I hope you find it useful and enjoy using it as much as I enjoyed building it. If you have any feedback or suggestions, please feel free to reach out!
            </p>
    </div>
  );
};

export default About;