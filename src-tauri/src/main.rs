// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::sync::Arc;
use tauri::async_runtime::Mutex;

mod enemy;
mod commands;
mod state;
mod word_generator;

use state::GameState;


// Define the shared state type
struct SharedState {
    game_state: GameState,
}
fn main() {
  let initial_state = GameState::new("Alex".to_string());
    let shared_state = Arc::new(Mutex::new(
        SharedState { game_state: initial_state }
    ));

  tauri::Builder::default()
      .manage(shared_state)
      .invoke_handler(tauri::generate_handler![
            commands::setup_game
        ])
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
}



