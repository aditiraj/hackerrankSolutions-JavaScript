function shortestReach(n,m,arr,s){
   
    var finalArr=[];
    var mySet= new Set();
    for(var i=0; i<arr.length; i++){
        mySet.add(arr[i][0]);
        mySet.add(arr[i][1]);
    }
    var adjList= new Map();
    for(var i of mySet){
        adjList.set(i,[]);
    }
    for(var i=0; i<arr.length; i++){
        adjList.get(arr[i][0]).push(arr[i][1]);
        adjList.get(arr[i][1]).push(arr[i][0]);
    }
    var getKeys= adjList.keys();
    var keys=[];
    var objVisited= new Object();
    for(var i of getKeys){
        objVisited[i]=false;   
        keys.push(i);
    }
    
    var distArr=[];
    var queue= [];
    queue.push(s);
   
    objVisited[s]= true;
    distArr[s]= 0;
    while(!queue.length==0){
        var getQueueElement= queue.shift();
        if(keys.indexOf(getQueueElement)>=0){
        var getList= adjList.get(getQueueElement);  
        for(var i=0; i<getList.length; i++){
            var neigh= getList[i];
            if(!objVisited[neigh]){
                objVisited[neigh]= true;
                queue.push(neigh);           
                distArr[neigh]= distArr[getQueueElement]+6;
            }         
        }
        } 
    }
    
    for(var i=1; i<=n; i++){
        if(distArr[i]==undefined){
            finalArr.push(-1);
        }
        else if(distArr[i]!=undefined && distArr[i]!=0){
            finalArr.push(distArr[i]);
        }
    }
 
    return finalArr.join(" ");
    
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var arr=[];
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        for(var a1 = 0; a1 < m; a1++){
            var u_temp = readLine().split(' ');
            var u = parseInt(u_temp[0]);
            var v = parseInt(u_temp[1]);
            arr.push([u,v]);
        }
        var s = parseInt(readLine());
        var res=shortestReach(n,m,arr,s);
        //process.stdout.write("" + res + "\n");
    }

}
