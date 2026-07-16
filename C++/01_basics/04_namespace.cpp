#include<iostream>

namespace first {
    int x = 1;
}
namespace second {
    int x = 2;
}
int main() {
/*
Namespace = provides a solution for preventing name conflicts in larghge projects. Each entry neeeds a unique name. A namespace allows for identically named entities as long as the namespaces ar different
*/
    // using namespace second;
    // // int x = 0;
    // // // int x = 1; // redeclaration of x --> error.
    // // std::cout << x<< '\n';

    // // std::cout << first::x << '\n'; // to get the value of namespace (namespace name :: variable )
    // std::cout<< x; // print second if uses "using namespace second"

    // // also we can also use first -->  but with first.x;
    // std::cout << first::x;


    using namespace std;

    string firstName = "Suryansh ";
    string surName = "Sahu";

    cout << firstName << surName;

    

    return 0;
}