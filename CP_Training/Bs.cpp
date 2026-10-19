#include<iostream>
#include<vector>
using namespace std;
int main(){
    int target;
    cin>>target;

    int n = 5;
    vector<int>arr(n);
    for(int i = 0; i< n; i++){
        cin>>arr[i];
    }

    int low = 0, high = n -1;

    while(low<=high){
        int mid = low - (high - low)/ 2;

        if(arr[mid]==target){
            cout<<mid;
        }
        else if ( arr[mid] < target){
            low = mid + 1;

        }
        else{
            high = mid - 1;
        }
    }

    return 0;
}