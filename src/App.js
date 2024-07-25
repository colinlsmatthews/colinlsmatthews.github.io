import logo from './_media/logo.svg';
import './App.css';
import Header from './Header';
// import * as THREE from './_3D/three';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function App() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setAnimationLoop( animate );
  document.body.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
  scene.add( light );
  camera.position.z = 5;

  const controls = new OrbitControls( camera, renderer.domElement );
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);
  controls.update();

  function animate() {

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.005;

    renderer.render( scene, camera );

}
  animate();

  return (
    <>
      <Header />
    </>
  );
}

export default App;
