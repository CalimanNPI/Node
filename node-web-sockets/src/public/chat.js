const socket = io();

let user = document.getElementById("user");
let message = document.getElementById("message");
let messages = document.getElementById("messages");
let form = document.getElementById("form");
let actions = document.getElementById("actions");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log(message.value)
  if (user.value) {
    socket.emit("chat:message", { user: user.value, message: message.value });
    message.value = "";
  }
});

socket.on("chat:message", (msg) => {
    actions.innerHTML = ``;
  let item = document.createElement("li");
  item.textContent = msg.message;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

message.addEventListener("keypress", () => {
  socket.emit("chat:typing", user.value);
});

socket.on("chat:typing", (msg) => {
  actions.innerHTML = `<p>${msg} a typing a message</p>`;
});
