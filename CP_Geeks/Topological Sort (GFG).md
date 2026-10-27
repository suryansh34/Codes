### Topological Sort (GFG)





class Solution {

&#x20; public:

&#x20;   void dfs(int source, stack<int>\& st, vector<bool>\& vis, vector<vector<int>>\& adj){

&#x20;       vis\[source] = true;

&#x20;       

&#x20;       for(auto z : adj\[source]){

&#x20;           if(!vis\[z]){

&#x20;               dfs(z,st,vis,adj);

&#x20;           }

&#x20;       }

&#x20;       st.push(source);

&#x20;   }

&#x20;   vector<int> topoSort(vector<vector<int>>\& adj) {

&#x20;       vector<int> ans;

&#x20;       int n = adj.size();

&#x20;       

&#x20;       vector<vool> vis(n,false);

&#x20;       

&#x20;       for(uint i = 0; i < n; I+=){

&#x20;           if(!vis\[i]){

&#x20;               dfs(i,st,vis,adj);

&#x20;           }

&#x20;       }

&#x20;       while(!st.empty()){

&#x20;           ans.push\_back(st.top());

&#x20;           st.pop();

&#x20;       }

&#x20;       

&#x20;       return ans;

&#x20;   }

};

