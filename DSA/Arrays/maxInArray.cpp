#include<iostream>
using namespace std;
int main() {
    int arr[]= {3,7,2,0,1,4,6};
    int size = sizeof(arr)/sizeof(arr[0]);
    int mx = INT8_MIN;
    // int mx = arr[0];
    int i;

    for(i=0;i<=size;i++){
        mx = max(mx,arr[i]);
        // if(arr[i]>mx){
            // max = arr[i];
        // }
    }
    cout<<mx;
    // std::cout<<"Maximum Number is: "<< max;
    return 0;
}