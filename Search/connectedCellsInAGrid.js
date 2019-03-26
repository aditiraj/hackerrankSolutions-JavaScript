function connectedCell(matrix,n,m) {
    
    var count=1;
     var visited=new Array(n);
    for(var i=0; i<n; i++){
        visited[i]= new Array(m);
    }
    for(var i=0; i<n; i++){
        for(var j=0; j<m; j++){
            visited[i][j]= false;
        }
    }
    
    var temp= 0;
    var maxCount=0;
    for(var i=0; i<n; i++){
        for(var j=0; j<m; j++){
            if(matrix[i][j]==1 && !visited[i][j]){
                count=1;
              temp= dfs(i,j); 
                maxCount= Math.max(temp,maxCount);
            }
        }
    }
  
     function dfs(i,j){
      
         visited[i][j]= true;
       
         if(i==0 && j==0){
            
                     if(matrix[i][j+1]==1 && !visited[i][j+1]){    
                         count++;    
                         dfs(i,j+1);
                    }
                    if(matrix[i+1][j]==1 && !visited[i+1][j]){
                        count++;
                        dfs(i+1,j);
                    } 
                    if(matrix[i+1][j+1]==1 && !visited[i+1][j+1]){
                        count++;
                        dfs(i+1,j+1);
                    }
                        
     }
         
         else if(i==0 && j>0 && j<=m-2){
               
                    if(matrix[i][j-1]==1 && !visited[i][j-1]){
                        count++;
                        dfs(i,j-1);
                    }
                    if(matrix[i][j+1]==1 && !visited[i][j+1]){
                        count++;
                        dfs(i,j+1);
                    }
                    if(matrix[i+1][j-1]==1 && !visited[i+1][j-1]){
                        count++;
                        dfs(i+1,j-1);
                    }
                    if(matrix[i+1][j]==1 && !visited[i+1][j]){
                        count++;
                        dfs(i+1,j);
                    }
                    if(matrix[i+1][j+1]==1 && !visited[i+1][j+1]){
                        count++;
                        dfs(i+1,j+1);
                    }
            }
         
         else if(i==0 && j==m-1){
             
                    if(matrix[i][j-1]==1 && !visited[i][j-1]){
                        count++;
                        dfs(i,j-1);          
                    }
                    if(matrix[i+1][j-1]==1 && !visited[i+1][j-1]){
                        count++;
                        dfs(i+1,j-1);
                    } 
                    if(matrix[i+1][j]==1 && !visited[i+1][j]){
                        count++;
                        dfs(i+1,j);
                    }
              
            }
            else if(i>0 && i<=n-2 && j==0){
             
                    if(matrix[i-1][j]==1 && !visited[i-1][j]){
                        count++;
                        dfs(i-1,j);          
                    }
                    if(matrix[i-1][j+1]==1 && !visited[i-1][j+1]){
                        count++;
                        dfs(i-1,j+1);
                    } 
                    if(matrix[i][j+1]==1 && !visited[i][j+1]){
                        count++;
                        dfs(i,j+1);
                    }
                    if(matrix[i+1][j]==1 && !visited[i+1][j]){
                        count++;
                        dfs(i+1,j);           
                    }
                    if(matrix[i+1][j+1]==1 && !visited[i+1][j+1]){
                        count++;
                        dfs(i+1,j+1);
                    }           
           
            }
            else if(i==n-1 && j==0){
             
                    if(matrix[i-1][j]==1 && !visited[i-1][j]){
                        count++;
                        dfs(i-1,j);          
                    }
                    if(matrix[i-1][j+1]==1 && !visited[i-1][j+1]){
                        count++;
                        dfs(i-1,j+1);
                    } 
                    if(matrix[i][j+1]==1 && !visited[i][j+1]){
                        count++;
                        dfs(i,j+1);
                    }
                  
                    }
            else if(i>0 && i<=n-2 && j==m-1){
             
                    if(matrix[i-1][j]==1 && !visited[i-1][j]){
                        count++;
                        dfs(i-1,j);          
                    }
                    if(matrix[i-1][j-1]==1 && !visited[i-1][j-1]){
                        count++;
                        dfs(i-1,j-1);
                    } 
                    if(matrix[i][j-1]==1 && !visited[i][j-1]){
                        count++;
                        dfs(i,j-1);
                    }
                    if(matrix[i+1][j-1]==1 && !visited[i+1][j-1]){
                        count++;
                        dfs(i+1,j-1);         
                    }
                    if(matrix[i+1][j]==1 && !visited[i+1][j]){
                        count++;
                        dfs(i+1,j);
                    }   
              
            }
            else if(i==n-1 && j==m-1){
            
                    if(matrix[i-1][j]==1 && !visited[i-1][j]){
                        count++;
                        dfs(i-1,j);          
                    }
                    if(matrix[i-1][j-1]==1 && !visited[i-1][j-1]){
                        count++;
                        dfs(i-1,j-1);
                    } 
                    if(matrix[i][j-1]==1 && !visited[i][j-1]){
                        count++;
                        dfs(i,j-1);
                    }    
             
            }
            else if(i==n-1 && j>0 && j<=m-2){
               
                    if(matrix[i-1][j]==1 && !visited[i-1][j]){
                        count++;
                        dfs(i-1,j);           
                    }
                    if(matrix[i-1][j-1]==1 && !visited[i-1][j-1]){
                        count++;
                        dfs(i-1,j-1);
                    } 
                    if(matrix[i][j-1]==1 && !visited[i][j-1]){
                        count++;
                        dfs(i,j-1);
                    }
                    if(matrix[i-1][j+1]==1 && !visited[i-1][j+1]){
                        count++;
                        dfs(i-1,j+1);         
                    }
                    if(matrix[i][j+1]==1 && !visited[i][j+1]){
                        count++;
                        dfs(i,j+1);
                    }                 
             
            }
            else{
             
                    if(matrix[i-1][j]==1 && !visited[i-1][j]){
                        count++;
                        dfs(i-1,j);           
                    }
                    if(matrix[i-1][j-1]==1 && !visited[i-1][j-1]){
                        count++;
                        dfs(i-1,j-1);
                    } 
                    if(matrix[i-1][j+1]==1 && !visited[i-1][j+1]){
                        count++;
                        dfs(i-1,j+1);         
                    }
                    if(matrix[i][j-1]==1 && !visited[i][j-1]){
                        count++;
                        dfs(i,j-1);
                    }
                    if(matrix[i][j+1]==1 && !visited[i][j+1]){
                        count++;
                        dfs(i,j+1);
                    }
                    if(matrix[i+1][j-1]==1 && !visited[i+1][j-1]){
                        count++;
                        dfs(i+1,j-1);         
                    }
                    if(matrix[i+1][j]==1 && !visited[i+1][j]){
                        count++;
                        dfs(i+1,j);
                    } 
                    if(matrix[i+1][j+1]==1 && !visited[i+1][j+1]){
                        count++;
                        dfs(i+1,j+1);         
                    }
            }
         
         return count;
     }
         
    
    return maxCount;
}

function main() {
    var n = parseInt(readLine());
    var m = parseInt(readLine());
    var matrix = [];
    for(matrix_i = 0; matrix_i < n; matrix_i++){
       matrix[matrix_i] = readLine().split(' ');
       matrix[matrix_i] = matrix[matrix_i].map(Number);
    }
    var result = connectedCell(matrix,n,m);
    process.stdout.write("" + result + "\n");

}
