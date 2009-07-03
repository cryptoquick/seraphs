var weaponLeft : ParticleEmitter;
var weaponRight : ParticleEmitter;

function Update () {
	if (Input.GetMouseButtonDown(0)) {
		weaponLeft.emit = true;
		Screen.lockCursor = true;
	} else {
		weaponLeft.emit = false;
	}
}