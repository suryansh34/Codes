```
Basic Templates:
```
# Selection Sort

```cpp
# Basic Templates:


for(int i = 0; i < n; i++){
    int index = i;
    int curr = arr[i];

    for(int j = 0; j < n; j++){
        if(arr[j]< curr){
            index = arr[j];
        }
    }
    swap(arr[i],arr[index]);
}

```



# Bubble Sort