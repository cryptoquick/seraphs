// Rigidbody: Mass, 1; Drag, 1.5; Angular Drag, 1.5;

// Vehicle Speed
var speed = 100.0;

// Mouse Speed
var sensitivityX = 3.0;
var sensitivityY = 3.0;

var sensitivityRoll = 5.0;
var stopSpeed = 3.0;

var pitch = 0.0;
static var yaw = 0.0;
var roll = 0;

var moveDirection = Vector3.zero;

function Start() {
	Screen.lockCursor = true;
	var screenlock = true;
}

function Update () {
	// Screen Locking
	if (Input.GetKey(KeyCode.Escape)) {
		Screen.lockCursor = false;
		screenlock = false;
	}
	if (Input.GetKey (KeyCode.Mouse0) && screenlock == false) {
		Screen.lockCursor = true;
	}
	
	// Sensitivity Adjustment
	if (Input.GetKey (KeyCode.Equals)) {
	//	print ("plus");
		sensitivityX += 0.5;
		sensitivityY += 0.5;
	}
	if (Input.GetKey (KeyCode.Minus)) {
	//	print ("minus");
		sensitivityX -= 0.5;
		sensitivityY -= 0.5;
	}
}

function FixedUpdate() {
	// Position Movement
	moveDirection = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis ("Jump"), Input.GetAxis("Vertical"));
	moveDirection *= speed;
	rigidbody.AddRelativeForce(moveDirection);
	
	if (Input.GetButton ("Stop")) {
		rigidbody.drag = 3;
		print ("stopping");
	} else if (Input.GetButton ("Stop") && rigidbody.velocity.magnitude > 50) {
		rigidbody.drag = 100;
		print ("stopping hard");
	} else {
		rigidbody.drag = 1;
	}
	/*
	var stoppage = Input.GetAxis("Stop") * stopSpeed;
	if (stoppage > 0) {
		moveDirection = Vector3.Lerp(moveDirection, Vector3(0, 0, 0), .3);
		rigidbody.velocity = moveDirection;
		print ("stopping");
	}
	*/
	// Mouse & Roll Rotation
	pitch = Input.GetAxis ("Mouse Y") * sensitivityY;
	yaw = Input.GetAxis ("Mouse X") * sensitivityX;
	roll = Input.GetAxis("Roll") * sensitivityRoll;
	rigidbody.AddRelativeTorque(Vector3(pitch, yaw, roll));
	
	

	
	/*if (rigidbody.velocity.magnitude > 48) {
		speed = 100;
		rigidbody.drag = .5;
	} else {
		speed = 50;
	}*/
//	print(rigidbody.angularVelocity);
//	print(rigidbody.velocity.magnitude);
}
/*
function OnMouseDown () {
// Lock the cursor
Screen.lockCursor = true;
}
*/