#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int days;
    cin>> days;

    for(int j =0; j < days; j++){
        int coins;
        cin>> coins;

        int count = 0;
        // while(coins>=arr[j]){
        //     count++;
        // }
        for(int i =0; i<n;i++){
            if(coins>=arr[i]){
                count++;
            }
        }
        cout<< count<< endl;

    }
    
    return 0;
}