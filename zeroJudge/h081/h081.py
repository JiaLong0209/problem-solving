# https://zerojudge.tw/ShowProblem?problemid=h081
D = list(map(int, input().split()))[1]
arr = list(map(int, input().split()))
is_hold, x, sum = True, arr[0], 0
for i in arr:
    if(i >= x + D):
        sum += i-x 
        x = i
        is_hold = not is_hold
    elif(i < x - D and not is_hold):
        x = i
        is_hold = not is_hold
print(sum)
    
