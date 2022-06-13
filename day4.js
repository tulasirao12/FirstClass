let o={"name":"venkat","place":"ong"};
console.log(o.hasOwnProperty("place"));
function emp(name,sal,desg){
    this.name=name;
    this.sal=sal;
    this.desg=desg;

}
let obj= new emp("ravi",234,"ase")
console.log(obj);
const b =Object.entries(obj);
console.log(b);
let z=Object.create(o);
console.log(z.name);
const c = {"day":"thus"}
c.day="fri";
console.log(c);
let d =Object.assign(obj);
console.log(d);