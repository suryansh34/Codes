#include<iostream>
#include<vector>
using namespace std;
int main() {
    vector<vector<int>>queries;
    vector<int>arr;
    vector<int>ans;
    int n = queries.size();



    for(int i = 0; i< n; i++){
        int left = queries[i][0];
        int right = queries[i][1];

        int Xor_Val = 0;

        for( int j = left; j <= right; j++){
            Xor_Val = Xor_Val + arr[j];
        }


    }


    return 0;
}