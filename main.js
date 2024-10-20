import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 10);

const canvas = document.getElementById('canvas');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.CylinderGeometry(5, 5, 5, 20, 10, true);
// (radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded)

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });

const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;
  cylinder.rotation.z += 0.01;
}

animate();