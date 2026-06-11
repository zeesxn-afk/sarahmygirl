let cutscene = false;

function startEnding(){

  cutscene = true;

  engine.scene.fog = new THREE.Fog(0x0a0020, 5, 120);

  let castle = new THREE.Mesh(
    new THREE.ConeGeometry(10,14,7),
    new THREE.MeshStandardMaterial({color:0x0b0b18})
  );

  castle.position.set(0,0,-35);
  engine.add(castle);

  // sky bloom illusion (fake glow particles)
  for(let i=0;i<500;i++){
    let p = new THREE.Mesh(
      new THREE.SphereGeometry(0.04),
      new THREE.MeshBasicMaterial({color:0xffffff})
    );

    p.position.set(
      (Math.random()-0.5)*140,
      Math.random()*60,
      (Math.random()-0.5)*140
    );

    engine.add(p);
  }

  let text = "HAPPY BIRTHDAY TASNEEM";
  let i = 0;

  let interval = setInterval(()=>{

    if(i < text.length){

      let star = new THREE.Mesh(
        new THREE.SphereGeometry(0.25),
        new THREE.MeshBasicMaterial({color:0xffccff})
      );

      star.position.set(i*0.7 - 7, 7, -25);

      engine.add(star);
      i++;

    } else {
      clearInterval(interval);
      document.getElementById("finalBtn").style.display="block";
    }

  },120);
}
