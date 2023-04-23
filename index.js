const parentDiv = document.getElementById("parent-div");
const smiles = ["(•‿•)", "(-‿◦)", "(ᗒᗣᗕ)", "(●´⌓`●)", "( ͡° ͜ʖ ͡° )", "ಠ_ರೃ"];

for (let i = 1; i <= 5; i++) {
  const buttonDiv = document.createElement("div");
  parentDiv.appendChild(buttonDiv);
  const button = document.createElement("button");
  buttonDiv.appendChild(button);
  button.setAttribute("class", "bttn-view")
  const buttonContent = document.createTextNode(`${smiles[i-1]}`);
  button.appendChild(buttonContent);
  const divVotes = document.createElement("div");
  buttonDiv.appendChild(divVotes);
  divVotes.setAttribute("class", "votes-view");
  let j = 1;

  function votes() {
    const divVotesContent = document.createTextNode(j++);
    divVotes.appendChild(divVotesContent);
    if (j > 2) {
      divVotes.firstChild.remove();
    }
  }
  button.addEventListener("click", votes);
}

