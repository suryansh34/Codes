#include <iostream>
using namespace std;
int main()
{

    //? inserting values at the end of the array.

    // string arr[5] = {"apple","banana","mango","grape"};

    // arr[4] = "guava";
    // for(int i = 0; i<=5; i++ ){
    //     cout<<arr[i]<<" ";

    //? Inserting element in the beggining of the array.

    // string arr[5] = {"apple","banana","mango","grape"};
    // arr[0] = "guava"; //! guava replace apple.
    // for(int i = 0; i <=5; i++){
    //     cout<<arr[i]<< " ";
    // }

    int n = 4;
    int i, pos;
    string val;

    string arr[10] = {"apple","banana","mango","grape"};
    cout<<"Enter a value to insert: ";
    cin>>val;

    cout<<"Enter a position to insert: ";
    cin>>pos;

    // * Changing the indexing of array, here

    for(i=n-1;i>=pos; i--){
        arr[i+1] = arr[i];
         
    }

    // * Storing pos in val
    arr[pos] = val;
    n = n + 1;

    //*array after insertion:
    for(i=0;i<n;i++){
        cout<< arr[i] << " ";
    }
    
    

    return 0;
}