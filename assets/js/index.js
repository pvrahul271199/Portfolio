const about = document.querySelector("#about")
const contact = document.querySelector("#contact")
const help = document.querySelector("#help")
const aboutContent = document.querySelector("#about-content")
const contactContent = document.querySelector("#contact-content")
const helpContent = document.querySelector("#help-content")
const audio = document.querySelector("#audio");
const icon = document.querySelector("#sound");
const form = document.querySelector('#form');
const input = document.querySelector('#input');

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

    input.value = "$ or type 'cd github' here"

    const openBox = (name) => {
        const fbBox = new WinBox({
            title: `${name}`,
            x: "center",
            y: "center",
            width: "90%",
            height: "60%",
            html: `$~ Connecting to ${name.toLowerCase()}.....`,
            onfocus: function () {
                this.setBackground('#000')
            },
            onblur: function () {
                this.setBackground('#777')
            }
        })
    }

    input.addEventListener('click', () => {
        input.value = "$~ "
        console.log(window.location)
    })


form.addEventListener('submit', () => {
    
    const value = input.value.toLowerCase();
     if(value === '$~ cd facebook'){
        let name = "Facebook" ;  
        let url = "http://www.facebook.com/pvrahul.271199/";
        form.action = url;
        openBox(name);   

    } else if(value === '$~ cd github'){
        let name = "Github" ;  
        let url = "https://github.com/pvrahul271199/";
        form.action = url;
        openBox(name); 

    } else if(value === '$~ cd instagram'){
        let name = "Instagram" ;  
        let url = "https://www.instagram.com/rah_._ul/";
        form.action = url;
        console.log(form.action)
        openBox(name); 

    }
    else if(value === '$~ cd whatsapp'){
        let name = "Whatsapp" ;  
        let url = "https://api.whatsapp.com/send?phone=+919645299640";
        form.action = url;
        openBox(name); 

    } else if(value === '$~ cd email'){
        let name = "Gmail" ;  
        let url = "mailto:pvrahul.271199@gmail.com";
        form.action = url;
        openBox(name); 

    } 
    else{
        input.value = "$ error value"
        const wrongComm = new WinBox({
            title: `Command Error`,
            x: "center",
            y: "center",
            width: "75%",
            height: "39%",
            html: `$~ Command Error `,
            onfocus: function () {
                this.setBackground('#000')
            },
            onblur: function () {
                this.setBackground('#777')
            }
        })
        
    }
})


about.addEventListener('click', () => {
    const newBox = new WinBox({
        title: "About Rahul",
        x: "center",
        y: "center",
        width: "90%",
        height: "60%",
        modal: true,
        mount: aboutContent,
        onfocus: function () {
            this.setBackground('#000')
        },
        onblur: function () {
            this.setBackground('#777')
        }
    })
})

contact.addEventListener('click', () => {
    const contBox = new WinBox({
        title: "Contact with Rahul",
        // background: '#000',
        x: "center",
        y: "center",
        width: "90%",
        height: "60%",
        modal: true,
        mount: contactContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        }
    })
})

help.addEventListener('click', () => {
    const newBox = new WinBox({
        title: "Help",
        x: "center",
        y: "center",
        width: "90%",
        height: "60%",
        modal: true,
        mount: helpContent,
        onfocus: function () {
            this.setBackground('#000')
        },
        onblur: function () {
            this.setBackground('#777')
        }
    })
})

audio.autoplay = true;
icon.style.textDecoration = "none";

icon.addEventListener('click', () => {

    if (audio.paused) {
        icon.style.textDecoration = "none";
        audio.play();
    } else {
        icon.style.textDecoration = "line-through";
        audio.pause();
    }
})

