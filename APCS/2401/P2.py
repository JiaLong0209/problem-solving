def move(nx, ny):
    global x
    global y
    if(nx >= 0 and nx < col and ny >= 0 and ny < row):
        x = nx
        y = ny

[row, col, k] = map(int, input().split())
honeycomb = []
direct = lambda x: -1 if int(x/3) else 1
direct_reverse = lambda x: 1 if int(x/3) else -1
path = []

for i in range(row):
    honeycomb.append(input()[:col])

y, x = row-1, 0
for n in map(int, input().split()):
    if(not(n%3)):
        move(x, y+direct_reverse(n))
    elif(n%3 == 1):
        move(x+direct(n), y)
    else:
        move(x+direct(n), y+direct(n))

    path.append(honeycomb[y][x])

print(''.join(path))
print(len(set(path)))

