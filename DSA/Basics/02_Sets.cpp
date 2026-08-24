#include <iostream>
using namespace std;
int main()
{

    //? inserting values at the end of the sets.

    // string sets[5] = {"apple","banana","mango","grape"};

    // sets[4] = "guava";
    // for(int i = 0; i<=5; i++ ){
    //     cout<<sets[i]<<" ";

    //? Inserting element in the beggining of the sets.

    // string sets[5] = {"apple","banana","mango","grape"};
    // sets[0] = "guava"; //! guava replace apple.
    // for(int i = 0; i <=5; i++){
    //     cout<<sets[i]<< " ";
    // }

    int n = 4;
    int i, pos;
    string val;

    string sets[10] = {"apple","banana","mango","grape"};
    cout<<"Enter a value to insert: ";
    cin>>val;

    cout<<"Enter a position to insert: ";
    cin>>pos;

    // * Changing the indexing of setsay, here

    for(i=n-1;i>=pos; i--){
        sets[i+1] = sets[i];
         
    }

    // * Storing pos in val
    sets[pos] = val;
    n = n + 1;

    //*setsay after insertion:
    for(i=0;i<n;i++){
        cout<< sets[i] << " ";
    }
    
    

    return 0;
}