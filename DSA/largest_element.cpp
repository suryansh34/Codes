// largest element in the array.
#include <iostream>

int main()
{
    int nums[] = {2, 7, 9, 0};
    int i, j;
    int n = 4;

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            if (nums[i] < nums[j])
            {
                break;
            }
        }

        if (j == n)
        {
            std::cout << "The largest element is: " << nums[i];
            break;
        }
    }

    return 0;
}