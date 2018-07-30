import React, { Component } from 'react';

import LoginButton from '../loginComponent/loginButton';
import Location from '../locationComponent/location';

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="pimg1">
          <div className="ptext">
            <span className="head_border">
              <div className="Login-buttons">
                <LoginButton />
              </div>
            </span>
          </div>
        </div>

        <section className="section section-light">
          <h2>Section One</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia fugit dolore, in deleniti iure eos et ipsa non deserunt
            voluptate laboriosam veniam amet cum dolorum, libero, aliquid praesentium veritatis consequuntur explicabo. Totam sit
            earum et eligendi incidunt molestias minima minus quo fugit. Reprehenderit voluptatibus fuga excepturi dolores deleniti
            minima sint eius. Non perferendis illum, libero consequuntur beatae labore. Ullam, ad non aliquam iure in porro sit
            quibusdam voluptatibus provident natus dolor atque modi. Quae ullam perferendis illo similique dolore officiis laborum
            dolorum recusandae iure rem doloribus, autem eos rerum doloremque numquam nulla, nostrum quos obcaecati quibusdam vero
            facere earum minus.
          </p>
        </section>

        <div className="pimg2">
          <div className="ptext">
            <span className="border trans">
              Image Two Text
            </span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Section Two</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia fugit dolore, in deleniti iure eos et ipsa non deserunt
            voluptate laboriosam veniam amet cum dolorum, libero, aliquid praesentium veritatis consequuntur explicabo. Totam sit
            earum et eligendi incidunt molestias minima minus quo fugit. Reprehenderit voluptatibus fuga excepturi dolores deleniti
            minima sint eius. Non perferendis illum, libero consequuntur beatae labore. Ullam, ad non aliquam iure in porro sit
            quibusdam voluptatibus provident natus dolor atque modi.
          </p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border trans">
              Image Three Text
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
