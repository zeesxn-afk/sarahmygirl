const dialogues = [
 "Some trains do not follow maps.",
 "They follow people who are ready to remember.",
 "Stone castles are not always made of stone.",
 "The sky reacts to intention here.",
 "You are closer than you think.",
 "This journey was never about distance."
];

let dIndex = 0;

function nextDialogue(){
  if(dIndex < dialogues.length){
    return dialogues[dIndex++];
  }
  return null;
}
