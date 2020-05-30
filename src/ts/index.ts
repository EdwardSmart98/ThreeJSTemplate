import * as THREE from "three";
import { OrbitControls } from './lib/orbitControls';
import Stats from "stats.js";
import { Color } from "three";

let container : HTMLDivElement;
let scene : THREE.Scene;
let camera : THREE.PerspectiveCamera;
let renderer : THREE.WebGLRenderer;
let controls : OrbitControls;

//Display FPS
const stats = new Stats();
stats.showPanel(0);
document.body.appendChild( stats.dom );
init();
animate();


function init(){
    container = document.createElement('div');

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight);
    camera.position.setZ(3);
    renderer = new THREE.WebGLRenderer({alpha : true});
    renderer.setSize(window.innerWidth,window.innerHeight);


    //Add a cube to the scene.
    const geometry : THREE.BoxGeometry  = new THREE.BoxGeometry(1,1,1);
    const material : THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial({color: 0xffff00});
    const box : THREE.Mesh = new THREE.Mesh(geometry,material);

    scene.add(box);

    //Add light to the scene
    const DirectionalLight = new THREE.DirectionalLight( 0x0F0F0F,10);
    DirectionalLight.position.setZ(2);
    DirectionalLight.position.setY(2);
	DirectionalLight.rotation.set(0,0,-Math.PI/2);
    scene.add(DirectionalLight);
    
    window.addEventListener( "resize", onWindowResize, false );
	container.appendChild( renderer.domElement );
    document.body.appendChild( container );
    
    controls = new OrbitControls(camera,renderer.domElement);
}

function animate(){

    stats.begin();
    requestAnimationFrame(animate);
    render();
    stats.end();
}

function render(){
    if(controls){
        controls.update();
    }

    renderer.clear();
    renderer.render(scene,camera);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
}