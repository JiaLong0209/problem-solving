-- https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/lua
-- 8kyu

local solution = {}

function solution.powers_of_two(n)
  local arr = {}
  for i = 1, n+1 do arr[i] = 2 ^ (i-1) end
  return arr
end

return solution
