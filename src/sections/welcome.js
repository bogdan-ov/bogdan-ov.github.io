import * as utils from "../utils";
import * as elements from "../elements";

const SPLASHES = [
    "welcome",
    "yeaaah",
    "im here!",
    "aaahhhhhhh!!",
    "huh?",
    "bogdanov",
    "my site",
    "good\nmorning",
    "coffee",
    "ready?",
    "lets go",
    "lalala",
    "wow",
    "strange",
    "i like vhs",
    "hmmmm",
    "im not",
    "aaaaa!!!",
    "hhahaahah",
    "happen",
    "milk",
    "clouds\nare around",
    "look at me",
    "open eyes",
    "close eyes",
    "wrong way",
    "!error!!",
    "my page",
    "your\npleasure",
    "try again",
    "reload this",
    "reject!",
    "what?",
    "oh my",
    "i need more",
    "repeat",
    "good",
    "feel good",
    "im fine",
    "how are\nyou?",
    "limited\nlength",
    "ooouuua",
    "what is it?",
    "oh hi",
    "goodbye",
    "see ya",
    "shshshh",
    "touch",
    "super!",
    "none",
    "brand new\nsite",
    "oh",
    "me",
    "you",
    "we",
    "he",
    "she",
    "her socks",
    "get outn\nhere",
    "cmon",
    "lsd",
    "lovesick",
    "im sick",
    "no no nono",
    "now relax",
    "funny",
    "have fun",
    "oh no",
    "oh yeah",
    "bullshit",
    "fuck!",
    "rainy day",
    "sunny day",
    "cloudy day",
    "gray sky",
    "blue eyes",
    "touch\nur skin",
    "internet",
    "im a\nteapot",
    "this is\n a joke",
    "shhhh",
    "look behind",
    "tried my\nbest",
    "weather",
    "hey",
    "hello",
    "bye",
    "next time",
    "may be",
    "not a\nsugar",
    "not you\nagain",
    "too many",
    "too much",
    "is anyone\n here??",
    "thats all",
    "die alone",
    "die in safety",
    "be different",
    "rewritten\nin js!",
    "telepathic\nonset",
    "dismay!",
    "atm da be",
    "fuck frameworks!",
    "password pls"
]

export function initWelcome() {
    const section = document.querySelector(".welcome-section");

    // Add crazy text after page load
    addEventListener("load", ()=> {
        const title = new elements.CrazyText(utils.randomItem(SPLASHES));
        title.appendTo(section);
    })
}
