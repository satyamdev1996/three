import * as Three from "https://unpkg.com/three@0.126.1/build/three.module.js"


const scene = new Three.Scene()
console.log(scene)
const camera = new Three.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
console.log(camera)
const renderer = new Three.WebGLRenderer()
console.log(renderer)

renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild(renderer.domElement)

const geometry = new Three.PlaneGeometry(5, 5, 10, 10);
const material = new Three.MeshPhongMaterial({ color: 0x00ff00, side: Three.DoubleSide });
const sphere = new Three.Mesh(geometry, material);
scene.add(sphere)
console.log(geometry)
camera.position.z = 35
renderer.render(scene, camera)


const light = new Three.DirectionalLight(0xffffff, 1)
light.position.set(0, 0, 10)
scene.add(light)



function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  sphere.rotation.x += 0.01
  // sphere.rotation.y += 0.01

}


animate()