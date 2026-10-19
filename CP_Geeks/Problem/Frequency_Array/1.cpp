#include<iostream>
#include<vector>
using namespace std;
int main() {
    // count the frequencies of element in array.
    int arr[] = {3,5,1,6,1,3};
    int n = sizeof(arr)/sizeof(arr[0]);
    for(int i = 0; i < n; i++ ){
        bool alreadyCounted = false;
        
        // counting if element appeared before

        for(int k =0; k < i; k++){
            if(arr[i] == arr[k]){
                alreadyCounted = true;
                break;

            }
        }
        if(alreadyCounted = true){
            continue;
        }

        int count = 1;
        for(int j = i+1; j < n; j++){
            if(arr[i]==arr[j]){
                count = count + 1;
            }            
        }
        
        cout<<arr[i]  << "," << count << endl;
    }
    return 0;
}