// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/cpp/6616b0964b1964217736e29f

// my solution
#include<string>
#include<iostream>
#include<vector>

using namespace std;

float find_uniq(const vector<float> &v) {
  int count[2] = {1,0};
  vector<float> num = {v[0]}; 
  for(unsigned long i = 1; i < v.size(); i++){
    if(v[i] == num[0]){
      count[0] ++;
    }else{
      if(num.size() == 1){
       num.push_back(v[i]); 
        count[1] = 1;
      } 
      count[1] ++;
    }
  }
  return count[0] == 1 ? num[0] : num[1];
} 



