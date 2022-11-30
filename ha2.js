function calculate(){

var n=prompt("Enter  value:"+n);
//document.getElementById('data1'),innerHTML=n
 const  cost1=[];
 const name=[];
 var total=parseInt(0);
 //console.log(2+6);
for(i=0;i<n;i++)
{
   cost1[i]= prompt("Enter a value");
    name[i]=prompt("Enter name");
   // document.getElementById('data2'+(i+1)),innerHTML=cost[i];
   // document.getElementById('data3'+(i+1)),innerHTML=name[i];
    
    total+=parseInt(cost1[i]);
    
}
//document.write(parseInt(total));

const last =[]
 for(i=0;i<n;i++)
 {
    last[i]=parseInt(0);
 }
 //document.write(total);
 var a=(total/n);

// document.write(a);
 for(i=0;i<n;i++)
{
    
       last[i]=parseInt(a)-parseInt(cost1[i]);
    
}
for(i=0;i<n;i++)
{
   // document.writeln(-last[i]);

    //last[i]=last[i];
    k=0;
    for(j=i+1;j<n;j++)
    {
    if(last[i]<0 && last[j]>0) 
    {
    if(last[i]+last[j]||last[i]+last[j]==0)
    {
        
        document.writeln(j,"should give ",last[j],"to", i)
        last[i]=last[i]+last[j];
        k=1;
        last[j]=last[j]-(-last[i]);
    }
    }
    else if(last[i]>0 && last[j]<0)
    {
        document.writeln(name[i]," should give ",last[i]," to ",name[j]);
        k=1;
    }
    if(k==0)
    {
    document.writeln("No one should give")
    }
    }
}
}

function restaurants(){
    window.open("https://www.tripadvisor.com/Restaurants");
    
}
function malls(){
    window.open("https://www.tripadvisor.in/Attractions-g297586-Activities-c26-t143-Hyderabad_Hyderabad_District_Telangana.html");
}
function temples(){
    window.open("https://traveltriangle.com/blog/temples-in-hyderabad/https://traveltriangle.com/blog/temples-in-hyderabad/");
}
function resorts(){
    window.open("https://www.tripadvisor.in/SmartDeals-g297586-zft9672-Hyderabad_Hyderabad_District_Telangana-Hotel-Deals.html");
}
function touristplaces(){
    window.open("https://www.hyderabadtourism.travel/places-to-visit-in-hyderabad")
}