#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int main(){
	
	int n;
	cin>>n;
	vector<int> piles(n);

	for(int i = 0; i < n; i++){
		cin>>piles[i];
	}

    int hour;
    cin>>hour;
	
	int left = 1, right = *max_element(piles.begin(), piles.end());
	int ans = right;

	while(left<=right){

	long long mid = left + ( right - left ) / 2;    
    long long totalHour = 0;
	for(int i = 0 ; i < n; i ++){
        
		totalHour = totalHour + (piles[i] + mid - 1) / mid;
	}
	if(totalHour<=hour){
		ans = mid;
		right = mid - 1;
	}
	else{
	left = mid + 1;
	}
    }

	cout<<ans;

	return 0;

};