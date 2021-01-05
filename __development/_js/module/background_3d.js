import * as THREE from 'three/build/three.module';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let container, stats, clock, mixer, actions, activeAction, previousAction;
let camera, scene, renderer, model;
let colors = {
    "white": "0xe0e0e0"
}

const init = () => {

    // カメラ
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 100);
    camera.position.set(-5, 3, 10);
    camera.lookAt(new THREE.Vector3(0, 2, 0));

    // シーン
    scene = new THREE.Scene();
    scene.background = new THREE.Color(colors.white);
    scene.fog = new THREE.Fog(colors.white);

    clock = new THREE.Clock();

    // ライト
    const light = new THREE.HemisphereLight(0xffffff, 0x444444);

}