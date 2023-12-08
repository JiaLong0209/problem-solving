# https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/r

# method 1
cockroach_speed <- function(s){
    floor(s*5/18 * 100)
}

# method 2
cockroach_speed <- function(s){
    s %/% 0.036
}

