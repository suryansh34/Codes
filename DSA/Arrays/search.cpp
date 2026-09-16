// search the element in the array

#include<iostream>
using namespace std;
int main() {
    int arr[]= {4,8,3,2,8,1};
    int size = sizeof(arr)/sizeof(arr[0]);
    int num;
    std::cout<<"Enter element to Search: ";
    std::cin>>num;
    bool isThere = false;

    for(int i = 0; i < size; i++){
        if(arr[i]==num){
            isThere = true;
            break;
            // std::cout<< "Element Found"<<endl
        }
    }
    
    if(isThere = true) cout<<num<<": is Found";
    else{ cout<<"Not Found";}


    return 0;
}