#include<iostream>
using namespace std;
int main() {
    int arr[]= {3,7,2,0,1,4,6};
    int size = sizeof(arr)/sizeof(arr[0]);
    int mx = INT8_MIN;
    int mn = INT8_MAX;
    // int mx = arr[0];
    int i;

    for(i=0;i<=size;i++){
        mx = max(mx,arr[i]);
        mn = min(mn,arr[i]);
        // if(arr[i]>mx){
            // max = arr[i];
        // }
    }
    cout<<"Maximum Element: "<<mx<<endl;
    cout<<"Minimum Element: "<< mn;
    // std::cout<<"Maximum Number is: "<< max;
    return 0;
}