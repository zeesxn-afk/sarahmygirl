let player;
let move = {w:false,a:false,s:false,d:false};

function initPlayer(){

  player = new THREE.Mesh(
    new THREE.BoxGeometry(0.5,1,0.3),
    new THREE.MeshStandardMaterial({color:0xffb6c1})
  );

  player.position.y = 1;
  engine.add(player);

  document.addEventListener("keydown",(e)=>{
    if(e.key==="w") move.w=true;
    if(e.key==="a") move.a=true;
    if(e.key==="s") move.s=true;
    if(e.key==="d") move.d=true;
  });

  document.addEventListener("keyup",(e)=>{
    if(e.key==="w") move.w=false;
    if(e.key==="a") move.a=false;
    if(e.key==="s") move.s=false;
    if(e.key==="d") move.d=false;
  });
}

function updatePlayer(dt){

  let speed = 3 * dt;

  if(move.w) player.position.z -= speed;
  if(move.s) player.position.z += speed;
  if(move.a) player.position.x -= speed;
  if(move.d) player.position.x += speed;
}
