# https://zerojudge.tw/ShowProblem?problemid=m370
[x, n] = list(map(int, input().split()))
p = sorted(list(map(int, input().split())))
l, r = len(list(filter(lambda i: i < x, p))), len(list(filter(lambda i: i > x, p)))
d = l < r
print(r if d else l, p[-1] if d else p[0])

