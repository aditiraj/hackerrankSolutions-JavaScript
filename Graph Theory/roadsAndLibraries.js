function minCost(n,m,cLib,cRoad,connCities){

 /* If the cost of creating a library is less than the cost of creating a road then simply create libraries in each of the cities
   else you can use bfs to find all the connected cities and get the cost of creating a library in one city and the cost of 
   creating roads to all its connected cities.*/
   
    if(cLib<cRoad){
        return cLib*n;
    }
    var AdjList= new Map();
       
    var mySet= new Set();   
    for(var i=0;i<connCities.length;i++){         
       mySet.add(connCities[i][0]);
       mySet.add(connCities[i][1]);
}


var AdjList= new Map();
for(var i of mySet){
  AdjList.set(i,[]);
}
        
    for(var i=0; i<connCities.length; i++){
        AdjList.get(connCities[i][0]).push(connCities[i][1]);
        AdjList.get(connCities[i][1]).push(connCities[i][0]);
    }
    
    var getKeys= AdjList.keys();
    var visited={};
    var cost=0;
    var count=0;
    for(var i of getKeys){
        visited[i]= false; 
        count++;
    }
    if(count!=n){
        cost= cLib*(n-count);
    }
         
   var startingNode;  
    for(var prop in visited){
        var cities=[];
        if(visited[prop]==false){          
            startingNode= prop;
    cities.push(startingNode);
          
    var queueItems= [];
    visited[startingNode]= true;
         
    queueItems.push(startingNode);
    while(!queueItems.length==0){
        var getQueueElement=  parseInt(queueItems.shift());
        var getList= AdjList.get(getQueueElement);
        for(var i in getList){
            var neigh= getList[i];
            if(!visited[neigh]){
                visited[neigh]=true;
                cities.push(neigh);
                queueItems.push(neigh);
            }
        }
    }
            cost= cost+ (cLib+ cRoad*(cities.length-1));    
        }
    }
    
    return cost;      
}


function main() {
    var connCities=[];
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        connCities=[];
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        var cLib = parseInt(n_temp[2]);
        var cRoad = parseInt(n_temp[3]);
        for(var a1 = 0; a1 < m; a1++){
            var city_1_temp = readLine().split(' ');
            var city_1 = parseInt(city_1_temp[0]);
            var city_2 = parseInt(city_1_temp[1]);
            connCities.push([city_1,city_2]);
        }
        var result=minCost(n,m,cLib,cRoad,connCities);
        console.log(result);
    }    
}
