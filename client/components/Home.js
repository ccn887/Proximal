import React, { Component } from 'react';
import { winner } from '../../bayesguessing'


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      lexile: '',
      score: ''
    }
    this.guessLexile = this.guessLexile.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  async guessLexile() {
    const text = this.state.text
    try {
      const lexile = await winner(text)
      this.setState({
        lexile: lexile.label,
        score: lexile.score
      })
    }
    catch (err) {
      console.log(err)
    }
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  render() {
    const { text, lexile, score } = this.state;

    return (
      <div className="pusher">
        <div className="ui inverted vertical masthead center  aligned segment">
          <div className="ui text container">
            <h1 className="centered ui header" > Proximal</h1>
            <h2>Meet your students exactly where they are.</h2>
          </div>
        </div>
        <div className="ui form">
          <div className="field">
            <label>Paste a representative sample of your text below to find out its lexile measure</label>
            <textarea onChange={this.handleChange} name="text" />
          </div>
        </div>
        <button className="ui button" onClick={this.guessLexile}>Get Lexile Measure</button>
        {this.state.lexile === '200' &&
          <div>
            <h3 >This text's lexile measure is in the 200 - 600 range. </h3>
            <h3 >More books in the same lexile range:</h3>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/91ZDtXyj77L.__BG0,0,0,0_FMpng_AC_UL320_SR218,320_.jpg" />
                </div>
                <div className="content">
                  <a className="header">Junie B. Jones Is A Beauty Shop Guy</a>
                  <div className="meta">
                    <span className="content">Lexile Measure: 530</span>
                  </div>
                  <div className="description">
                    Follow Junie's adventures as she trains towork ina beauty shop!
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/51HrAN3sTsL.__BG0,0,0,0_FMpng_AC_UL320_SR212,320_.jpg" />
                </div>
                <div className="content">
                  <a className="header">Big Nate Goes For Broke</a>
                  <div className="meta">
                    <span className="content">Lexile Measure: 450</span>
                  </div>
                  <div className="description">
                    Nate breaks his wrist and can't draw anymore!
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/51N595qwKOL._SX360_BO1,204,203,200_.jpg" />
                </div>
                <div className="content">
                  <a className="header">Green Eggs & Ham</a>
                  <div className="meta">
                    <span className="content">Lexile Measure: 210</span>
                  </div>
                  <div className="description">
                    Do you like green eggs and ham? Does Sam I Am? Does anyone?
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/books/Disney/Pigeon_bus._V134974933_.jpg" />
                </div>
                <div className="content">
                  <a className="header">Don't Let the Pigeon Drive the Bus!</a>
                  <div className="meta">
                    <span className="content">Lexile Measure: 280</span>
                  </div>
                  <div className="description">
                    Only humans should drive the bus! Someone stop that pigeon!
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {this.state.lexile === '600' &&
          <div>
            <h3 className="ui large header">This text's lexile measure is in the 600 - 1000 range</h3>
            <h3 >More books in the same lexile range:</h3>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/41r9XSFl-8L.jpg" />
                </div>
                <div className="content">
                  <a className="header">Harry Potter and the Sorceror's Stone</a>
                  <div className="meta">
                    <span className="content">Lexile Measure: 880</span>
                  </div>
                  <div className="description">
                    Harry goes to Hogwarts to become a wizard and encounters adventures and intrigue along the way.
                </div>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/51XYa9JOGYL.__BG0,0,0,0_FMpng_AC_UL320_SR214,320_.jpg" />
                </div>
                <div className="content">
                  <a className="header">The Boxcar Children</a>
                  <div className="meta">
                    <span className="content">Lexile Measure: 580</span>
                  </div>
                  <div className="description">
                    The Aldens live in a boxcar and have adventures.
                </div>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src="http://www.readbreatherelax.com/wp-content/uploads/2014/01/6881eed3f57f35152cae7b85252d784d.jpg" />
                </div>
                <div className="content">
                  <a className="header">The Absolutely True Diary of a Part-Time Indian</a>
                  <div className="meta">
                    <span className="content">Lexile Measure: 600</span>
                  </div>
                  <div className="description">
                    Junior must leave his school on the rez to attend an all-white high school.
                </div>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/41kXvigd1NL._SX320_BO1,204,203,200_.jpg" />
                </div>
                <div className="content">
                  <a className="header">Mockingjay</a>
                  <div className="meta">
                    <span className="content">Lexile Measure: 800</span>
                  </div>
                  <div className="description">
                    The Capitol demands revenge on Katniss Everdeen.
                </div>
                </div>
              </div>
            </div>
          </div>
        }
        {this.state.lexile === '1200' &&
          <div>
            <h3 className="ui large header">This text's lexile measure is in the 1000+ range</h3>
            <h3 >More books in the same lexile range:</h3>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/41DUVKYlRnL.jpg" />
                </div>
                <div className="content">
                  <a className="header">The Great Gatsby</a>
                  <div className="meta">
                    <span className="content">Lexile Measure: 1010</span>
                  </div>
                  <div className="description">
                    Jay Gatsby's obsession with Daisy Buchanan in Jazz Age New York costs him everything.
                </div>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/A1L8YcibKnL.jpg" />
                </div>
                <div className="content">
                  <a className="header">Anna Karenina</a>
                  <div className="meta">
                    <span className="content">Lexile Measure: 1080</span>
                  </div>
                  <div className="description">
                    Happy families are all alike; every unhappy family is unhappy in its own way.
                </div>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/51sOyMmEYBL._SX310_BO1,204,203,200_.jpg" />
                </div>
                <div className="content">
                  <a className="header">Pride and Prejudice</a>
                  <div className="meta">
                    <span className="content">Lexile Measure: 1190</span>
                  </div>
                  <div className="description">
                    It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.
                </div>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/81EdKhklJdL.__BG0,0,0,0_FMpng_AC_UL320_SR244,320_.jpg" />
                </div>
                <div className="content">
                  <a className="header">Ulysses</a>
                  <div className="meta">
                    <span className="content">Lexile Measure: 1050</span>
                  </div>
                  <div className="description">
                    Experience a day in Dublin with Leopold "Poldy" Bloom and Stephen Daedelus and moonblue fruit.
                </div>
                </div>
              </div>
            </div>
          </div>
        }

      </div>
    )
  }
}
