import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()

const camera1 = new THREE.PerspectiveCamera(
    75,
    1,
    0.1,
    1000
)
const camera2 = new THREE.PerspectiveCamera(
    100,
    1,
    0.1,
    1000
)
const camera3 = new THREE.OrthographicCamera(
    -1,
    1,
    1,
    -1,
    0.1,
    1000
)
const camera4 = new THREE.OrthographicCamera(
    -4,
    4,
    4,
    -4
) 

camera1.position.z = 2
camera2.position.z = 2
camera2.lookAt(0, 0, 0)
camera3.position.z = 2
camera4.position.z = 2
camera4.lookAt(new THREE.Vector3(0, 6, 0))

const canvas1 = document.getElementById('c1') as HTMLCanvasElement

const renderer1 = new THREE.WebGLRenderer({ canvas: canvas1 })
renderer1.setSize(200, 200)
document.body.appendChild(renderer1.domElement)

new OrbitControls(camera1, renderer1.domElement)

const canvas2 = document.getElementById('c2') as HTMLCanvasElement

const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 })
renderer2.setSize(200, 200)


const canvas3 = document.getElementById("c3") as HTMLCanvasElement
const renderer3 = new THREE.WebGLRenderer({ canvas: canvas3 })
renderer3.setSize(200, 200)

const canvas4 = document.getElementById("c4") as HTMLCanvasElement
const renderer4 = new THREE.WebGLRenderer({ canvas: canvas4 })

const geometry = new THREE.TorusKnotGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
})

const torus = new THREE.Mesh(geometry, material)
torus.scale.set(0.5, 0.5, 0.5)
scene.add(torus)

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera1.aspect = window.innerWidth / window.innerHeight
//     camera1.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

function animate() {
    requestAnimationFrame(animate)

    torus.rotation.x += 0.01
    torus.rotation.y += 0.01

    render()
}

function render() {
    renderer1.render(scene, camera1)
    renderer2.render(scene, camera2)
    renderer3.render(scene, camera3)
    renderer4.render(scene, camera4)
}

animate()