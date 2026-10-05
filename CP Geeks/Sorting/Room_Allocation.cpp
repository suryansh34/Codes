#include <bits/stdc++.h>
using namespace std;

int main(){

    int n;
    cin >> n;

    vector<pair<int,int>> customer(n);


    for(int i=0;i<n;i++){
        cin >> customer[i].first >> customer[i].second;
    }


    // sort by arrival time
    sort(customer.begin(), customer.end());


    vector<int> roomEnd;


    vector<int> ans(n);


    int rooms = 0;


    for(int i=0;i<n;i++){

        int arrival = customer[i].first;
        int departure = customer[i].second;


        bool found = false;


        // search for an empty room
        for(int j=0;j<roomEnd.size();j++){

            if(roomEnd[j] < arrival){

                roomEnd[j] = departure;
                found = true;
                break;
            }
        }


        // no room available
        if(found == false){

            rooms++;

            roomEnd.push_back(departure);
        }
    }


    cout << rooms << endl;

}