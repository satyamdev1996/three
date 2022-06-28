import * as Three from 'three';
import suntex from './images/sun.jpg'
import mertex from './images/mercury.jpg'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// console.log(OrbitControls)
var control;

const scene = new Three.Scene()
const textureLoader = new Three.TextureLoader();
console.log(scene)
const camera = new Three.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
console.log(camera)
const renderer = new Three.WebGLRenderer()
console.log(renderer)

renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild(renderer.domElement)

control = new OrbitControls(camera, renderer.domElement)

const particleGeometry = new Three.BufferGeometry;
const particleCount = 3000;
const posArray = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 2000
}
particleGeometry.setAttribute('position', new Three.BufferAttribute(posArray, 3))
const mat = new Three.PointsMaterial({
  size: 0.005
})

const particlemesh = new Three.Points(particleGeometry, mat)
const geometry = new Three.SphereGeometry(16, 30, 30);
const material = new Three.MeshPhongMaterial({ map: textureLoader.load(suntex), side: Three.DoubleSide });
const sphere = new Three.Mesh(geometry, material);


const merGeometry = new Three.SphereGeometry(3.2, 30, 30);
const MerMaterial = new Three.MeshStandardMaterial({ map: textureLoader.load(mertex), side: Three.DoubleSide });
const MerSphere = new Three.Mesh(merGeometry, MerMaterial);
MerSphere.position.x = 28
sphere.add(MerSphere)
scene.add(sphere)
scene.add(particlemesh)
console.log(geometry)
camera.position.z = 100
renderer.render(scene, camera)


const light = new Three.DirectionalLight(0xffffff, 1)
light.position.set(0, 0, 10)
scene.add(light)

document.addEventListener('mousemove', animateParticles)
let mouseX = 0;
let mouseY = 0;
function animateParticles(event) {
  mouseX = event.clientY
  mouseY = event.clientX
}
const clock = new Three.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()
  particlemesh.rotation.y = -mouseX * (elapsedTime * 0.00005)
  particlemesh.rotation.x = -mouseY * (elapsedTime * 0.00005)


}

function animate() {
  requestAnimationFrame(animate)
  tick()
  renderer.render(scene, camera)
  // sphere.rotation.x += 0.001
  sphere.rotation.y += 0.007
  MerSphere.rotation.y += 0.05

  // sphere.rotation.y += 0.01

}


animate()