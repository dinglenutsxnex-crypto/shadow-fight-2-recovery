extends CharacterBody2D

const SPEED = 300.0
const JUMP_VELOCITY = -400.0
const ATTACK_DAMAGE = 20

var health := 100
var energy := 100
var is_attacking := false
var facing_right := true

@onready var sprite := $Sprite2D
@onready var anim := $AnimationPlayer

signal health_changed(value: int)
signal energy_changed(value: int)

func _physics_process(delta: float) -> void:
    if not is_on_floor():
        velocity.y += ProjectSettings.get_setting("physics/2d/default_gravity") * delta

    var direction := Input.get_axis("move_left", "move_right")
    if direction:
        velocity.x = direction * SPEED
        if direction > 0 and not facing_right:
            flip()
        elif direction < 0 and facing_right:
            flip()
    else:
        velocity.x = move_toward(velocity.x, 0, SPEED)

    if Input.is_action_just_pressed("jump") and is_on_floor():
        velocity.y = JUMP_VELOCITY

    if Input.is_action_just_pressed("attack") and not is_attacking:
        attack()

    move_and_slide()

func flip() -> void:
    facing_right = not facing_right
    sprite.flip_h = not facing_right

func attack() -> void:
    is_attacking = true
    anim.play("attack")
    await anim.animation_finished
    is_attacking = false

func take_damage(amount: int) -> void:
    health = max(0, health - amount)
    health_changed.emit(health)
    if health <= 0:
        die()

func heal(amount: int) -> void:
    health = min(100, health + amount)
    health_changed.emit(health)

func use_energy(amount: int) -> bool:
    if energy >= amount:
        energy -= amount
        energy_changed.emit(energy)
        return true
    return false

func regen_energy(delta: float) -> void:
    energy = min(100, energy + delta * 10)
    energy_changed.emit(energy)

func die() -> void:
    print("Player died")
    # Handle death
