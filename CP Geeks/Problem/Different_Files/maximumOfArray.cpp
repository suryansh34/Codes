// maximum sum of subarray with k elements.
#include<iostream>
#include<vector>
using namespace std;
int main(){
    vector<int>arr = {5,2,-1,0,3};
    int n = arr.size();
    int k;
    cin>>k;
    int maxSum = 0;
    for(int i = 0; i < n - k; i++){
        int currentSum =0;
        for(int j = i; j < k + i; j++){
            currentSum = currentSum + arr[j];
        }
        maxSum = max(currentSum,maxSum);

    }
    cout<<maxSum;
    
    return 0;

    

}