let head_count = 0
let current_head_down_time = 0
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) > 100) {
        current_head_down_time += 1
        head_count += 1
    } else {
        current_head_down_time = 0
    }
    if (current_head_down_time >= 5) {
        current_head_down_time = 0
        soundExpression.giggle.play()
        control.waitMicros(1000)
    }
})
