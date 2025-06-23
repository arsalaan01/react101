import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";
import "./Sidebar.css";

function Sidebar({handleChange}) {
  console.log(handleChange);
  
  return (
    <>
        <section className="sidebar">
            <div className="logo-container">
                <h1>🛒</h1>
            </div>
            <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Colors handleChange={handleChange} />
        </section>
    </>
  )
}

export default Sidebar;
