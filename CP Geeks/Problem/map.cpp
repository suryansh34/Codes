#include<iostream>
#include<vector>
#include<map>
using namespace std;
int characterReplacement(string s, int k){
    int ans = 0, maxFreq = 0, start = 0, end = 0;
    int n = s.size();
    map<char,int>mp;
    
    for(end = 0; end < n; end++){
        mp[s[end]]++;
        
        maxFreq = max(maxFreq,mp[s[end]]);

        while(((end-start+1)-maxFreq) > k){
            mp[s[start]]--;
            start++;
        }
        ans = max(ans,end-start+1);

    }
    return ans;
}
int main() {
    int k;
    string s;
    cout<<"Enter String: ";
    cin>>s;

    cout<<"Enter K: ";
    cin>>k;

    int result = characterReplacement(s,k);
    
    cout<< "Longest Repeating Character: " << result;
    return 0;
}