import random

class NumberGuessingGame:
    def __init__(self, lower=1, upper=100, max_attempts=7):
        self.lower_bound = lower
        self.upper_bound = upper
        self.max_attempts = max_attempts
        self.secret_number = random.randint(lower, upper)
        self.attempts_made = 0
        self.is_won = False

    def check_guess(self, guess):
        self.attempts_made += 1
        if guess < self.secret_number:
            return "Too low!"
        elif guess > self.secret_number:
            return "Too high!"
        else:
            self.is_won = True
            return f"Correct! You guessed the number {self.secret_number}."
    
    def attempts_left(self):
        return self.max_attempts - self.attempts_made
    
    def game_over(self):
        return self.is_won or self.attempts_made >= self.max_attempts
