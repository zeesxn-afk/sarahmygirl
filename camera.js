function updateCamera(){

  let targetX = player.position.x;
  let targetZ = player.position.z + 6;

  camera.position.x += (targetX - camera.position.x) * 0.08;
  camera.position.z += (targetZ - camera.position.z) * 0.08;
  camera.position.y = 2.4;

  camera.lookAt(player.position);
}
