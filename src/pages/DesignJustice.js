import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styling/allBlogs.css';

export default class DesignJustice extends Component {
  render() {
    return (

        <section className='blogPosts'>

            <section className='headerBlogs'>

            <div class="h-feed">
              <h1 class="p-name"><i>Internet, Society and Design Justice</i></h1>
             <p><i>Discussing Design Justice Issues</i></p>
            </div>
             
            </section>

            <article className='bodyBlogs'>

                <p class="p-summary">
                <u><i>Core issues around Internet, Society and Design Justice for the web</i></u> <br></br>
                <br></br>
                There are many different issues around the world that involve the internet, society and design justice. I will be focusing on 2 different issues, 
                they can be categorised under the internet and design justice. The first issue will focus on Costanza-Chock, “Travelling while Trans”. 
                I will be focusing on a few aspects that Costanza-Chock mentions. The second issue will be the digital divide that most countries experience. 
                I will be looking at Nanjira Sambuli’s interview, “What is digital equality”, as well as the Institute for internet and justice society’s website, 
                for Digital Inclusion.
                </p>
                
                <p>
                Costanza-chock mentions that it is very difficult for trans people to travel, due to the airport security that flags them for being anomalies.
                This means that their body’s are seen as ‘irregular’ to the machines, so these people are often called aside to be physically checked by another person. 
                This can be uncomfortable for trans people. This can be seen as a design injustice. These machines are flawed, they only categorise between male and female, 
                and cannot recognize trans people, therefore the design of these machines are an injustice. 
                </p>
                
                <p>
                Costanza-chock mentions the Design Justice Network, where it is a community of people, from diverse backgrounds, that are coming together to create machines 
                and systems that make sure no one feels left out or different, in a bad way. “The goal of the workshop was to move beyond the frames of
                social impact design or design for good, to challenge designers to think about how good intentions are not necessarily enough to ensure that 
                design processes and practices become tools for liberation, and to develop principles that might help design practitioners avoid the (often unwitting)
                reproduction of existing inequalities.”(Costanza-Chock, 2020:5)
                </p>
                
                <p>
                In certain countries, there is a majority of people and areas that do not have access to the internet, nor do they have access to ‘basic’ technology. 
                This is called the “Digital Divide”. Nanjira Sambuli discusses digital equality, stating that there is a huge gap between 
                those with access to the internet and those without it. “For instance, only half of the world’s population is online; 
                progress in getting more people connected has slowed down dramatically.”(Sambuli, 2019).
                </p>
                
                <p>
                The Institute for internet and justice society’s research program, Digital Inclusion, discusses multiple problems that people face without having access to the internet.
                There is a statistic that mentions that only 39.3% of Africa’s population has access to the internet. This is a massive divide, which leaves a lot of people out, 
                and as technology keeps developing and getting more advanced, people are left further behind. Another problem is that these people have many 
                cultures and traditions that are not being recognized, due to the fact that they are not connected. “However, issues such as isolation 
                can prevent such cultures from being recognised by the rest of the world, a problem that is known as the “rural penalty”.”(Digital Inclusion, 2022).
                Therefore it can be seen that there are multiple issues that can arise due to the internet, lack of the internet, society and design injustice. 
                That’s why the “Design Justice Network” was founded. To make sure that no person or group of people are left out or not liberated. 
                </p>

                <p>
                  I believe that there should be more groups like the Design Justice Network. There are way too many countries,
                  and even groups of people, that are left out when it comes to the internet and design. Considering that we live 
                  in the Digital Age, there are many solutions to dealing with this "digital divide" so that no one gets
                  left behind. Every group, whether it is the LGBTQIA+, ethinc, religious etc, should all have freedom to use the internet
                  and not be discriminated by it, especially due to certain design aspects.
                </p>
                
                <p>
                <u><i>References:</i></u><br></br>
                <br></br>
                Costanza-Chock, S. (2020) Design Justice: Community-Led Practices to Build the Worlds We Need. Cambridge, MA, USA: MIT Press (Information Policy). <br></br>
               
                World Economic Forum. 2022. What is digital equality? An interview with Nanjira Sambuli. [online] [Accessed 21 April 2022].  <br></br>
                <a href="https://www.internetjustsociety.org/digitalinclusion" target="_blank" rel="noopener noreferrer">https://www.internetjustsociety.org/digitalinclusion</a>
                <br></br>
                </p>
            </article>

              <div className='Links'>
                <div className='linkLeft'>

                    <a><Link to='/DesignAesth'>Design Aesthetics</Link></a>
                    </div>

                <div className='linkRight'>

                    <a><Link to='/Reflection'>Reflection</Link></a>
                    </div>

                <div className='linkMid'>

                    <a><Link to='/Blogs'>Blogs</Link></a>
                    </div>
              </div>
              <br></br>

        </section>
      

      
    )
  }
}
