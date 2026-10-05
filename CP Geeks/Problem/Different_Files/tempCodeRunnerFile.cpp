#include<iostream>
using namespace std;
int main() {
    // strings method to access --> txt.size() or txt.length().
    // number of inputs.
    int t;
    cin>>t;
    for(int j=0;j<t;j++){
        
        string txt;
        cin>>txt;
        // calculating txt length from 
        for(int i=1; i < txt.length() - 1;i++){ 
            // std::cout<<i<<" ";
            // cout<<txt[i];
        }
        if(txt.length()>10){
            cout<<txt[0]<<txt.length()-2<<txt[txt.length()-1]<< '\n';
        }else{
            cout<<txt<< '\n';
        }
    }
    
    return 0;
}