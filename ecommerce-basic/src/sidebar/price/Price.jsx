import Input from '../../components/Input';
import './Price.css';

function Price({handleChange}) {
  return (
    <div className='ml'>
      <h2 className="sidebar-title price-title">
        Price
      </h2>
      <label className="sidebar-label-container">
          <input 
            type="radio"
            handleChange={handleChange} 
            value="" 
            title="All" 
            name="test3" 
          />
          <span className="checkmark"></span>All
        </label>
        <Input 
          handleChange={handleChange}
          value={50}
          title="$0-50"
          name="test3"
          />
          <Input 
          handleChange={handleChange}
          value={100}
          title="$50-100"
          name="test3"/>
          <Input 
          handleChange={handleChange}
          value={150}
          title="$100-150"
          name="test3"/>
          <Input 
          handleChange={handleChange}
          value={200}
          title="Above $150"
          name="test3"/>
    </div>
  )
}

export default Price;
