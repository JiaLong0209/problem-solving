# https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/r


# method 1
find_dup <- function(arr) {
	for(i in arr){
		count <- 0
		for(j in arr){
			if(i == j) count = count + 1
			if(count > 1) return (i)
		}
	}
}

# method 2
find_dup <- function(arr){
  arr[which(duplicated(arr))]
}

# method 3
