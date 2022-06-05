import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styling/allBlogs.css';

export default class DesignAesth extends Component {
  render() {
    return (
        <div className='blogPosts'>

        <div className='linkLeft'>

        <a><Link to='/Netart'>=NetArt</Link></a>
        </div>

        <div className='linkRight'>

        <a><Link to='/DesignJustice'>Design Justice=</Link></a>
        </div>

        <div className='headerBlogs'>

            <h1><i>Core Principles of Design and Aesthetics</i></h1>
            <p><i>General Discussion of Design and Aesthetics</i></p>
        </div>

        <div className='bodyBlogs'>
            <p>
            <u><i>The Role of Aesthetics in Web Design</i></u> <br></br>
            <u><i>Lisbeth Thorlacius</i></u> <br></br>
            
            <p>
            Lisbeth Thorlacius describes aesthetics as, “visual, sound and interactive means of effect.” (Thorlacius, 2007:63). 
            Aesthetics can be seen as a form of visual communication, meaning that it is a form of communication as soon as it becomes perceivable to the user. 
            These can be words, colours and text. Therefore, when making use of Visual communication, aesthetics, it should stand out to entertain the audience. 
            </p>
            
            <p>
            There are different types of audiences, so as a designer, it is important to consider what would entertain different audiences. 
            Thorlacius mentions that it is important to leave a lasting, personal impression on our created websites. 
            We cannot escape aesthetics, although they have to have functionality on websites. 
            Functionality is not a part of aesthetics, but it is important. In order for users to be able to navigate through a website,
            functionality needs to be a key aspect, although aesthetics can aid to keep the website entertaining enough for the audience to use. 
            Aesthetics can also be detrimental to the functionality of sites, they can slow the site down or be overwhelming for the user to look at. 
            Therefore, websites have to have a fair balance of aesthetics and functionality. 
            </p>
            
            <p>

            </p>
            <u><i>Design principles for interactive user experience through net art</i></u> <br></br>
            <u><i>Ji Yong Park</i></u> <br></br>
            
            <p>
            Ji Yong Park discusses the design principles for interactive user experiences. It can be seen that website aesthetics, 
            in this case, the user interface is not just aesthetics, it consists of coding to actually function and be visible. 
            Therefore, the coding enables the visual communication of the site.
            </p>
            
            <p>
            In order for a website to be both eye catching and user friendly, the design and aesthetics have to both be considered.  
            When it comes to aesthetics, it is important to remember that it should leave a lasting impression on the user, 
            also it should be designed in a way that is not overwhelming for the user. Functionality is just as important when it comes to website design, 
            it helps enable the site to actually work. As mentioned before, certain aesthetics can be detrimental to the site’s flow, it can slow the site down. 
            Therefore, having a good balance of aesthetics and functionality can aid in having a memorable website.
            </p>
            
            <p>
            What I basically understood from Park was that Net Art should allow user interaction, so that there is a community where everyone can participate in creating Net Art,
            not just content creators. This interaction between users and creators allows effective communication. 
            To be completely honest, Park’s reading did confuse me a lot :(. 
            </p>
            
            <p>
            I have looked at a few websites that mention web design and aesthetics. Websites such as <u>“Feeling Peaky: 9 Principles of Good Web Design”</u> and 
            <u> “resource techniques: 5 Basic Elements of Web Design”</u>, focus mainly on the functionality of the sites. These sites mention that content, usability, purpose, 
            navigation and simplicity are the key aspects to design principles. 
            </p>

            <p>
            <u><i>Some other things that I have researched</i></u> <br></br>
            The aesthetics of web development are also important. Websites such as <u>“UX Collective: Design Principle: Aesthetics”</u> and 
            <u>“Pee-Aye Creative: Top 5 Aesthetic Principles You Must Take Into Account When Designing a Website”</u>, discuss the important aspects to take into consideration 
            when implementing the aesthetics. These sites mention visual aesthetics such as colour theory, graphics, layouts, typology, and why they matter.
            </p>

            <p>
            <u><i>Conclusion</i></u> <br></br>
            In conclusion, both Thorlacius and Park make interesting points about Functionality VS Aesthetics. I believe that both aspects are important, 
            although functionality can be seen to have slightly more importance than aesthetics. A website can look aesthetically pleasing, but if it does not function well, 
            the user experience is lost. Things such as: navigation, page routing, searching for specific things and page loading times impact the overall end product of websites. 
            Although these are the basics of functionality, if these components are not developed well, the website will not be functional for users. 
            On the other hand, if a website does not look good, user’s will lose interest in what is being portrayed because it is boring to look at.
            </p>
            
            <p>
            <u><i>References</i></u> <br></br>
            <br></br>
            Feelingpeaky - Creative design agency, London. 2022. 9 Principles of Good Web Design - read our guidelines to consider. [online] [Accessed 1 April 2022]. <br></br>
            <br></br>
            Medium. 2022. Design principle: Aesthetics. [online] [Accessed 2 April 2022]. <br></br>
            <br></br>
            Park, Ji. (2007). Design principles for interactive user experience through net art. Journal of Digital Design. 7. 10.17280/jdd.2007.7.3.005. <br></br>
            <br></br>
            Pee-Aye Creative. 2022. Top 5 Aesthetic Principles You Must Take Into Account When Designing a Website. [online] [Accessed 4 April 2022]. <br></br>
            <br></br>
            Resource Techniques. 2022. 5 Basic Elements of Web Design. [online] [Accessed 2 April 2022].<br></br>
            <br></br>
            Thorlacius, Lisbeth. (2007). The Role of Aesthetics in Web Design. Nordicom Review. 28. 10.1515/nor-2017-0201.<br></br>
            </p>
            
            </p>
           
        </div>

        <div className='linkMid'>

          <a><Link to='/Blogs'>=Blogs=</Link></a>
        </div>

      </div>
    )
  }
}
