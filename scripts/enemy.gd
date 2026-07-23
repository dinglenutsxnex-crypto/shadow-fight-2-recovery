extends CharacterBody2D

@export var speed := 150.0
@export var health := 100
@export var attack_damage := 15
@export var attack_range := 60.0

var player: CharacterBody2D
var is_attacking := false
var is_alive := true

@onready var sprite := $Sprite2D
@onready var anim := $AnimationPlayer
@onready var detection_area := $DetectionArea

signal died

func _ready() -> void:
    await get_tree().physics_frame
    var players := get_tree().get_nodes_in_group("player")
    if players.size() > 0:
        player = players[0]

func _physics_process(delta: float) -> void:
    if not is_alive or not player:
        return

    if not is_on_floor():
        velocity.y += ProjectSettings.get_setting("physics/2d/default_gravity") * delta

    var dist := global_position.distance_to(player.global_position)

    if dist < attack_range and not is_attacking:
        attack()
    elif dist < 400:
        var dir := (player.global_position - global_position).normalized()
        velocity.x = dir.x * speed
        if dir.x != 0:
            sprite.flip_h = dir.x < 0
    else:
        velocity.x = move_toward(velocity.x, 0, speed)

    move_and_slide()

func attack() -> void:
    is_attacking = true
    anim.play("attack")
    if player and global_position.distance_to(player.global_position) < attack_range:
        player.take_damage(attack_damage)
    await anim.animation_finished
    is_attacking = false

func take_damage(amount: int) -> void:
    if not is_alive:
        return
    health -= amount
    if health <= 0:
        die()

func die() -> void:
    is_alive = false
    died.emit()
    anim.play("death")
    await anim.animation_finished
    queue_free()
