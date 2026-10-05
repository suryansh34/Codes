#include<iostream>
#include<vector>
using namespace std;
int main() {
    std::vector<int>arr={11};
    int n = arr.size();
    int target = 11;
    int left = 0, right = n -1;
    std::cout<<arr.size()<<endl;
    while(left<right){
        if(arr[left]+arr[right]== target) return true;
        else if (arr[left]+arr[right] > target) right--;
        else left++;
    }
    return false;
}