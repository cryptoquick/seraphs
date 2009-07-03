var player : Rigidbody;
var particleanimator : ParticleAnimator;

//var vel = Vector3(0.0, 0.0, 0.0);
//point = transform.InverseTransformPoint(Vector3(0, -.2, 0));

function FixedUpdate () {
	vel1 = player.velocity;
	vel = vel1.normalized;
	particleanimator.force = Vector3(-vel.z, vel.y, -vel.x);
}