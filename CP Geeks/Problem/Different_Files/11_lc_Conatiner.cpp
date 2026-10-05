//! BruteForce
// #include<iostream>
// #include<vector>
// using namespace std;
// int main() {
//     vector<int> arr= {1,8,6,2,5,4,8,3,7};
//     int n = arr.size();
//     int maxWater = 0;

//     for(int i =0; i <n; i++){        
//         for(int j = i + 1; j <n; j++){
//             // Height
//             int minHeight = std::min(arr[i],arr[j]);
//             int width = j - i;
//             int area = minHeight * width;

//             maxWater = max(maxWater,area);
//         }
//     }


//     return maxWater;
// }

#include<iostream>
#include<vector>
using namespace std;
int main() {
    vector<int>height={1,8,6,2,5,4,8,3,7};
    int n = height.size();
    int left = 0, right = n - 1;
    int maxWater = 0;

    while(left <=right){
        int width = right - left;
        int minHeight = min(height[left],height[right]);
        int area = minHeight * width;

        maxWater = max(maxWater,area);

        if(height[left] < height[right]){
            left++;
        } else {
            right--;
        }
    }


    return maxWater;
}