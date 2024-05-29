use rand::{distributions::{Distribution, Uniform}, Rng};
use uuid::Uuid;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Position {
    x: f32,
    y: f32,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Enemy {
    id: String,
    content: String,
    position: Position,
    speed: f32,
    health: i32,
    is_active: bool,
    is_targeted: bool,
    completion: f32,
}

impl Enemy {
    pub fn id(&self) -> &String {
        &self.id
    }
    pub fn set_position(&mut self, position: Position) -> &Position {
        self.position = position;
        &self.position
    }

}

struct EnemyBuilder {
    content: String,
    speed: f32,
    health: i32,
}

impl EnemyBuilder {
    fn new(content: &str) -> Self {
        EnemyBuilder {
            content: content.to_string(),
            speed: 1.0,
            health: 1,
        }
    }

    fn speed(mut self, speed: f32) -> Self {
        self.speed = speed;
        self
    }

    fn health(mut self, health: i32) -> Self {
        self.health = health;
        self
    }

    fn build(self, id: String, position: Position) -> Enemy {
        Enemy {
            id,
            content: self.content,
            position,
            speed: self.speed,
            health: self.health,
            is_active: true,
            is_targeted: false,
            completion: 0.0,
        }
    }
}

pub fn create_enemies(num_enemies: usize, word_list: &[&str], screen_width: f32, screen_height: f32) -> Vec<Enemy> {
    let mut rng = rand::thread_rng();
    let word_dist = Uniform::from(0..word_list.len());
    let mut positions = Vec::new();

    (0..num_enemies).map(|_| {
        let content = word_list[word_dist.sample(&mut rng)];
        let id = Uuid::new_v4().to_string();
        let position = generate_non_overlapping_position(&mut positions, content.len() as f32 * 10.0, screen_width, screen_height);

        EnemyBuilder::new(content)
            .speed(rng.gen_range(0.5..2.0))
            .health(rng.gen_range(1..3))
            .build(id, position)
    }).collect()
}


fn generate_non_overlapping_position(positions: &mut Vec<Position>, width: f32, screen_width: f32, screen_height: f32) -> Position {
    let mut rng = rand::thread_rng();
    let x_dist = Uniform::from(0.0..screen_width - width);
    let y_dist = Uniform::from(0.0..screen_height);

    loop {
        let new_position = Position {
            x: x_dist.sample(&mut rng),
            y: y_dist.sample(&mut rng),
        };
        if !positions.iter().any(|pos| (new_position.x - pos.x).abs() < width) {
            positions.push(new_position.clone());
            return new_position;
        }
    }
}
