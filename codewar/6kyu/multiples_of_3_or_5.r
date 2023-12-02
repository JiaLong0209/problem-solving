# https://www.codewars.com/kata/514b92a657cdc65150000006/train/r


# method 1
a <- function(i) {
    as.integer(!(i %% 3)) * i + as.integer(!(i %% 5)) * i - as.integer(!(i %% 15)) * i
}

solution <- function(numbers){
    sum <- 0
    for(i in 1:number-1){
        sum = a(i) + sum
        # cat(i, sum, '\n')
    }
    sum
}


# method 2
solution <- function(number){
  x = seq(1,number-1)
  return(sum(x[x%%3==0 | x%%5==0]))
}
