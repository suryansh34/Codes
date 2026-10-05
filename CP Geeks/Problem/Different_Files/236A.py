def main():
    distinct_chars = len(set(input()))
    
    if distinct_chars % 2 == 0:
        print("CHAT WITH HER!")
    else:
        print("IGNORE HIM!")

if __name__ == '__main__':
    main()