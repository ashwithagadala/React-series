import "./Product.css";
import Price from "./Price";
function Product({Title,idx}){
let oldPrices=["12,495","11,900","1,599","599"];
let newPrices=["8,999","9,1999","899","278"];
let description=[
    ["8,000 DPI","5 Programmble buttons"],
    ["intutive Touch surface", "designed for iPad Pro"],

   ["designed for iPad Pro","wireless"],
   ["wirless","optical orienation"]] ;
        return (
            <div className="Product" >
                <h4>{Title}</h4>
                <p>{description[idx][0]}</p>
                <p>{description[idx][1]}</p>
                 <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
            </div>
    
        );
    }
export default Product;