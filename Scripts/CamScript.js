// A simple smooth follow camera,
// that follows the targets forward direction
var target : Rigidbody;
var smooth = 0.3;
var distance = 5.0;
var xVelocity = 0.0;
//var originalPos = Vector3;

var catchupSpeed = 3;

function FixedUpdate () {
	var catchup = target.position - transform.position;
	rigidbody.AddForce(target.velocity + catchup * catchupSpeed);

	deltaRotation = target.rotation;
	rigidbody.MoveRotation (deltaRotation);
}