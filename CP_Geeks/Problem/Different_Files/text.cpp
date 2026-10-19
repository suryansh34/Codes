#include<iostream>
using namespace std;
int main() {
    // strings method to access --> txt.size() or txt.length().
    // number of inputs.
    int t;
    cin>>t;
    for(int j=1;j<=t;j++){
        string txt;
        cin>>txt;
        // calculating txt length from 
        for(int i=1; i < txt.length() - 1;i++){ 
            
        }
        if(txt.length()>10){
            cout<<txt[0]<<txt.length()-2<<txt[txt.length()-1];
        }else{
            cout<<txt;
        }
    }
    
    return 0;
}