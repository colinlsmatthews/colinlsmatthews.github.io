import React from 'react';
// import * as THREE from './_3D/three';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


function Shape(props) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animate );
    document.body.appendChild( renderer.domElement );

    let geometry;
    const box = new THREE.BoxGeometry( 1, 1, 1 );
    const sphere = new THREE.SphereGeometry( 1, 32, 32 );
    const cone = new THREE.ConeGeometry( 1, 1, 32 );
    if (props.shape === 'box') {
        geometry = box;
    } else if (props.shape === 'sphere') {
        geometry = sphere;
    } else if (props.shape === 'cone') {
        geometry = cone;
    } else {
        geometry = box;
    }

    const material = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
    const geo = new THREE.Mesh( geometry, material );
    
    function constructScene(geo) {
        scene.add( geo );
        const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( light );
        camera.position.z = 5;
        
        const controls = new OrbitControls( camera, renderer.domElement );
        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);
        controls.update();
        
    }

    constructScene(geo)
    
    function animate() {
        geo.rotation.x += 0.02;
        geo.rotation.y += 0.01;
        geo.rotation.z += 0.005;

        renderer.render( scene, camera );
    }
    
    animate();
  
    return (
    <></>
    );
}

export default Shape;
