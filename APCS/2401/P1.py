n, all = int(input()), []
for i in range(n):
    all.append(list(map(int, input().split())))
ans = sorted(all, key=lambda x: x[0]**2 + x[1]**2)[-2]
print(ans[0], ans[1])
