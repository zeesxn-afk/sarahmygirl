let dialogueBox = document.getElementById("dialogue");
let finalBtn = document.getElementById("finalBtn");

let state = 0;

document.getElementById("start").onclick = () => {
  document.getElementById("title").style.display="none";

  initWorld();
  initPlayer();

  animate();
};

document.getElementById("interact").onclick = () => {

  let text = nextDialogue();

  if(text){
    dialogueBox.style.display="block";
    dialogueBox.innerText = text;
    state++;
  } else {
    startEnding();
  }
};

finalBtn.onclick = () => {
  window.open("https://sarahloveruwu.carrd.co/", "_blank");
};

function animate(){

  requestAnimationFrame(animate);

  let dt = engine.clock.getDelta();

  updatePlayer(dt);
  updateCamera();

  renderer.render(engine.scene, camera);
}
