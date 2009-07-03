var projectile : ParticleEmitter;
var puff : ParticleEmitter; // explosion! ...but not really.
//var projectileAnimator : ParticleAnimator;
var initialSpeed = 100.0;
var reloadTime = 0.1;

private var lastShot = -10.0;

function Update () { 
	if (Input.GetButtonDown("Fire1")) {
		// Instantiate the projectile at the position and rotation of this transform
		var clone : ParticleEmitter = Instantiate(projectile, transform.position, transform.rotation); //, transform.position, transform.rotation
		
		clone.emit = true;
		clone.localVelocity =Vector3.forward * -initialSpeed;
		// Give the cloned object an initial velocity along the current
		// object's Z axis
		//clone.particles.force = transform.TransformDirection (Vector3.forward * 100);
	}
}

function OnCollisionEnter(projectile) {
	var clone : ParticleEmitter = Instantiate(puff, transform.position, transform.rotation);
	clone.emit = true;
}