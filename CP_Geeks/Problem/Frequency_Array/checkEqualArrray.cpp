#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int main() {
    vector<int> a = {1, 2, 5, 4, 0};
    vector<int> b = {2, 4, 5, 0, 1};
    
    sort(a.begin(),a.end());
        int aSum = 0;
        for(int i =0; i< a.size(); i++){
            aSum = aSum + a[i];
        }
        sort(b.begin(),b.end());
        int bSum = 0;
        for(int j = 0; j < b.size(); j++){
            bSum = bSum + b[j];
        }
        
        if(aSum == bSum){
            cout<<"Arrays are equal" << endl;
        }
        else{
            cout<<"Arrays are not equal";
        }

    return 0;
}