use std::sync::Arc;
use tauri::{State};
use tauri::async_runtime::Mutex;
use crate::enemy::{create_enemies};
use crate::SharedState;
use crate::word_generator::get_word_list;

#[tauri::command]
pub async fn setup_game(
    window: (f32, f32),
    state: State<'_, Arc<Mutex<SharedState>>>,
) -> Result<String, String> {
    println!("setup_game from Rust: {}", window.0);
    let state_arc_clone = Arc::clone(&state);
    let mut shared_state = state_arc_clone.lock().await;
    let (width, height) = window;

    let num_enemies = 5;
    let word_list: Vec<String> = get_word_list(5);

    // Now that you have the dimensions, create enemies
    let enemies = create_enemies(
        num_enemies,
        &word_list.iter().map(String::as_str).collect::<Vec<&str>>(), width, height);
    enemies.into_iter().for_each(|e| shared_state.game_state.add_enemy(e));
    // Ok(state)
    // let _state = shared_state.game_state.get_state_for_ui();
    // println!("State in Rust: {}", serde_json::to_string(&shared_state.game_state).unwrap());
    Ok(serde_json::to_string(&shared_state.game_state).unwrap())
}