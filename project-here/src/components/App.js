

function App() {
  return (
    <div>
      <section id="Interface-top">
        <div className="nav">
          <h1>A</h1>
          <ul>
            <li>
              <a href="#Biography-Middle">Biography</a>
            </li>
            <li>
              <a href="#contact-me">Contact</a>
            </li>
            <li>
              <a href="#skiils-part">About</a>
            </li>
          </ul>
        </div>
        <div className="interface-part_i">
          <div className="interface-title">
            <h1 className="inter-title">Aqeel Muhsen</h1>
          </div>
          <div className="interface-title_bottom">
            <p className="title-description">
              | Megalodon Developer / The Perfect Developer / Back-End Front-End
              Skills |
            </p>
            <p className="btn Skills">
              <a href="#skiils-part">Informations</a>
            </p>
            <p className="span1">/</p>
            <p className="btn Hire_Him">
              <a href="#contact-me">Hire Him</a>
            </p>
          </div>
        </div>
      </section>

      <section id="Biography-Middle">
        <div className="biography-middle_container">
          <div className="contr-1">
            <img className="the-hand" src="IMAGE/Hand.png" alt="hand" />
            <div className="biography-1">
              <h3>Software Mentality</h3>
              <p>
                Deep understanding of programming and a mindset that favors
                perfection over productivity. Web developer and designer,
                database capability. Publisher and writer, I started his
                programming journey in 2020, loves programming with all its
                specializations and is capable of development and investment,
                loves working as a programmer.
              </p>
            </div>
          </div>
          <div className="contr">
            <img className="the-brain" src="IMAGE/brain.png" alt="hand" />
            <div className="biography-2">
              <h3>Ideal Mentality</h3>
              <p>
                I like to work for the goals I believes in, from ideas that
                benefit the community, is cooperative, understanding and
                flexible. I'm able to work in programming in a specialized and
                beneficial way. A different touch in reality, design and
                responsiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skiils-part">
        <div className="skills-part_container">
          <div className="skills-boxs">
            <img
              className="for_intelligent"
              src="IMAGE/Third-part_mage-1.png"
              alt="creazy_learning"
            />
            <h1>Skills</h1>
            <div className="box-s">
              <i className="fa-solid fa-pencil fa-7x"></i>
              <p>Front-End</p>
            </div>
            <div className="box-s">
              <i className="fa-solid fa-database fa-7x"></i>
              <p>Back-End</p>
            </div>
            <div className="box-s">
              <i className="fa-brands fa-js fa-7x"></i>
              <p>JavaScript</p>
            </div>
            <div className="box-s">
              <i className="fa-brands fa-python fa-7x"></i>
              <p>Python</p>
            </div>
            <div className="box-s">
              <i className="fa-brands fa-git fa-7x"></i>
              <p>Git</p>
            </div>
            <div className="box-x">
              <p>
                | JavaScript | Python | Html | CSS | Arduino | Bash | JQuery |
                BootStrap | Django | Express | FireBase | Git | Heroku | MongoDB
                | MySql | Nodes | Photoshop | illustrator | React | Rust | Sql |
              </p>
              <img src="IMAGE/giving-hand.png" alt="hand" />
            </div>
          </div>
        </div>
      </section>

      <section id="fourd-part">
        <div className="fourd-part_end-container">
          <i className="fa-brands fa-instagram fa-2x"></i>
          <a href="https://github.com/MegalodonDeveloper">
            <i className="fa-brands fa-github fa-2x"></i>
          </a>
          <i className="fa-brands fa-twitter fa-2x"></i>
          <a href="#contact-me">
            <i className="fa-solid fa-envelope fa-2x"></i>
          </a>
          <i className="fa-brands fa-linkedin fa-2x"></i>
          <i className="fa-solid fa-globe fa-2x"></i>
          <a href="#contact-me">
            <i className="fa-solid fa-handshake fa-2x"></i>
          </a>
          <p>© AqeelMuhsen .</p>
        </div>
      </section>

      <section id="contact-me">
        <div className="container">
          <h3>Email | Contact Me</h3>
          <form action="#" method="post">
            <input type="text" className="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea>Write Message</textarea>
            <button>Send</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;