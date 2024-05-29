use rand::{thread_rng};
use rand::seq::SliceRandom;  // For shuffling

/// Generates a list of words for the game.
///
/// # Arguments
///
/// * `count` - The number of words to return.
///
/// # Returns
///
/// A Vec<String> containing the selected words.
pub fn get_word_list(count: usize) -> Vec<String> {
    let available_words = vec![
        "algorithm", "array", "asynchronous", "binary", "boolean",
        "callback", "class", "closure", "constant", "constructor",
        "data", "database", "debug", "declaration", "decompile",
        "encryption", "function", "heritage", "implementation", "interface",
        "iterator", "lambda", "method", "object", "operator",
        "polymorphism", "procedure", "prototype", "recursion", "regex",
        "syntax", "variable", "virtual", "widget"
    ];

    // Convert to a Vec<String> to allow modification
    let mut words: Vec<String> = available_words.iter().map(|&s| s.to_string()).collect();

    // Shuffle the list of words
    let mut rng = thread_rng();
    words.shuffle(&mut rng);

    // Return the requested number of words, sliced from the shuffled array
    words.into_iter().take(count).collect()
}
