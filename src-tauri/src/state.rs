use serde::{Serialize, Deserialize};
use std::collections::HashMap;
use crate::enemy::{Enemy, Position};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Player {
    name: String,
    health: i32,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub(crate) struct GameState {
    pub enemies: HashMap<String, Enemy>,
    pub player: Player,
    pub score: i32,
}

impl GameState {
    pub fn new(player_name: String) -> Self {
        GameState {
            enemies: HashMap::new(),
            player: Player {
                name: player_name,
                health: 100,  // default health
            },
            score: 0,
        }
    }

    pub fn enemies(&self) -> &HashMap<String, Enemy> {
        &self.enemies
    }

    pub fn add_enemy(&mut self, enemy: Enemy) {
        let id = enemy.id().clone();
        self.enemies.insert(id, enemy);
    }

    pub fn update_enemy_position(&mut self, enemy_id: &str, new_position: Position) {
        if let Some(enemy) = self.enemies.get_mut(enemy_id) {
            enemy.set_position(new_position);
        }
    }

    pub fn remove_enemy(&mut self, enemy_id: &str) {
        self.enemies.remove(enemy_id);
    }

    pub fn get_enemy(&self, enemy_id: &str) -> Option<&Enemy> {
        self.enemies.get(enemy_id)
    }

    pub fn update_score(&mut self, points: i32) {
        self.score += points;
    }

    pub fn update_player_health(&mut self, health: i32) {
        self.player.health = health;
    }

    pub fn get_state_for_ui(&self) -> String {
        serde_json::to_string(self).unwrap()
    }
}

