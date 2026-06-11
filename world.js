let renderer, camera;

function initWorld(){

  camera = new THREE.PerspectiveCamera(70, innerWidth/innerHeight, 0.1, 1000);
  camera.position.set(0,2.2,6);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(innerWidth, innerHeight);
  document.body.appendChild(renderer.domElement);

  engine.scene.fog = new THREE.Fog(0x050014, 5, 80);

  const moon = new THREE.DirectionalLight(0xaac8ff, 1.2);
  moon.position.set(6,10,4);
  engine.add(moon);

  engine.add(new THREE.AmbientLight(0x1a1a2a));

  // TRAIN BODY (more realistic segmentation)
  for(let i=0;i<6;i++){
    let car = new THREE.Mesh(
      new THREE.BoxGeometry(4,2.3,8),
      new THREE.MeshStandardMaterial({
        color:0x141428,
        roughness:0.85,
        metalness:0.2
      })
    );

    car.position.z = -i*8;
    engine.add(car);

    // window glow strips
    for(let w=0; w<5; w++){
      let glow = new THREE.PointLight(0x7aaaff,0.4,10);
      glow.position.set(-1.6 + w*0.8, 1, car.position.z);
      engine.add(glow);
    }
  }

  // dense star field (depth illusion)
  for(let i=0;i<400;i++){
    let s = new THREE.Mesh(
      new THREE.SphereGeometry(0.03),
      new THREE.MeshBasicMaterial({color:0xffffff})
    );

    s.position.set(
      (Math.random()-0.5)*120,
      Math.random()*40,
      (Math.random()-0.5)*120
    );

    engine.add(s);
  }
}
