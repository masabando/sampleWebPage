import * as bootstrap from 'bootstrap';
import Hello from "./sub.js";

let hello = new Hello("近大太郎");

document.querySelector("#sayButton").addEventListener("click", () => {
  hello.say("こんにちは");
});

document.querySelector("#anotherSayButton").addEventListener("click", () => {
  hello.say("さようなら");
});
