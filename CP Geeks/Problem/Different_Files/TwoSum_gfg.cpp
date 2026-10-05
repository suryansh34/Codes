class Solution {
  public:
    bool twoSum(vector<int>& arr, int target) {
        sort(arr.begin(),arr.end());
        
        int n = arr.size();
        int left = 0, right = n - 1;
        
        while(left < right){
            if(arr[left] + arr[right] == target ) return true;
            else if(arr[left] + arr[right] > target) right--;
            else left++;
        }
    return false;
    }
};  