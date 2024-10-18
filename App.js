import React  from 'react';
import banner from "./image/banner.png";
import flopet from "./image/flopet.png";
import footer from "./image/footer.png";
import peelpet from "./image/peelpet.png";
import serum from "./image/serum.png";
import how3 from "./image/how3.png";
import Navbar from "./Navbar";
import './App.css';


function App() {
  return (
    <div class="page-wrapper">
      <Navbar/>
    
    <section class="serum-section">
        <h1 class="serum-heading">*Your personalize serum to perfect skin</h1>
        <img class="serum-image" src={banner} alt="banner image" />
    </section>
    

    <section class="science-nature-section">
        <h1 class="science-heading">Where science meet nature</h1>
        <div class="image-container">
            <img class="image-1" src={flopet} />
            <img class="image-2" src={serum}/>
            <img class="image-3" src={peelpet} />
        </div>
        <h2 class="science-description">Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Modi aut ipsum deleniti maiores eaque officiis in maxime consectetur asperiores earum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Minima minus commodi modi assumenda id iure, dicta optio non pariatur quia.</h2>
    </section>
    

    <section class="how-it-works-section">
        <div class="image-section">
            <h1>How this works</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, esse.</p>
            <img src={how3} alt="How it works image" />
        </div>
        <div class="steps-section">
            <div class="step-row">
                <h1>01</h1>
                <div class="step-description">
                    <h1>Test your skin</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sunt libero aperiam et, quis deleniti.</p>
                </div>
            </div>
            <div class="step-row">
                <h1>02</h1>
                <div class="step-description">
                    <h1>Test your skin</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sunt libero aperiam et, quis deleniti.</p>
                </div>
            </div>
            <div class="step-row">
                <h1>03</h1>
                <div class="step-description">
                    <h1>Test your skin</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sunt libero aperiam et, quis deleniti.</p>
                </div>
            </div>
            <div class="step-row">
                <h1>04</h1>
                <div class="step-description">
                    <h1>Test your skin</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sunt libero aperiam et, quis deleniti.</p>
                </div>
            </div>
            <div class="step-row">
                <h1>05</h1>
                <div class="step-description">
                    <h1>Test your skin</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sunt libero aperiam et, quis deleniti.</p>
                </div>
            </div>
        </div>
    </section>
    


    {/* footer */}
    <footer class="footer-section">
        <img class="footer-image" src={footer} alt="footer image" />
        <div class="footer-col">
            <div class="footer-call-to-action">
                <h1>Ready to transform your skin</h1>
                <button class="footer-button">See product</button>
            </div>

            <div class="footer-navigation">
                <h1 class="footer-logo">Muteza</h1>
                <div class="footer-links-container">
                    <div class="footer-product-links">
                        <ul>
                            <li>PRODUCTS</li>
                            <li>HOW IT WORKS</li>
                            <li>FAQ</li>
                            <li>REVIEWS</li>
                            <li>BLOG</li>
                        </ul>
                    </div>
                    <div class="footer-social-links">
                        <ul>
                            <li>INSTAGRAM</li>
                            <li>TWITTER</li>
                            <li>DRIBBLE</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
  );
}

export default App;
