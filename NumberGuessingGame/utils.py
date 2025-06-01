def validate_guess(guess, lower, upper):
    if not guess.isdigit():
        return False, "Please enter a valid integer."
    guess_int = int(guess)
    if guess_int < lower or guess_int > upper:
        return False, f"Guess must be between {lower} and {upper}."
    return True, guess_int
