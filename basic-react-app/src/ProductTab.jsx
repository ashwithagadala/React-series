import Product from "./Product";
function ProductTab(){
    let styles={
        display:"flex",
        flexwrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
          

    };
    
    return (
        <div style={styles}>
        <Product Title="logictech mx Master" idx={0}/>
        <Product  Title="Apple pencil" idx={1}/>
        <Product  Title="zerbonics " idx={2}/>
        <Product Title="petronics toad 23" idx={3}/>
        </div>
    );

}
export default ProductTab;