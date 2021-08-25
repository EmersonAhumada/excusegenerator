import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = result();
  });
  let result = () => {
    let who = ["the dog", "my granma", "his turtle", "my bird"];
    let random_who = Math.floor(Math.random() * who.length);

    let action = ["ate", "peed", "crushed", "broke"];
    let random_action = Math.floor(Math.random() * action.length);

    let what = ["my homework", "the keys", "the car"];
    let random_what = Math.floor(Math.random() * what.length);

    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    let random_when = Math.floor(Math.random() * when.length);

    return (
      who[random_who] +
      " " +
      action[random_action] +
      " " +
      what[random_what] +
      " " +
      when[random_when]
    );
  };
};
