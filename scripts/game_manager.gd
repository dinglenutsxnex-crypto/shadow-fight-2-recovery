extends Node

var score := 0
var enemies_killed := 0
var current_level := 1

signal score_changed(value: int)
signal enemy_killed(count: int)
signal level_changed(level: int)

func add_score(points: int) -> void:
    score += points
    score_changed.emit(score)

func on_enemy_died() -> void:
    enemies_killed += 1
    enemy_killed.emit(enemies_killed)
    add_score(100)

func next_level() -> void:
    current_level += 1
    level_changed.emit(current_level)
