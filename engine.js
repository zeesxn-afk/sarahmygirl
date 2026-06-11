class Engine {
  constructor() {
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();
    this.objects = [];
  }

  add(obj){
    this.scene.add(obj);
    this.objects.push(obj);
  }

  update(dt){}
}

const engine = new Engine();
