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
const redirect = window.location;

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
    if (value === '$~ cd linkedin') {
        let name = "LinkedIn";
        let url = "https://www.linkedin.com/in/pvrahul/";
        form.action = url;
        openBox(name);

    } else if (value === '$~ cd github') {
        let name = "Github";
        let url = "https://github.com/pvrahul271199/";
        form.action = url;
        openBox(name);

    } else if (value === '$~ cd instagram') {
        let name = "Instagram";
        let url = "https://www.instagram.com/rahhxl/";
        form.action = url;
        openBox(name);

    } else if (value === '$~ cd whatsapp') {
        let name = "Whatsapp";
        let url = "https://api.whatsapp.com/send?phone=+919645299640";
        form.action = url;
        openBox(name);

    } else if (value === '$~ cd email') {
        let name = "Gmail";
        let url = "mailto:rahulpvconnect@gmail.com?subject=Hello%20Rahul&body=I%27d%20like%20to%20connect%20with%20you.";
        form.action = url;
        openBox(name);

    } else {
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

// class Pets {
//     constructor(name, age, func) {
//         this.name = name;
//         this.age = age;
//         this.func = func();
//     }
//     getAge(arg) {
//         return `Age of ${this.name} is ${this.age} and arg is ${arg}`

//     }
//     static name() {
//         return `Hello and arg `
//     }
// }

// const dog1 = new Pets("Golu", 3, () => {
//     console.log("Constructor Function")
// })

// function print(name, callback) {
//     console.log(name)
//     callback()
// };


// const scan = () => {
//     console.log("Callback Executed")
// }

// // print("rahul",scan)

// const books = {
//     name: 'The Alchemist',
//     price: 66,
//     getDetails: function (event, callback) {
//         console.log(`${this.name}`, `${this.price}`)
//         console.log("Event has completed now callback can be executed", event)
//         const req = {
//             body: "hello",
//             send: "sent"
//         };
//         const res = 5;
//         callback(req, res);
//     }

// }

// books.getDetails('Event', (req, res) => {
//     console.log("Executed Callback")
//     console.log(`${req.send} and ${res}`)
// })

// // console.log(typeof books)
// // const abcd = new String({})
// // console.log(typeof abcd)

// let newPromise = new Promise((resolve, reject) => {
//     const a = 5;
//     if (a == 5) {
//         resolve();
//     } else {
//         reject()
//     }
// })





// XML req
// // const request = async () => {
// //     const url = 'https://api.coingecko.com/api/v3/ping';
// //     let response = new XMLHttpRequest();
// //     response.onload = async () => {
// //         console.log("Okay")
// //     }
// //     response.onprogress = () => {
// //         console.log("Perfect Okay")
// //     }
// //     response.onerror = () => {
// //         console.log("Error Obtained")
// //     }
// //     response.open('get', url)
// //     response.send();

// // }


// const reqFunc = async () => {
//     const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
//     let request = await fetch(url);
//     let response = await request.json();
//     let coin = 'bitcoin';
//     for (let datas of response) {
//         const coinapi = datas.id;

//         if (coinapi === coin.toLowerCase()) {

//             console.log(datas.symbol)
//             console.log(datas.name)
//             console.log(datas.image)
//             console.log(datas.current_price)
//             console.log(datas.market_cap)
//             console.log(datas.rank)
//             console.log(datas.total_volume)
//             console.log(datas.price_change_percentage_24h)
//             // console.log(coin.id')
//         }
//     }
//     console.log(response[0])
//     console.log(typeof request);

// }

// reqFunc()
