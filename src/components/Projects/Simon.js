import React from 'react'
import Media from 'react-media'
import { observer } from 'mobx-react'
import store from '../Store'

import Switcher from './_common/Switcher'
import SwitcherPor from './_common/SwitcherPor'
import Badges from './_common/Badges'

import img from '../../assets/projects/simon-main.jpg'
import imgSma from '../../assets/projects/simon-main-sma.jpg'
import imgMed from '../../assets/projects/simon-main-med.jpg'

import './project.sass'

@observer
export default class Simon extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <div className='project' >
        {store.language === 'FR' ?
          <main className='wrapper'>
            <h1 className='title'>{store.Simon.Name}<span className='title--dot'>.</span></h1>
            <Badges store={store} project='Simon' />
            <section className='section-first'>
              <p>Simon est une réplique du jeu de société des années 80 développé en Javascript et jQuery. </p>
            </section>

            <img
              src={imgMed}
              srcSet={`${imgSma} 550w,
              ${imgMed} 1000w,
              ${img}  1600w`}
              className='project-ss'
              alt='Simon game' />

            <section  className='section-second'>
              <h2>Un design responsive et facilement modifiable</h2>
              <p>{ store.Simon.Text_2_fr }</p>
            </section>
            <section  className='section-third'>
              <h2 className='third'>Rapidité et navigation</h2>
              <p className='third'>{ store.Simon.Text_3_fr }</p>
            </section>
          </main>
          :                 <main className='wrapper'>
                              <h1 className='title'>{store.Simon.Name}<span className='title--dot'>.</span></h1>
                              <Badges store={store} project='Simon' isMobile={true} />
                              <section className='section-first'>
                                <p>Simon is a replica of the 80's game developped in Javascript and jQuery.</p>
                              </section>

                              <img
                                src={imgMed}
                                srcSet={`${imgSma} 550w,
                                ${imgMed} 1000w,
                                ${img}  1600w`}
                                className='project-ss'
                                alt='Simon game' />

                              <section  className='section-second'>
                                <h2>Easily customizable and responsive design</h2>
                                <p>{ store.Simon.Text_2_en }</p>
                              </section>
                              <section  className='section-third'>
                                <h2 className='third'>Speed and Navigation</h2>
                                <p className='third'>{ store.Simon.Text_3_en }</p>
                              </section>
                        </main>}
      </div>
      <Media query={{orientation: 'portrait'}}>
          {matches => matches ?
            ( <SwitcherPor project='Simon'/> ) : (  <Switcher project='Simon'/> )}
      </Media>
    </div>
    );
  }
}
