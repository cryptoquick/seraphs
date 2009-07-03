var leftEngine : ParticleEmitter;
var rightEngine : ParticleEmitter;
var metaportal : ParticleEmitter;

var falloff = 0.0;
var falloffSpeed = 5.0;
var puffRate = 20; // Number of puffs per unit of speed

function Update () {
//	falloff = PlayerMovement.yaw;
	
	// Makes the left or right engine emit when the player turns left or right.
	if(PlayerMovement.yaw < 0 ) { // && falloff < 0) {
		leftEngine.maxEmission = rigidbody.velocity.magnitude * puffRate;
		rightEngine.maxEmission = 0;
//		falloff -= falloffSpeed;
	} else if(PlayerMovement.yaw > 0 ) { //&& falloff > 0) {
		rightEngine.maxEmission = rigidbody.velocity.magnitude * puffRate;
		leftEngine.maxEmission = 0;
//		falloff += falloffSpeed;
	} else {
		leftEngine.maxEmission = rigidbody.velocity.magnitude * puffRate;
		rightEngine.maxEmission = rigidbody.velocity.magnitude * puffRate;
	}
//	print(falloff);
//	if(rigidbody.velocity.magnitude)
//	print(rigidbody.velocity.magnitude);
}