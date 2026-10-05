#include<iostream>
#include<vector>
using namespace std;

int main() {
    int t;
    cin >> t;
    while(t--){

        
        int n, x;
        cin >> n >> x;
        vector<int>b(n);
        
        for(int i = 0; i < n; i++){
            cin>>b[i];

        
    }
    
    int low = 0 , high = 1e9;
    while(low<=high){

        for(int i = 0 ; i < n; i++){
            if(b[i]< mid){
                
            }
        }
        int mid = (low + high )/2;
        int ans = 0;
        if(mid<=x){
            ans = ans + mid;
            high = mid + 1;
        }
        else{
            high = mid -1 ;
        }
    }
}
    
    
    return 0;
}