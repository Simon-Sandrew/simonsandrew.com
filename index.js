import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0,0,10)




var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.setClearColor( 0x000000, 0);
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = .5;

window.addEventListener( 'resize', () =>{
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth/window.innerHeight;
	camera.updateProjectionMatrix();



} );

var hemilight = new THREE.HemisphereLight(0xFFFFFF, 0x0B132B, 10);
var CameraLight = new THREE.SpotLight(0x6FFFE9,5);
scene.add(CameraLight);
scene.add(hemilight);



var loader = new GLTFLoader();
var pentool;
var carot;
loader.load(
	'carots.gltf',
	function ( gltf ) {
		carot = gltf.scene;
		scene.add( gltf.scene );

		gltf.animations; 
		gltf.scene; 
		gltf.scenes; 
		gltf.cameras; 
		gltf.asset; 

	},
	
);

loader.load(
	
	'pentool.gltf',
	
	function ( gltf ) {
		pentool = gltf.scene;
		scene.add( gltf.scene );

		gltf.animations;
		gltf.scene;
		gltf.scenes; 
		gltf.cameras; 
		gltf.asset; 

	},
	
);

var change_model_location = function(){
		if(window.innerWidth <= 1200){
			camera.position.set(0,0,13);
			if(carot){
				carot.position.y = 7;
				carot.position.x = 0
			}
		 
			if(pentool){
				pentool.position.y = -7;
				pentool.position.x = 0;
			}
		}
		else{
		camera.position.set(0,0,13);
		if(pentool){
			pentool.position.x = window.innerWidth/150;
			pentool.position.y = 0;
			
		}
		if(carot) {
			carot.position.x = -window.innerWidth/150;
			carot.position.y = 0;
			
		}
	
		}
	
	
	};

var animate = function () {
	change_model_location();
	if (carot)carot.rotation.x += Math.PI/1001;
	if (carot)carot.rotation.z += Math.PI/1001;
	if(pentool) pentool.rotation.z -= Math.PI/1001;
	if(pentool) pentool.rotation.x -= Math.PI/1001;
	

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	CameraLight.position.set(camera.position.x +10, camera.position.y +10, camera.position.z +10);
	
};
animate();




	
