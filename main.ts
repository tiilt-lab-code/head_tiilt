input.onButtonPressed(Button.A, function () {
    angle_threshold += 5
    basic.showNumber(angle_threshold)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(head_count)
})
input.onButtonPressed(Button.B, function () {
    angle_threshold += -5
    basic.showNumber(angle_threshold)
})
let angle_threshold = 0
let head_count = 0
head_count = 0
let current_head_down_time = 0
angle_threshold = 100
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) > angle_threshold) {
        current_head_down_time += 1
        head_count += 1
    } else {
        current_head_down_time = 0
    }
    if (current_head_down_time >= 5) {
        current_head_down_time = 0
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    }
    basic.pause(500)
})
