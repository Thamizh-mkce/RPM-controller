var wheel = document.getElementById("wheel");
var speedControl = document.getElementById("speedControl");
var rpmDisplay = document.getElementById("rpmDisplay");
var lastRotation = 0;
var lastTime = 0;
var animationFrameId;

function rotateWheel(timestamp) {
  var rpm = speedControl.value;
  rpmDisplay.textContent = "Current RPM: " + rpm;

  var rotationSpeed = rpm * 6; // 6 degrees per second per RPM
  var deltaTime = (timestamp - lastTime) / 1000; // convert milliseconds to seconds
  lastRotation += rotationSpeed * deltaTime;

  wheel.style.transform = "rotate(" + lastRotation + "deg)";

  lastTime = timestamp;
  animationFrameId = requestAnimationFrame(rotateWheel);
}

speedControl.addEventListener("input", function () {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  lastTime = performance.now();
  animationFrameId = requestAnimationFrame(rotateWheel);
});
