# https://www.codewars.com/kata/59f11118a5e129e591000134/train/r

# method 1
repeats <- function(arr) {
    max = 0
    for (i in 1:length(arr)){
        if(arr[i] %in% arr[i+1:length(arr)]){
            max = max - arr[i]
        }else{
            max = max + arr[i]
        }
    }
    return (max)
}


#method 2
repeats <- function(arr) sum(as.integer(names(which(table(arr)==1))))
