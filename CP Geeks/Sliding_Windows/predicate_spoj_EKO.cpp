// #include<iostream>
#include<bits/stdc++.h>
using namespace std;
const int N = 1e6+10;
int n; // tress.
long long m; //wood we want.
long long trees[N];

bool isWoodSufficient(int h){
  long long wood = 0;
  for(int i = 0; i < n; i++){
    if(trees[i] >= h){
      wood = wood + (trees[i] - h);
    }
  }
  if(wood>=m){
    return true;
  }
  else{
    return false;
  }
}

int main() {
      cin>> n >> m;
      for(int i =0 ; i < n; i++){
        cin>>trees[i];
      }

      // height to cut the tree
      long long low = 0, high = 1e9;
      // T T T T T F F F F F F
      while(high - low > 1){
        long long mid = (high+low)/2;
        if(isWoodSufficient(mid)){
            low = mid;
        }
        else{
          high = mid - 1;
        }
      }
      if(isWoodSufficient(high)){
        cout<<high<<endl;
      }
      else if(isWoodSufficient(low)){
        cout<< low << endl;
      }
      // else{
      //   cout<< -1 ;
      // }

      return 0;
}