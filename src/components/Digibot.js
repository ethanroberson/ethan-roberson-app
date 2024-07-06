import React from 'react'
import '../components/Digibot.css';

function Digibot() {

//selectors
const chatbot = document.getElementById('chatbotContainer');
const chatOpenBtn = document.getElementById('chatOpenBtn');
const notifaction = document.getElementById('notification');
const closeChatBtn = document.getElementById('closeChatBtn');
const chatContents = document.querySelector('.chatbot-contents');
const chatResponses = document.querySelector('.responses');
const responseInnerWrapper = document.getElementById('responseInnerWrapper');
const userInput = document.getElementById('userInput');
const userResponse = document.getElementById('userResponse');
const botResponse = document.getElementById('botResponse');
const chatBtn = document.getElementById('chatBtn');
const digibotImg = document.getElementById('digibotImg');
const contactLink = "https://thatdigitaldude.com/contact";
const contactText = "contact form";

//new bot response sound
let pop = new Audio('pop.mp3');
//userResponse.style.display = "none";
//services array
let services = [" Web Design", " Web Development", " SEO", " PPC", " Web Maintenance", " Consultation"];
let userName = userInput.value;
//user email array
let userEmailArray = [];


if (userInput.value == "") {
    userResponse.style.display = "none";
} 


//Main function
    let getBotResponse = () => {

    //userResponse.innerHTML = userInput.value;
    //botResponse.classList.add('scale-up');

    //new user responses appended
    let newUserResponse = document.createElement('p');
    newUserResponse.setAttribute('id', 'userResponse');
    newUserResponse.innerHTML = userInput.value;
    chatResponses.appendChild(newUserResponse);

    //new bot responses appended
    let newBotResponse = document.createElement('p');
    let createDigibot = document.createElement('img');
    let responseWrapper = document.createElement('div');
    createDigibot.setAttribute('src', 'https://cdn.iconscout.com/icon/premium/png-256-thumb/chatbot-5-902430.png?w=256&f=avif');
    createDigibot.setAttribute('id', 'digibotImg');
    createDigibot.style.width = "40px";
    createDigibot.setAttribute('class','.fade-in')
    newBotResponse.setAttribute('id', 'botResponse');
    responseWrapper.setAttribute('id', 'responseWrapper');
    responseWrapper.appendChild(createDigibot);
    responseWrapper.appendChild(newBotResponse);
    setTimeout(function() {
    chatResponses.appendChild(responseWrapper);
    pop.play();
    chatResponses.scrollTo(0, chatResponses.scrollHeight);
    }, 1000);

    //chatResponses.appendChild(createDigibot);
    //chatResponses.appendChild(newBotResponse);


    //let cloneBotResponse = botResponse.cloneNode(true);
    //chatResponses.append(cloneBotResponse);


//price
        if (userInput.value.toLowerCase().includes('price') || userInput.value.toLowerCase().includes('pricing') || userInput.value.toLowerCase().includes('quote') || userInput.value.toLowerCase().includes('cost') || userInput.value.toLowerCase().includes('money') || userInput.value.toLowerCase().includes('how much')) {
            userResponse.style.display = "flex";
                newBotResponse.innerHTML = "Prices vary per project and per service. Share a good email to reach you at below and That Digital Dude will reach out ASAP.";
            let quoteLink = document.createElement('a');
            quoteLink.innerHTML = "Get Quote";
            quoteLink.setAttribute('href', 'https://www.thatdigitaldude.com/#contact');
            quoteLink.setAttribute('class', 'response-cta');
            //chatResponses.appendChild(quoteLink);

    //added input field
            let chatForm = document.createElement('form');
            chatForm.setAttribute('id', 'chatForm');
            //chatForm.setAttribute('method', 'POST');
            //chatForm.setAttribute('action', 'https://script.google.com/macros/s/AKfycbyg-lxSFZRS1DyW4QNeW2G1Bzn5EXLvgqLDOXD2sxcZYVPcrhcycb83svFwhIsUzmW6yw/exec');
            //chatForm.setAttribute('target', '_blank');
            let quoteInput = document.createElement('input');
            quoteInput.setAttribute('type', 'email');
            quoteInput.setAttribute('name', 'email');
            quoteInput.setAttribute('placeholder', 'Email');
            quoteInput.setAttribute('id', 'botUserEmail');
            let quoteInputBtn = document.createElement('button');
            quoteInputBtn.setAttribute('type', 'button');
            //quoteInputBtn.setAttribute('name', 'submit');
            quoteInputBtn.innerHTML = "Submit";
            quoteInputBtn.setAttribute('id', 'botUserInputEmailBtn');
            let inputDiv = document.createElement('div');
            inputDiv.setAttribute('id', 'inputDivWrapper');
            setTimeout(function() {
            chatResponses.appendChild(quoteInput);
            chatForm.append(quoteInputBtn);
            chatResponses.appendChild(quoteInputBtn);
            inputDiv.append(chatForm);
            chatForm.append(quoteInput);
            chatForm.append(quoteInputBtn);
            inputDiv.append(quoteInput);
            inputDiv.append(quoteInputBtn);
            chatResponses.append(inputDiv);
            pop.play();
            chatResponses.scrollTo(0, chatResponses.scrollHeight);
            userInput.value = "";
            quoteInputBtn.addEventListener('click', createInputBtn);
        }, 1000);    
            //added input field


function createInputBtn() {
    setTimeout(function() {
    let newBotResponse = document.createElement('p');
    let createDigibot = document.createElement('img');
    let responseWrapper = document.createElement('div');
    createDigibot.setAttribute('src', 'https://cdn.iconscout.com/icon/premium/png-256-thumb/chatbot-5-902430.png?w=256&f=avif');
    createDigibot.setAttribute('id', 'digibotImg');
    createDigibot.style.width = "40px";
    createDigibot.setAttribute('class','.fade-in')
    newBotResponse.setAttribute('id', 'botResponse');
    responseWrapper.setAttribute('id', 'responseWrapper');
    responseWrapper.appendChild(createDigibot);
    responseWrapper.appendChild(newBotResponse);
    chatResponses.appendChild(responseWrapper);
    /*userEmail = quoteInput.value;
    pop.play();
    userEmailArray.push(userEmail);
    //window.open(userEmailArray);
    newBotResponse.innerHTML = `Thank you, ${userEmail}. You should receive an email within 24 hours. Is there anything else I can help you with?`
    */
    chatResponses.scrollTo(0, chatResponses.scrollHeight);
}, 1000)
}}

//no user input but button clicked
        else if (userInput.value.length < 1) {
            userResponse.style.display = "flex";
            newBotResponse.innerHTML = "Please type something!";
        } 
//hello
        else if (userInput.value.toLowerCase().includes('hello') || userInput.value.toLowerCase().includes('hi') || userInput.value.toLowerCase().includes('hey')) {
            userResponse.style.display = "flex";
            newBotResponse.innerHTML = "Hello there! I'd like to understand how I can assist you today.";   
        } 
//phone
        else if (userInput.value.toLowerCase().includes('phone') || userInput.value.toLowerCase().includes('call') || userInput.value.toLowerCase().includes('number') || userInput.value.toLowerCase().includes('speak') || userInput.value.toLowerCase().includes('text')) {
                userResponse.style.display = "flex";
                newBotResponse.innerHTML = "You can reach That Digital Dude by phone by choosing your preferred method below."; 
                let callLink = document.createElement('a');
                callLink.innerHTML = "Call";
                callLink.setAttribute('href', 'tel:9197038475');
                callLink.setAttribute('class', 'response-cta');
                let textLink = document.createElement('a');
                textLink.innerHTML = "Text";
                textLink.setAttribute('href', 'sms:9197038475');
                textLink.setAttribute('class', 'response-cta');
                setTimeout(function() {
                    chatResponses.appendChild(textLink);
                    chatResponses.appendChild(callLink);
                    chatResponses.scrollTo(0, chatResponses.scrollHeight);
                }, 1000);  
        } 
//location
        else if (userInput.value.toLowerCase().includes('location') || userInput.value.toLowerCase().includes('area') || userInput.value.toLowerCase().includes('what areas do you work') || userInput.value.toLowerCase().includes('where do you work') || userInput.value.toLowerCase().includes('located')) {
                userResponse.style.display = "flex";
                newBotResponse.innerHTML = "That Digital Dude offers web and digital services to clients nationwide.";  
        } 
//email
        else if (userInput.value.toLowerCase().includes('email') || userInput.value.toLowerCase().includes('contact') || userInput.value.toLowerCase().includes('help')) {
                userResponse.style.display = "flex";
                newBotResponse.innerHTML = "Choose how you would like to contact That Digital Dude below.";
                let quoteLink = document.createElement('a');
                quoteLink.innerHTML = "Email";
                quoteLink.setAttribute('href', 'https://www.thatdigitaldude.com/#contact');
                quoteLink.setAttribute('class', 'response-cta');
                let callLink = document.createElement('a');
                callLink.innerHTML = "Call";
                callLink.setAttribute('href', 'tel:9197038475');
                callLink.setAttribute('class', 'response-cta');
                let textLink = document.createElement('a');
                textLink.innerHTML = "Text";
                textLink.setAttribute('href', 'sms:9197038475');
                textLink.setAttribute('class', 'response-cta');
                setTimeout(function() {
                    chatResponses.appendChild(callLink);
                    chatResponses.appendChild(textLink);
                    chatResponses.appendChild(quoteLink); 
                    chatResponses.scrollTo(0, chatResponses.scrollHeight);
                }, 1000); 
        } 
//web design
        else if (userInput.value.toLowerCase().includes('web design pages') || userInput.value.toLowerCase().includes('web pages') || userInput.value.toLowerCase().includes('website') || userInput.value.toLowerCase().includes('web design services') || userInput.value.toLowerCase().includes('web design')) {
            userResponse.style.display = "flex";
            newBotResponse.innerHTML = "Learn more about our web design services by clicking the button below.";
            let webDesignLink = document.createElement('a');
            webDesignLink.innerHTML = "Web Design Services";
            webDesignLink.setAttribute('href', 'https://www.thatdigitaldude.com/services/web-design');
            webDesignLink.setAttribute('class', 'response-cta');
            setTimeout(function() {
                chatResponses.appendChild(webDesignLink);
                chatResponses.scrollTo(0, chatResponses.scrollHeight);
            }, 1000);
        }

//SEO
        else if (userInput.value.toLowerCase().includes('seo') || userInput.value.toLowerCase().includes('search engine') || userInput.value.toLowerCase().includes('optimize') || userInput.value.toLowerCase().includes('google search') || userInput.value.toLowerCase().includes('keywords')) {
            userResponse.style.display = "flex";
            newBotResponse.innerHTML = "Learn more about That Digital Dude's SEO services by clicking the button below.";
            let webDesignLink = document.createElement('a');
            webDesignLink.innerHTML = "SEO Services";
            webDesignLink.setAttribute('href', 'https://www.thatdigitaldude.com/services/seo');
            webDesignLink.setAttribute('class', 'response-cta');
            setTimeout(function() {
                chatResponses.appendChild(webDesignLink);
                chatResponses.scrollTo(0, chatResponses.scrollHeight);
            }, 1000);
        }

//Google Ads
        else if (userInput.value.toLowerCase().includes('ppc') || userInput.value.toLowerCase().includes('google ad') || userInput.value.toLowerCase().includes('advertising') || userInput.value.toLowerCase().includes('ads') || userInput.value.toLowerCase().includes('online ad') && !userInput.value.includes('Google Ad')) {
            userResponse.style.display = "flex";
            newBotResponse.innerHTML = "Learn more about That Digital Dude's Google Ads services by clicking the button below.";
            let webDesignLink = document.createElement('a');
            webDesignLink.innerHTML = "Google Ads Services";
            webDesignLink.setAttribute('href', 'https://www.thatdigitaldude.com/services/ppc');
            webDesignLink.setAttribute('class', 'response-cta');
            setTimeout(function() {
                chatResponses.appendChild(webDesignLink);
                chatResponses.scrollTo(0, chatResponses.scrollHeight);
            }, 1000);
        }
//hosting
        else if (userInput.value.toLowerCase().includes('hosting') || userInput.value.toLowerCase().includes('where to host website') || userInput.value.toLowerCase().includes('host') || userInput.value.toLowerCase().includes('web design services')) {
        userResponse.style.display = "flex";
        newBotResponse.innerHTML = "That Digital Dude recommends hosting with Flywheel. It's what our website is hosted on and what we host most of our client's website on. Click the button below to get Flywheel hosting.";
        let webDesignLink = document.createElement('a');
        webDesignLink.innerHTML = "Get Flywheel Hosting";
        webDesignLink.setAttribute('href', 'https://share.getf.ly/c20k1a');
        webDesignLink.setAttribute('class', 'response-cta');
        setTimeout(function() {
            chatResponses.appendChild(webDesignLink);
        }, 1000);
        }
//services
       else if (userInput.value.toLowerCase().includes('services') || userInput.value.toLowerCase().includes('seo') || userInput.value.toLowerCase().includes('search engine') || userInput.value.toLowerCase().includes('wordpress') || userInput.value.toLowerCase().includes('ppc') || userInput.value.toLowerCase().includes('service') && !userInput.value.includes('cost')) {
            userResponse.style.display = "flex";
            newBotResponse.innerHTML = `That Digital Dude's services include: ${services}. Learn more by clicking the button below.`;
            let webDesignLink = document.createElement('a');
            webDesignLink.innerHTML = "Services";
            webDesignLink.setAttribute('href', 'https://www.thatdigitaldude.com/services');
            webDesignLink.setAttribute('class', 'response-cta');
            setTimeout(function() {
                chatResponses.appendChild(webDesignLink);
                chatResponses.scrollTo(0, chatResponses.scrollHeight);
            }, 1000);
       }
//blog
      else if (userInput.value.toLowerCase().includes('blog') || userInput.value.toLowerCase().includes('article') && !userInput.value.includes('cost')) {
        userResponse.style.display = "flex";
        newBotResponse.innerHTML = "You can read our blogs by clicking the button below.";
        let webDesignLink = document.createElement('a');
        webDesignLink.innerHTML = "Blogs";
        webDesignLink.setAttribute('href', 'https://www.thatdigitaldude.com/blog');
        webDesignLink.setAttribute('class', 'response-cta');
        setTimeout(function() {
            chatResponses.appendChild(webDesignLink);
            chatResponses.scrollTo(0, chatResponses.scrollHeight);
        }, 1000);
      }
//why choose Digibot
      else if (userInput.value.toLowerCase().includes('you') || userInput.value.toLowerCase().includes('why digibot') || userInput.value.toLowerCase().includes('digi') && !userInput.value.includes('other chatbot')) {
        userResponse.style.display = "flex";
        newBotResponse.innerHTML = "Digibot is programmed just for your business. Meaning, all common questions your customers ask can easily be answered by Digibot. Also, Digibot is not going to slow down your website like the other heavy chatbots do. This is an important factor for user experience and SEO. Digibot is simple, but sweet.";
        setTimeout(function(){
            let webDesignLink = document.createElement('a');
            webDesignLink.innerHTML = "Learn more";
            webDesignLink.setAttribute('href', 'https://digibot.www.thatdigitaldude.com/digibot');
            webDesignLink.setAttribute('class', 'response-cta');
            chatResponses.appendChild(webDesignLink);
            pop.play();
            chatResponses.scrollTo(0, chatResponses.scrollHeight);
        }, 1000)
      }
//close chat by chat input value
        else if (userInput.value.toLowerCase().includes('close') || userInput.value.toLowerCase().includes('exit') || userInput.value.toLowerCase().includes('end') || userInput.value.toLowerCase().includes('no')) {
            newBotResponse.innerHTML = "Goodbye for now! Come back if you have any other questions.";
            setTimeout(function () {
                closeChatBtn.click();
            },4000);
//else   
        } else {
            userResponse.style.display = "flex";
            newBotResponse.innerHTML = "Sorry, I am not programmed to understand what that means. Try asking it another way or contact me through email or by phone by clicking an option below.";
            let quoteLink = document.createElement('a');
            quoteLink.innerHTML = "Email";
            quoteLink.setAttribute('href', 'https://www.thatdigitaldude.com/#contact');
            quoteLink.setAttribute('class', 'response-cta'); 
            let callLink = document.createElement('a');
            callLink.innerHTML = "Call";
            callLink.setAttribute('href', 'tel:9197038475');
            callLink.setAttribute('class', 'response-cta');
            let textLink = document.createElement('a');
            textLink.innerHTML = "Text";
            textLink.setAttribute('href', 'sms:9197038475');
            textLink.setAttribute('class', 'response-cta');
            setTimeout(function() {
                chatResponses.appendChild(callLink);
                chatResponses.appendChild(textLink);
                chatResponses.appendChild(quoteLink); 
                pop.play();
                chatResponses.scrollTo(0, chatResponses.scrollHeight);
            }, 1000);
        }
//auto scroll to bottom of chat
    chatResponses.scrollTo(0, chatResponses.scrollHeight);
    setTimeout(function() {
        userInput.value =  "";
    }, 100);

    /*setTimeout(function() {
        botResponse.classList.remove('scale-up');
    }, 1000);*/
    pop.play();
}

//notification number function
let runNotification = () => {
setTimeout(function() {
    notifaction.classList.add('shake-animation');
}, 2500);
}
setTimeout(function() {
    runNotification();
}, 5000);


//INTRO MESSAGE - auto bot response to advertise Digibot for client websites
let introBotMessage = () => {
  setTimeout(function() {
    let newBotResponse = document.createElement('p');
    let createDigibot = document.createElement('img');
    let responseWrapper = document.createElement('div');
    createDigibot.setAttribute('src', 'https://cdn.iconscout.com/icon/premium/png-256-thumb/chatbot-5-902430.png?w=256&f=avif');
    createDigibot.setAttribute('id', 'digibotImg');
    createDigibot.style.width = "40px";
    createDigibot.setAttribute('class','.fade-in')
    newBotResponse.setAttribute('id', 'botResponse');
    responseWrapper.setAttribute('id', 'responseWrapper');
    responseWrapper.appendChild(createDigibot);
    responseWrapper.appendChild(newBotResponse);
    chatResponses.appendChild(responseWrapper);
    newBotResponse.innerHTML = "What can I help you with? Services? Contact options? Quote? Let me know! Also, you can exit the chat at the top right corner or by typing 'end chat' or 'close chat'.";
//auto scroll to bottom of chat
    chatResponses.scrollTo(0, chatResponses.scrollHeight);
    pop.play();
}, 2000);
}

//auto bot response to advertise Digibot for client websites
setTimeout(function() {
    let newBotResponse = document.createElement('p');
    let createDigibot = document.createElement('img');
    let responseWrapper = document.createElement('div');
    createDigibot.setAttribute('src', 'https://cdn.iconscout.com/icon/premium/png-256-thumb/chatbot-5-902430.png?w=256&f=avif');
    createDigibot.setAttribute('id', 'digibotImg');
    createDigibot.style.width = "40px";
    createDigibot.setAttribute('class','.fade-in')
    newBotResponse.setAttribute('id', 'botResponse');
    responseWrapper.setAttribute('id', 'responseWrapper');
    responseWrapper.appendChild(createDigibot);
    responseWrapper.appendChild(newBotResponse);
    chatResponses.appendChild(responseWrapper);
    newBotResponse.innerHTML = "Want Digibot for your website?";
    let digibotLink = document.createElement('a');
    digibotLink.innerHTML = "Learn more";
    digibotLink.setAttribute('href', 'https://digibot.thatdigitaldude.com/digibot');
    digibotLink.setAttribute('class', 'response-cta');
    chatResponses.appendChild(digibotLink);
    //auto scroll to bottom of chat
    chatResponses.scrollTo(0, chatResponses.scrollHeight);
    pop.play();
}, 60000);

//open chatbot window
chatOpenBtn.addEventListener('click', function() {
    chatbot.style.display = "flex";
    chatOpenBtn.style.display = "none";
    introBotMessage();
    notifaction.classList.remove('shake-animation');
});

//close chatbot window
closeChatBtn.addEventListener('click', function() {
    chatbot.style.display = "none";
    chatOpenBtn.style.display = "block";
    setTimeout(function() {
        runNotification();
    }, 5000);
});

//run function on button click
chatBtn.addEventListener('click', getBotResponse);

//run function on "enter" key press
userInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      chatBtn.click();
    }
});


    return (
    <div>
    <div id="chatbotContainer">
        <div className="chatbot-contents">
          <button id="closeChatBtn"><i className="fa fa-times" aria-hidden="true"></i>
          </button>
          <div className="responses">
            <div id="responseInnerWrapper"></div>
              <p id="botResponse"><img id="digibotImg" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/chatbot-5-902430.png?w=256&f=avif" width="40px"/>Hi! I'm Digibot, here to help assist you with www.thatdigitaldude.com!</p>
              <p id="userResponse" className="hidden"></p>
          </div>
          <input type="text" placeholder="How can I help?" id="userInput"/>
          <button id="chatBtn"><i className="fa-solid fa-paper-plane"></i> Send</button>
          <span id="brandName">Developed by <a href="https://thatdigitaldude.com">That Digital Dude</a></span>
        </div>
      </div>
       <div id="chatOpenBtn">
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/chatbot-5-902430.png?w=256&f=avif"/>
            <span id="notification">1</span>
        </div>
        </div>
    )
}

export default Digibot
