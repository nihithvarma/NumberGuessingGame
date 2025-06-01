from logic import NumberGuessingGame
from utils import validate_guess

def play_game():
    game = NumberGuessingGame()

    print("Welcome to Number Guessing Game!")
    print(f"Guess a number between {game.lower_bound} and {game.upper_bound}. You have {game.max_attempts} attempts.")

    while not game.game_over():
        guess_input = input(f"Attempt {game.attempts_made + 1}/{game.max_attempts}: Enter your guess: ")
        valid, result = validate_guess(guess_input, game.lower_bound, game.upper_bound)

        if not valid:
            print(result)
            continue
        
        feedback = game.check_guess(result)
        print(feedback)
    
    if game.is_won:
        print(f"You won in {game.attempts_made} attempts!")
    else:
        print(f"Game over! The correct number was {game.secret_number}.")

if __name__ == "__main__":
    play_game()
