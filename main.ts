basic.forever(function () {
    if (Rover.Ultrasonic() >= 20) {
        Rover.setALLRGB(Rover.colors(RoverColors.Green))
        Rover.Move(50)
    } else {
        Rover.setALLRGB(Rover.colors(RoverColors.Red))
        Rover.MotorRunDual(20, 0)
    }
})
