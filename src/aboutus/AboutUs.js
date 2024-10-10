import React from "react";
import './AboutUs.css'; // Make sure to import your custom CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Save Your Thoughts, Wherever You Are</h1>
        <button className="hero-button">Get Started</button>
      </div>

      <div className="image-center">
        <img
          alt="Phone displaying notes app"
          className="main-image"
          src="https://storage.googleapis.com/a1aa/image/TBBg2lQhpIKBHJDfXD5EI0KWefieOKxwap3JhxyBtL165hUOB.jpg"
        />
      </div>

      {/* Capture Section */}
      <div className="capture-section">
        <h2 className="section-title">Capture What's on Your Mind</h2>
        <p className="section-text">
          Add notes, lists, photos, and audio to Keep. Need to remember to pick up some groceries? Set a location-based reminder to pull up your grocery list right when you get to the store.
        </p>
      </div>

      <div className="image-gallery">
        <img
          alt="Sticky note with 'Surprise party for Kristen!'"
          className="gallery-image"
          src="https://storage.googleapis.com/a1aa/image/h1Fx2YieGeg8m0pBQooGOz3mcbZXMZHxssXrOoZqZtFUeQKnA.jpg"
        />
        <img
          alt="Handwritten note"
          className="gallery-image"
          src="https://storage.googleapis.com/a1aa/image/27wUHsk68To5IBSv82j2kv533jyLDIrCQf6917uDy23MPkyJA.jpg"
        />
      </div>

      {/* When and Where Section */}
      <div className="when-where-section">
        <h3 className="section-title">When and Where You Need It</h3>
        <p className="section-text">
          Need to remember to pick up some groceries? Set a location-based reminder to pull up your grocery list right when you get to the store.
        </p>
        <img
          alt="Phone with a note saying 'Grocery list'"
          className="side-image"
          src="https://storage.googleapis.com/a1aa/image/SUlmRgoiuBIFK1luU5iuMJ3eG2ieKeG1GGHRapC9mlV28QKnA.jpg"
        />
      </div>

      {/* Share Section */}
      <div className="share-section">
      <h3 className="section-title">Share Your Thoughts with Family and Friends</h3>
        <p className="section-text">
          Next time you go to the store, share your shopping list with family and friends to get help with your shopping.
        </p>
        <img
          alt="Hand holding a phone with a list of items"
          className="side-image"
          src="https://storage.googleapis.com/a1aa/image/zV4wvb7mufSybyvVBdbXjPFOb57aNTACPUBUJu8GYFdNPkyJA.jpg"
        />
    
      </div>

      {/* Find Section */}
      <div className="find-section">
        <h3 className="section-title">Find What You Need, Fast</h3>
        <p className="section-text">
          Quickly filter and search for notes by color and other attributes like lists with images, audio notes with reminders, or just see shared notes. Find what you need, fast.
        </p>
        <img
          alt="Phone displaying a list of notes"
          className="side-image"
          src="https://storage.googleapis.com/a1aa/image/MOWyyrfsy7weW0tXG2fFFzf9i83oDOdb63zSeNf42bt0lHS5E.jpg"
        />
      </div>

      {/* Always Within Reach Section */}
      <div className="always-reach-section">
        <h2 className="section-title">Always Within Reach</h2>
        <p className="section-text">
          Keep works on your phone, tablet, computer, and Android wearables. Everything you add syncs across all of your devices so your thoughts are always with you.
        </p>
        <img
          alt="Laptop, tablet, and phone displaying notes app"
          className="main-image"
          src="https://storage.googleapis.com/a1aa/image/N5EsECfs3qXEFKoDXfqptGPnDcVvmoCBhltWzZtVePT68QKnA.jpg"
        />
      </div>

      {/* Keep Every Thought Section */}
      <div className="keep-every-thought-section">
        <h2 className="section-title">Keep Every Thought</h2>
        <p className="section-text">
          Keep is available on Android, iOS, and through your web browser.
        </p>
        <img
          alt="Phone and sticky notes on a table"
          className="main-image"
          src="https://storage.googleapis.com/a1aa/image/CoNmQdILzIIqItZKMCliP5XrZLS2zfSHeYY2YqQrje6t8QKnA.jpg"
        />
      </div>
    </div>
  );
};

export default AboutUs; 

